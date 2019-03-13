import * as ko from "knockout";
import * as Survey from "surveyjs/packages/survey-knockout/survey.ko.js";
import { SurveyPropertyModalEditor } from "./propertyModalEditor";
import { SurveyPropertyEditorBase } from "./propertyEditorBase";
import { editorLocalization } from "../editorLocalization";
import { SurveyPropertyEditorFactory } from "./propertyEditorFactory";

export class SurveyPropertyDefaultValueEditor extends SurveyPropertyModalEditor {
  public static defaultQuestionName = "question";
  public static createJsonFromQuestion(obj: any): any {
    var qjson = new Survey.JsonObject().toJsonObject(obj);
    qjson.name = SurveyPropertyDefaultValueEditor.defaultQuestionName;
    qjson.type = obj.getType();
    if (qjson.type == "expression") {
      qjson.type = "text";
    }
    qjson.titleLocation = "hidden";
    qjson.showClearButton = true;
    qjson.storeOthersAsComment = false;
    delete qjson["visible"];
    delete qjson["visibleIf"];
    delete qjson["enable"];
    delete qjson["enableIf"];
    return qjson;
  }
  public static createSurveyFromJsonQuestion(questionJson: any): Survey.Survey {
    var json = {
      questions: [],
      showNavigationButtons: false,
      showQuestionNumbers: "off"
    };
    json.questions.push(questionJson);
    return new Survey.Survey(json);
  }
  public survey: Survey.Survey;
  koSurvey: any;

  constructor(property: Survey.JsonObjectProperty) {
    super(property);
    this.koSurvey = ko.observable(new Survey.Survey());
  }
  public getValueText(value: any): string {
    if (!value) return editorLocalization.getString("pe.empty");
    return JSON.stringify(value);
  }
  public beforeShow() {
    super.beforeShow();
    this.createSurvey();
  }
  protected onBeforeApply() {
    if (!this.survey) return;
    this.setValueCore(this.getSurveyResult());
  }
  public get editorType(): string {
    return "value";
  }
  private createSurvey() {
    this.survey = SurveyPropertyDefaultValueEditor.createSurveyFromJsonQuestion(
      this.buildQuestionJson()
    );

    this.survey.setValue(
      SurveyPropertyDefaultValueEditor.defaultQuestionName,
      this.getSurveyInitialValue()
    );
    this.koSurvey(this.survey);
  }
  protected buildQuestionJson(): any {
    return SurveyPropertyDefaultValueEditor.createJsonFromQuestion(this.object);
  }
  protected getSurveyInitialValue(): any {
    return this.editingValue;
  }
  protected getSurveyResult(): any {
    return this.survey.getValue(
      SurveyPropertyDefaultValueEditor.defaultQuestionName
    );
  }
  private getJsonType(type: string): string {
    return type != "expression" ? type : "text";
  }
}

export class SurveyPropertyDefaultRowValueEditorBase extends SurveyPropertyDefaultValueEditor {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  public get editorTypeTemplate(): string {
    return "value";
  }
  protected getSurveyInitialValue(): any {
    var res = this.editingValue;
    if (!res) return res;
    if (!Array.isArray(res)) {
      res = [res];
    }
    return res;
  }
  protected getSurveyResult(): any {
    var res = super.getSurveyResult();
    if (res && Array.isArray(res)) {
      if (res.length == 0) return null;
      return res[0];
    }
    return res;
  }
}

export class SurveyPropertyDefaultRowValueEditor extends SurveyPropertyDefaultRowValueEditorBase {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  protected buildQuestionJson(): any {
    var qjson = super.buildQuestionJson();
    qjson.rowCount = 1;
    qjson.minRowCount = 1;
    qjson.maxRowCount = 1;
    qjson.columnsLocation = "vertical";
    return qjson;
  }
  public get editorType(): string {
    return "rowvalue";
  }
}

export class SurveyPropertyDefaultPanelValueEditor extends SurveyPropertyDefaultRowValueEditorBase {
  constructor(property: Survey.JsonObjectProperty) {
    super(property);
  }
  protected buildQuestionJson(): any {
    var qjson = super.buildQuestionJson();
    qjson.panelCount = 1;
    qjson.minPanelCount = 1;
    qjson.maxPanelCount = 1;
    return qjson;
  }
  public get editorType(): string {
    return "panelvalue";
  }
}

SurveyPropertyEditorFactory.registerEditor("value", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyDefaultValueEditor(property);
});

SurveyPropertyEditorFactory.registerEditor("rowvalue", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyDefaultRowValueEditor(property);
});

SurveyPropertyEditorFactory.registerEditor("panelvalue", function(
  property: Survey.JsonObjectProperty
): SurveyPropertyEditorBase {
  return new SurveyPropertyDefaultPanelValueEditor(property);
});
