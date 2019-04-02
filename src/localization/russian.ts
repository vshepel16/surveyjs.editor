import { editorLocalization } from "../editorLocalization";

export var ruStrings = {
  //survey templates
  survey: {
    edit: "Редактировать",
    dropQuestion: "Пожалуйста, бросьте сюда вопрос с панели инструментов справа.",
    copy: "Копировать",
    addToToolbox: "Добавить в панель инструментов",
    deletePanel: "Удалить панель",
    deleteQuestion: "Удалить вопрос",
    convertTo: "Преобразовать в",
    drag: "Перетащите элемент"
  },
  //questionTypes
  qt: {
    default: "По умолчанию",
    checkbox: "Флажок",
    comment: "Комментарий",
    imagepicker: "Cредство выбора изображений",
    dropdown: "Раскрывающийся список",
    file: "Файл",
    html: "Html",
    matrix: "Матрица (один выбор)",
    matrixdropdown: "Матрица (множественный выбор)",
    matrixdynamic: "Матрица (динамические строки выбор)",
    multipletext: "Множественный текст",
    panel: "Панель",
    paneldynamic: "Панель (динамические панели)",
    radiogroup: "Радиогруппа",
    rating: "Рейтинг",
    text: "Текст",
    boolean: "Логическое",
    expression: "Выражение"
  },
  //Strings in Editor
  ed: {
    defaultLocale: "По умолчанию ({0})",
    survey: "Опрос",
    settings: "Настройки опроса",
    editSurvey: "Редактировать опрос",
    addNewPage: "Добавить новую страницу",
    moveRight: "Прокрутить вправо",
    moveLeft: "Прокрутить влево",
    deletePage: "Удалить страницу",
    editPage: "Редактировать страницу",
    edit: "Редактировать",
    newPageName: "страница",
    newQuestionName: "вопрос",
    newPanelName: "панель",
    testSurvey: "Тестировать опрос",
    testSurveyAgain: "Тестировать опрос снова",
    testSurveyWidth: "Ширина опроса: ",
    embedSurvey: "Embed Survey",
    translation: "Перевод",
    saveSurvey: "Сохранить опрос",
    designer: "Survey Designer",
    jsonEditor: "Редактор JSON",
    undo: "Отменить",
    redo: "Повторить",
    options: "Опции",
    generateValidJSON: "Сгенерировать валидный JSON",
    generateReadableJSON: "Сгенерировать читабельный JSON",
    toolbox: "Панель",
    properties: "Свойства",
    library: "Библиотека",
    toolboxGeneralCategory: "Главная",
    delSelObject: "Удалить отмеченный объект",
    editSelObject: "Редактировать отмеченный объект",
    correctJSON: "Пожалуйста, исправьте JSON.",
    surveyResults: "Результат опроса: ",
    surveyResultsTable: "Как таблица",
    surveyResultsJson: "Как JSON",
    resultsTitle: "Заголовок вопроса",
    resultsName: "Имя вопроса",
    resultsValue: "Значение ответа",
    resultsDisplayValue: "Показать значение",
    modified: "Модифицированный",
    saving: "Сохранение",
    saved: "Сохранено",
    saveError: "Ошибка! Содержимое редактора не сохранено.",
    translationAddLanguage: "Выберите язык для перевода",
    translationShowAllStrings: "Показать все строки",
    translationShowAllPages: "Показать все страницы",
    translationNoStrings: "Нет строк для перевода. Пожалуйста, измените фильтр.",
    translationExportToSCVButton: "Экспорт в CSV",
    translationImportFromSCVButton: "Импорт из CSV",
    translationMergeLocaleWithDefault: "Объединить {0} со стандартным языком"
  },
  //Property names in table headers
  pel: {
    isRequired: "Обязательно?"
  },
  //Property Editors
  pe: {
    apply: "Сохранить",
    ok: "Сохранить и закрыть",
    cancel: "Отменить",
    reset: "Сброс",
    close: "Закрыть",
    delete: "Удалить",
    addNew: "Добавить новый",
    addItem: "Нажмите, чтобы добавить элемент ...",
    removeAll: "Удалить все",
    edit: "Ред",
    itemValueEdit: "Видно если",
    editChoices: "Изменить выбор",
    move: "двигаться",
    empty: "<пусто>",
    notEmpty: "<редактировать значение>",
    fastEntry: "Быстрый вход",
    formEntry: "Form Entry",
    testService: "Протестируйте сервис",
    conditionSelectQuestion: "Выберите вопрос ...",
    conditionValueQuestionTitle: "Пожалуйста, введите / выберите значение",
    conditionButtonAdd: "Добавить",
    conditionButtonReplace: "Заменить",
    conditionHelp:
      "Пожалуйста, введите логическое выражение. Оно должно возвращать true, чтобы вопрос / страница оставались видимыми. Например: {question1} = 'value1' или ({question2} * {question4}> 20 и {question3} <5)",
    expressionHelp:
      "Пожалуйста, введите выражение. Вы можете использовать фигурные скобки, чтобы получить доступ к значениям вопроса: '{question1} + {question2}', '({цена} * {количество}) * (100 - {discount})'",
    aceEditorHelp: "Нажмите Ctrl + пробел, чтобы получить подсказку о завершении выражения",
    aceEditorRowTitle: "Текущая строка",
    aceEditorPanelTitle: "Текущая панель",
    showMore: "Для более подробной информации, пожалуйста, проверьте документацию",
    conditionShowMoreUrl:
      "Https://surveyjs.io/Documentation/LibraryParameter?id=Question&parameter=visibleIf",
    assistantTitle: "Доступные вопросы:",
    cellEmptyRowsColumns: "Должен быть хотя бы один столбец или строка",

    propertyIsEmpty: "Пожалуйста, введите значение",
    value: "Значение",
    text: "Текст",
    rowid: "идентификатор строки",
    imageLink: "Ссылка на изображение",
    columnEdit: "Изменить столбец: {0}",
    itemEdit: "Изменить элемент: {0}",

    url: "URL",
    path: "Путь",
    valueName: "Имя значения",
    titleName: "Название",

    hasOther: "Имеет другой предмет",
    otherText: "Текст другого элемента",
    name: "Имя",
    title: "Заголовок",
    cellType: "Тип ячейки",
    colCount: "Количество столбцов",
    choicesOrder: "Порядок выбора",
    visible: "Виден?",
    isRequired: "Обязатльный?",
    startWithNewLine: "Начать с новой строки?",
    rows: "Количество строк",
    placeHolder: "Введите заполнитель",
    showPreview: "Показывается ли предварительный просмотр изображения?",
    storeDataAsText: "Сохранить содержимое файла в формате JSON как текст",
    maxSize: "Максимальный размер файла в байтах",
    imageHeight: "Высота изображения",
    imageWidth: "Ширина изображения",
    rowCount: "Количество строк",
    columnLayout: "Расположение столбцов",
    addRowLocation: "Добавить расположение кнопки строки",
    addRowText: "Добавить текст кнопки строки",
    removeRowText: "Удалить текст кнопки строки",
    minRateDescription: "Описание минимальной ставки",
    maxRateDescription: "Описание максимальной скорости",
    inputType: "Тип ввода",
    optionsCaption: "Параметры заголовка",
    defaultValue: "Значение по умолчанию",
    cellDefaultRow: "Тексты ячеек по умолчанию",

    surveyEditorTitle: "Изменить настройки опроса",
    qEditorTitle: "Редактировать: {0}",

    maxLength: "Максимальная длина",

    //survey
    showTitle: "Показать / скрыть заголовок",
    locale: "Язык по умолчанию",
    режим: "Режим (редактировать / только для чтения)",
    clearInvisibleValues: "Очистить невидимые значения",
    cookieName: "Имя куки (чтобы отключить запуск опроса два раза локально)",
    sendResultOnPageNext: "Отправить результаты опроса на следующей странице",
    storeOthersAsComment: "Хранить значение 'других' в отдельном поле",
    showPageTitles: "Показать заголовки страниц",
    showPageNumbers: "Показать номера страниц",
    pagePrevText: "Текст кнопки Предыдущей",
    pageNextText: "Текст кнопки Следующий",
    completeText: "Полный текст кнопки",
    startSurveyText: "Текст кнопки запуска",
    showNavigationButtons: "Показать кнопки навигации (навигация по умолчанию)",
    showPrevButton: "Показать предыдущую кнопку (пользователь может вернуться на предыдущую страницу)",
    firstPageIsStarted: "Первая страница в опросе является стартовой страницей.",
    showCompletedPage: "Показать завершенную страницу в конце (completeHtml)",
    goNextPageAutomatic:
      "Отвечая на все вопросы, автоматически переходите на следующую страницу",
    showProgressBar: "Показать индикатор выполнения",
    questionTitleLocation: "Расположение заголовка вопроса",
    requiredText: "Вопрос обязательный символ (ы)",
    questionStartIndex: "Индекс начала вопроса (1, 2 или 'A','a')",
    showQuestionNumbers: "Показать номера вопросов",
    questionTitleTemplate:
      "Шаблон заголовка вопроса, по умолчанию: '{no}. {Require} {title}'",
    questionErrorLocation: "Местоположение ошибки вопроса",
    focusFirstQuestionAutomatic: "Сосредоточить первый вопрос на изменении страницы",
    questionsOrder: "Элементы заказа на странице",
    maxTimeToFinish: "Максимальное время для завершения опроса",
    maxTimeToFinishPage: "Максимальное время завершения страницы в опросе",
    showTimerPanel: "Показать панель таймера",
    showTimerPanelMode: "Показать режим панели таймера",
    renderMode: "Режим рендеринга",
    allowAddPanel: "Разрешить добавление панели",
    allowRemovePanel: "Разрешить удаление панели",
    panelAddText: "Добавление текста панели",
    panelRemoveText: "Удаление текста панели",
    isSinglePage: "Показать все элементы на одной странице",

    tabs: {
      general: "Общее",
      fileOptions: "Опции",
      html: "Html редактор",
      columns: "Колонки",
      rows: "Ряды",
      choices: "Выборы",
      items: "Элементы",
      visibleIf: "Виден если",
      enableIf: "Доступен если",
      requiredIf: "Обязательный если",
      rateValues: "Значения ставки",
      choicesByUrl: "Выбор из Интернета",
      matrixChoices: "Выбор по умолчанию",
      multipleTextItems: "Текстовые поля",
      validators: "Валидаторы",
      navigation: "Навигация",
      question: "Вопрос",
      completedHtml: "Завершенный Html",
      loadingHtml: "Загрузка Html",
      timer: "Таймер/Тест",
      triggers: "Триггеры",
      templateTitle: "Название шаблона"
    },
    editProperty: "Редактировать свойство '{0}'",
    items: "[ Элементы: {0} ]",

    enterNewValue: "Пожалуйста, введите значение.",
    noquestions: "В опросе нет вопросов",
    createtrigger: "Пожалуйста, создайте триггер",
    triggerOn: "Включить",
    triggerMakePagesVisible: "Сделать страницы видимыми:",
    triggerMakeQuestionsVisible: "Сделать элементы видимыми:",
    triggerCompleteText: "Завершите опрос, если все получится.",
    triggerNotSet: "Триггер не установлен",
    triggerRunIf: "Запустить если",
    triggerSetToName: "Изменить значение:",
    triggerFromName: "Скопировать значение из:",
    triggerRunExpression: "Запустить это выражение: ",
    triggerSetValue: "до:",
    triggerIsVariable: "Не помещайте переменную в результат опроса."
  },
  //Property values
  pv: {
    true: "true",
    false: "false",
    inherit: "наследовать",
    show: "показать",
    hide: "скрыть",
    default: "по-умолчанию",
    initial: "начальный",
    random: "случайный",
    collapsed: "collapsed",
    expanded: "расширенный",
    none: "none",
    asc: "по возрастанию",
    desc: "по убыванию",
    indeterminate: "неопределнный",
    decimal: "десятичный",
    currency: "валюта",
    percent: "процент",
    firstExpanded: "первый расширенный",
    off: "выключить",
    onPanel: "onPanel",
    onSurvey: "onSurvey",
    list: "лист",
    progressTop: "progressTop",
    progressBottom: "progressBottom",
    progressTopBottom: "progressTopBottom",
    horizontal: "горизонтальный",
    vertical: "вертикальный",
    top: "верх",
    bottom: "низ",
    topBottom: "верх и низ",
    left: "левый",
    color: "цвет",
    date: "дата",
    datetime: "дата и время",
    "datetime-local": "локальный дата и время",
    email: "почта",
    month: "месяц",
    number: "номер",
    password: "пароль",
    range: "диапазон",
    tel: "телефон",
    text: "текст",
    time: "время",
    url: "url",
    week: "неделя",
    hidden: "скрытый",
    on: "включить",
    onPage: "onPage",
    edit: "редактировать",
    display: "показать",
    onComplete: "onComplete",
    onHidden: "onHidden",
    all: "все",
    page: "страница",
    survey: "опрос",
    onNextPage: "onNextPage",
    onValueChanged: "onValueChanged"
  },
  //Operators
  op: {
    empty: "пустой",
    notempty: "не пустой",
    equal: "равен",
    notequal: "не равен",
    contains: "содержит",
    notcontains: "не содержит",
    greater: "больше",
    less: "меньше",
    greaterorequal: "больше или равен",
    lessorequal: "меньше или равен"
  },
  //Embed window
  ew: {
    angular: "Использовать Angular версию",
    jquery: "Использовать jQuery версию",
    knockout: "Использовать Knockout версию",
    react: "Использовать React версию",
    vue: "Использовать Vue версию",
    bootstrap: "Для основы начальной загрузки",
    standard: "Нет начальной загрузки",
    showOnPage: "Показать опрос на странице",
    showInWindow: "Показать опрос в окне",
    loadFromServer: "Загрузить JSON опроса с сервера",
    titleScript: "Сценарии и стили",
    titleHtml: "HTML",
    titleJavaScript: "JavaScript"
  },
  //Test Survey
  ts: {
    selectPage: "Выберите страницу для проверки:",
    showInvisibleElements: "Показать невидимые элементы"
  },
  validators: {
    answerercountvalidator: "количество ответов",
    emailvalidator: "электронная почта",
    expressionvalidator: "выражение",
    numericvalidator: "числовой",
    regexvalidator: "регулярное выражение",
    textvalidator: "текст"
  },
  triggers: {
    completetrigger: "завершить опрос",
    setvaluetrigger: "задать значение",
    copyvaluetrigger: "копировать значение",
    runexpressiontrigger: "запустить выражение",
    visibletrigger: "изменить видимость"
  },
  //Properties
  p: {
    name: "имя",
    title: {
      name: "заголовок",
      title: "Оставьте это поле пустым, если оно совпадает с именем"
    },

    navigationButtonsVisibility: "navigationButtonsVisibility",
    questionsOrder: "questionsOrder",
    maxTimeToFinish: "maxTimeToFinish",

    visible: "visible",
    visibleIf: "visibleIf",
    questionTitleLocation: "questionTitleLocation",
    description: "description",
    state: "state",
    isRequired: "isRequired",
    requiredIf: "requiredIf",
    indent: "indent",
    requiredErrorText: "requiredErrorText",
    startWithNewLine: "startWithNewLine",
    innerIndent: "innerIndent",
    page: "page",

    width: "width",

    commentText: "commentText",
    valueName: "valueName",
    enableIf: "enableIf",
    defaultValue: "defaultValue",
    correctAnswer: "correctAnswer",
    readOnly: "readOnly",
    validators: "validators",
    titleLocation: "titleLocation",

    hasComment: "hasComment",
    hasOther: "hasOther",
    choices: "choices",
    choicesOrder: "choicesOrder",
    choicesByUrl: "choicesByUrl",
    otherText: "otherText",
    otherErrorText: "otherErrorText",
    storeOthersAsComment: "storeOthersAsComment",

    label: "label",
    showTitle: "showTitle",
    valueTrue: "valueTrue",
    valueFalse: "valueFalse",

    cols: "cols",
    rows: "rows",
    placeHolder: "placeHolder",

    optionsCaption: "optionsCaption",

    expression: "expression",
    format: "format",
    displayStyle: "displayStyle",
    currency: "currency",
    useGrouping: "useGrouping",

    showPreview: "showPreview",
    allowMultiple: "allowMultiple",
    imageHeight: "imageHeight",
    imageWidth: "imageWidth",
    storeDataAsText: "storeDataAsText",
    maxSize: "maxSize",

    html: "html",

    columns: "columns",
    cells: "cells",
    isAllRowRequired: "isAllRowRequired",

    horizontalScroll: "horizontalScroll",
    cellType: "cellType",
    columnsLayout: "columnsLayout",
    columnColCount: "columnColCount",
    columnMinWidth: "columnMinWidth",

    rowCount: "rowCount",
    minRowCount: "minRowCount",
    maxRowCount: "maxRowCount",
    keyName: "keyName",
    keyDuplicationError: "keyDuplicationError",
    confirmDelete: "confirmDelete",
    confirmDeleteText: "confirmDeleteText",
    addRowLocation: "addRowLocation",
    addRowText: "addRowText",
    removeRowText: "removeRowText",

    items: "items",
    itemSize: "itemSize",
    colCount: "colCount",

    templateTitle: "templateTitle",
    templateDescription: "templateDescription",
    allowAddPanel: "allowAddPanel",
    allowRemovePanel: "allowRemovePanel",
    panelCount: "panelCount",
    minPanelCount: "minPanelCount",
    maxPanelCount: "maxPanelCount",
    panelsState: "panelsState",
    panelAddText: "panelAddText",
    panelRemoveText: "panelRemoveText",
    panelPrevText: "panelPrevText",
    panelNextText: "panelNextText",
    showQuestionNumbers: "showQuestionNumbers",
    showRangeInProgress: "showRangeInProgress",
    renderMode: "renderMode",
    templateTitleLocation: "templateTitleLocation",

    rateValues: "rateValues",
    rateMin: "rateMin",
    rateMax: "rateMax",
    rateStep: "rateStep",
    minRateDescription: "minRateDescription",
    maxRateDescription: "maxRateDescription",

    inputType: "inputType",
    size: "size",

    locale: "locale",
    focusFirstQuestionAutomatic: "focusFirstQuestionAutomatic",
    completedHtml: "completedHtml",
    completedBeforeHtml: "completedBeforeHtml",
    loadingHtml: "loadingHtml",
    triggers: "triggers",
    cookieName: "cookieName",
    sendResultOnPageNext: "sendResultOnPageNext",
    showNavigationButtons: "showNavigationButtons",
    showPrevButton: "showPrevButton",
    showPageTitles: "showPageTitles",
    showCompletedPage: "showCompletedPage",
    showPageNumbers: "showPageNumbers",
    questionErrorLocation: "questionErrorLocation",
    showProgressBar: "showProgressBar",
    mode: "mode",
    goNextPageAutomatic: "goNextPageAutomatic",
    checkErrorsMode: "checkErrorsMode",
    clearInvisibleValues: "clearInvisibleValues",
    startSurveyText: "startSurveyText",
    pagePrevText: "pagePrevText",
    pageNextText: "pageNextText",
    completeText: "completeText",
    requiredText: "requiredText",
    questionStartIndex: "questionStartIndex",
    questionTitleTemplate: "questionTitleTemplate",
    firstPageIsStarted: "firstPageIsStarted",
    isSinglePage: "isSinglePage",
    maxTimeToFinishPage: "maxTimeToFinishPage",
    showTimerPanel: "showTimerPanel",
    showTimerPanelMode: "showTimerPanelMode",

    defaultPanelValue: "defaultPanelValue",
    defaultRowValue: "defaultRowValue",
    hasNone: "hasNone",
    noneText: "noneText",

    text: "text",
    minValue: "minimum value",
    maxValue: "maximum value",
    minLength: "minimum length",
    maxLength: "maximum length",
    allowDigits: "allow digits",
    minCount: "minimum count",
    maxCount: "maximum count",
    regex: "regular expression"
  }
};

editorLocalization.locales["ru"] = ruStrings;