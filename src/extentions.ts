import * as Survey from "surveyjs/packages/survey-knockout/survey.ko.js";
import { SurveyPropertyEditorFactory } from "./propertyEditors/propertyEditorFactory";
import { SurveyPropertyEditorBase } from "./propertyEditors/propertyEditorBase";

export class Extentions {
  public static registerCustomPropertyEditor(name: string, widgetJSON: any) {
    SurveyPropertyEditorFactory.registerCustomEditor(name, widgetJSON);
  }
  public static registerPropertyEditor(
    name: string,
    creator: (property: Survey.JsonObjectProperty) => SurveyPropertyEditorBase
  ) {
    SurveyPropertyEditorFactory.registerEditor(name, creator);
  }
}
