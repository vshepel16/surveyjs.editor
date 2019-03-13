import * as ko from "knockout";
import { SurveyHelper, ObjType } from "./surveyHelper";
import { editorLocalization } from "./editorLocalization";
import * as Survey from "surveyjs/packages/survey-knockout/survey.ko.js";

export class SurveyLiveTester {
  private json: any;
  koIsRunning = ko.observable(true);
  selectTestClick: any;
  selectPageClick: any;
  koResultText = ko.observable("");
  koResultData = ko.observableArray();
  koResultViewType = ko.observable("table");
  survey: Survey.Survey;
  koSurvey: any;
  koPages = ko.observableArray([]);
  koActivePage = ko.observable(null);
  setPageDisable: any;
  koLanguages: any;
  koActiveLanguage: any;
  showObjectTitles = false;

  onSurveyCreatedCallback: (survey: Survey.Survey) => any;
  constructor() {
    var self = this;
    this.selectTestClick = function() {
      self.testAgain();
    };
    this.selectPageClick = function(pageItem) {
      if (self.survey) {
        if (self.survey.state == "starting") {
          self.survey.start();
        }
        self.survey.currentPage = pageItem.page;
      }
    };
    this.koActivePage.subscribe(function(newValue) {
      if (!!newValue) {
        self.survey.currentPage = newValue;
      }
    });
    this.setPageDisable = function(option, item) {
      ko.applyBindingsToNode(option, { disable: item.koDisabled }, item);
    };
    this.koLanguages = ko.observable(this.getLanguages());
    this.koActiveLanguage = ko.observable("");
    this.koActiveLanguage.subscribe(function(newValue) {
      if (self.survey.locale == newValue) return;
      self.survey.locale = newValue;
      self.koSurvey(self.survey);
    });
    this.survey = new Survey.Survey();
    this.koSurvey = ko.observable(this.survey);
  }
  public setJSON(json: any) {
    this.json = json;
    if (json != null) {
      if (json.cookieName) {
        delete json.cookieName;
      }
    }
    this.survey = json ? new Survey.Survey(json) : new Survey.Survey();
    if (this.onSurveyCreatedCallback) this.onSurveyCreatedCallback(this.survey);
    var self = this;
    this.survey.onComplete.add((sender: Survey.Survey) => {
      self.koIsRunning(false);
      self.koResultText(JSON.stringify(self.survey.data, null, 4));
      self.koResultData(
        self.survey.getPlainData().map((dataItem: any) => {
          if (dataItem.isNode) {
            dataItem.collapsed = ko.observable(true);
          }
          return dataItem;
        })
      );
    });
    this.survey.onStarted.add((sender: Survey.Survey) => {
      self.setActivePageItem(<Survey.Page>self.survey.currentPage, true);
    });
    this.survey.onCurrentPageChanged.add((sender: Survey.Survey, options) => {
      self.koActivePage(options.newCurrentPage);
      self.setActivePageItem(options.oldCurrentPage, false);
      self.setActivePageItem(options.newCurrentPage, true);
    });
    this.survey.onPageVisibleChanged.add((sender: Survey.Survey, options) => {
      self.updatePageItem(options.page);
    });
  }
  private updatePageItem(page: Survey.Page) {
    var item = this.getPageItemByPage(page);
    if (item) {
      item.koVisible(page.isVisible);
      item.koDisabled(!page.isVisible);
    }
  }
  public show() {
    var pages = [];
    for (var i = 0; i < this.survey.pages.length; i++) {
      var page = this.survey.pages[i];
      pages.push({
        page: page,
        title: SurveyHelper.getObjectName(page, this.showObjectTitles),
        koVisible: ko.observable(page.isVisible),
        koDisabled: ko.observable(!page.isVisible),
        koActive: ko.observable(
          this.survey.state == "running" && page === this.survey.currentPage
        )
      });
    }
    this.koPages(pages);
    this.koSurvey(this.survey);
    this.koActivePage(this.survey.currentPage);
    this.koActiveLanguage(this.survey.locale);
    this.koIsRunning(true);
  }
  public get testSurveyAgainText() {
    return editorLocalization.getString("ed.testSurveyAgain");
  }
  public get surveyResultsText() {
    return editorLocalization.getString("ed.surveyResults");
  }
  public get resultsTitle() {
    return editorLocalization.getString("ed.resultsTitle");
  }
  public get resultsName() {
    return editorLocalization.getString("ed.resultsName");
  }
  public get resultsValue() {
    return editorLocalization.getString("ed.resultsValue");
  }
  public get resultsDisplayValue() {
    return editorLocalization.getString("ed.resultsDisplayValue");
  }
  public get selectPageText() {
    return editorLocalization.getString("ts.selectPage");
  }
  public get showInvisibleElementsText() {
    return editorLocalization.getString("ts.showInvisibleElements");
  }
  public selectTableClick(model: SurveyLiveTester) {
    model.koResultViewType("table");
  }
  public selectJsonClick(model: SurveyLiveTester) {
    model.koResultViewType("text");
  }
  public get localeText() {
    return editorLocalization.getString("pe.locale");
  }
  private testAgain() {
    this.setJSON(this.json);
    this.show();
  }
  private setActivePageItem(page: Survey.Page, val: boolean) {
    var item = this.getPageItemByPage(page);
    if (item) {
      item.koActive(val);
    }
  }
  private getPageItemByPage(page: Survey.Page): any {
    var items = this.koPages();
    for (var i = 0; i < items.length; i++) {
      if (items[i].page === page) return items[i];
    }
    return null;
  }
  private getLanguages(): Array<any> {
    var res = [];
    var locales = Survey.surveyLocalization.getLocales();
    for (var i = 0; i < locales.length; i++) {
      var loc = locales[i];
      res.push({ value: loc, text: editorLocalization.getLocaleName(loc) });
    }
    return res;
  }
  public koEventAfterRender(element: any, survey: any) {
    survey.onRendered.fire(self, {});
    survey["afterRenderSurvey"](element);
  }
}
