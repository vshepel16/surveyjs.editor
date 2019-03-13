import * as ko from "knockout";
import { editorLocalization } from "./editorLocalization";
import { SurveyHelper, ObjType } from "./surveyHelper";
import * as Survey from "surveyjs/packages/survey-knockout/survey.ko.js";

export class QuestionConverter {
  public static convertInfo = {};
  public static addConvertInfo(className: string, convertToClassName: string) {
    if (!QuestionConverter.convertInfo[className]) {
      QuestionConverter.convertInfo[className] = [];
    }
    QuestionConverter.convertInfo[className].push(convertToClassName);
  }
  public static getConvertToClasses(className: string): Array<string> {
    var res = QuestionConverter.convertInfo[className];
    return res ? res : [];
  }
  public static convertObject(
    obj: Survey.Question,
    convertToClass: string
  ): Survey.Question {
    if (!obj || !obj.parent || convertToClass == obj.getType()) return null;
    var newQuestion = Survey.QuestionFactory.Instance.createQuestion(
      convertToClass,
      obj.name
    );
    var jsonObj = new Survey.JsonObject();
    var json = jsonObj.toJsonObject(obj);
    jsonObj.toObject(json, newQuestion);
    var panel = <Survey.PanelModelBase>obj.parent;
    var index = panel.elements.indexOf(obj);
    panel.removeElement(obj);
    panel.addElement(newQuestion, index);
    return <Survey.Question>newQuestion;
  }
}

function createDefaultQuestionConverterItems() {
  var classes = Survey.JsonObject.metaData.getChildrenClasses(
    "selectbase",
    true
  );
  for (var i = 0; i < classes.length; i++) {
    for (var j = 0; j < classes.length; j++) {
      if (i == j) continue;
      QuestionConverter.addConvertInfo(classes[i].name, classes[j].name);
    }
  }
  QuestionConverter.addConvertInfo("text", "comment");
  QuestionConverter.addConvertInfo("comment", "text");
}

createDefaultQuestionConverterItems();
