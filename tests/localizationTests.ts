import { editorLocalization, defaultStrings } from "../src/editorLocalization";

export default QUnit.module("LocalizationTests");

QUnit.test("Get nested property", function(assert) {
  assert.equal(
    editorLocalization.getString("qt.text"),
    "Single Input",
    "find the nested property"
  );
  assert.equal(
    editorLocalization.getString("qt.text1"),
    "text1",
    "the nested property doesn't exist"
  );
  assert.equal(
    editorLocalization.getString("qt1.text"),
    "qt1",
    "the root property doesn't exist"
  );
});
QUnit.test("Get property name and title", function(assert) {
  assert.equal(
    editorLocalization.getPropertyName("text_name"),
    defaultStrings.p.name,
    "find the Name property"
  );
  assert.equal(
    editorLocalization.getPropertyTitle("text_name"),
    "",
    "there is not title for it"
  );
  assert.equal(
    editorLocalization.getPropertyName("text_title"),
    defaultStrings.p.title.name,
    "find the Title property"
  );
  assert.equal(
    editorLocalization.getPropertyTitle("text_title"),
    defaultStrings.p.title.title,
    "find the title for Title property"
  );
});
QUnit.test("add de localization", function(assert) {
  var deutschStrings = {
    p: {
      isRequired: "Wird benötigt"
    }
  };

  editorLocalization.locales["de"] = deutschStrings;
  editorLocalization.currentLocale = "de";

  assert.equal(
    editorLocalization.getString("p.isRequired"),
    deutschStrings.p.isRequired,
    "deutch locazation"
  );
  assert.equal(
    editorLocalization.getString("op.empty"),
    defaultStrings.op.empty,
    "default localization"
  );
});

QUnit.test("change default ('en') locale", function(assert) {
  var enStrings = defaultStrings;
  enStrings.p.isRequired = "some new text";

  editorLocalization.locales["en"] = enStrings;
  editorLocalization.currentLocale = "en";

  assert.equal(
    editorLocalization.getString("p.isRequired"),
    enStrings.p.isRequired,
    "en localization"
  );
});
