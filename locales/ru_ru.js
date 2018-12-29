/**
 * language: русский
 */
const lang = {

  //app desc
  app: {
    desc: 'electerm - это мультиплатформенный терминал и ssh/sftp клиент (linux, mac, win) на основе electron/ss2/node-pty/xterm/antd и многих других библиотек',
    isRunning: 'выполняется',
    press: 'нажмите',
    toShow: 'для отображения'
  },

  //app menu
  menu: {
    //mac app
    hide: 'скрыть',
    hideothers: 'скрыть другие',
    unhide: 'показать',
    quit: 'выход',

    //edit
    edit: 'правка',
    undo: 'отменить',
    redo: 'повторить',
    cut: 'вырезать',
    copy: 'копировать',
    paste: 'вставить',
    pasteandmatchstyle: 'вставить с сохранением стиля',
    del: 'удалить',
    selectall: 'выделить все',
    startspeaking: 'начать говорить',
    stopspeaking: 'перестать говорить',

    //view
    view: 'вид',
    reload: 'перезапустить',
    forcereload: 'принудительно перезапустить',
    toggledevtools: 'включить инструменты разработчика',
    toggleControl: 'включить кнопки управления',
    resetzoom: 'сбросить масштаб',
    zoomin: 'увеличить масштаб',
    zoomout: 'уменьшить масштаб',
    togglefullscreen: 'полноэкранный режим',

    //window
    window: 'окно',
    minimize: 'свернуть',
    maximize: 'развернуть',
    unmaximize: 'вернуть прежний размер',
    close: 'закрыть',
    restart: 'перезапустить',
    front: 'поверх других окон',

    //help
    help: 'помощь',
    about: 'о программе',
    checkUpdate: 'проверить наличие обновлений',
    reportIssue: 'сообщить о проблеме',
    homepage: 'домашняя страница'
  },

  //common
  common: {
    history: 'история',
    bookmarks: 'закладки',
    bookmarkCategory: 'категория',
    setting: 'настройки',
    about: 'о программе',
    ok: 'ок',
    cancel: 'отмена',
    restoreSessions: 'восстановить сессии после некорректного завершения?'
  },

  //control buttons
  control: {
    author: 'автор',
    download: 'скачать',
    bugReport: 'сообщить о проблеме',
    checkForUpdate: 'проверить наличие обновлений',
    homepage: 'домашняя страница',
    notFoundContent: 'ничего не найдено',
    newSsh: 'новое ssh подключение',
    newTerminal: 'новый терминал',
    dependencies: 'зависимости',
    env: 'окружение',
    os: 'ос',
    userTips: 'советы'
  },

  //transferHistory
  transferHistory: {
    transferHistory: 'история передач',
    localPath: 'локальный путь',
    remotePath: 'удаленный путь',
    type: 'тип',
    startTime: 'начальное время',
    finishTime: 'конечное время',
    speed: 'скорость',
    clear: 'очистить'
  },

  //ssh tabs
  tabs: {
    titleEmptyWarn: 'заголовок не может быть пустым',
    close: 'закрыть',
    closeOtherTabs: 'закрыть другие вкладки',
    closeTabRight: 'закрыть вкладки справа',
    newTab: 'новая вкладка',
    duplicate: 'дублировать',
    rename: 'переименовать',
    openNewTerm: 'открыть новый терминал'
  },

  //main warpper
  main: {
    error: 'Что-то пошло не так.'
  },

  //updater check
  updater: {
    noNeed: 'нет необходимости для обновления',
    noNeedDesc: 'вы используете последнюю релизную версию',
    fail: 'ошибка проверки обновления',
    goGetIt: 'получите ее!',
    newVersion: 'найдена новая версия'
  },

  //setting
  setting: {
    new: 'новый',
    settings: 'настройки',
    common: 'общие',
    hotkeyNotOk: 'горячая клавиша не может быть зарегистрирована, пожалуйста, используйте другую клавишу',
    saved: 'сохранено',
    saveLang: 'сохранено, перезапустите программу для применения изменений',
    restartNow: 'перезапустить сейчас',
    hotkeyDesc: 'системная горячая клавиша(выносит окно на передний план)',
    timeoutDesc: 'ssh/sftp таймаут(в миллисекундах)',
    scrollBackDesc: 'прокрутка строк',
    language: 'язык',
    copyWhenSelect: 'копировать выделенный текст при выделении',
    rightClickSelectsWord: 'правая кнопка мыши автоматически выделяет слово',
    pasteWhenContextMenu: 'вставка по нажатию правой кнопки мыши',
    fontSize: 'размер шрифта',
    fontFamily: 'семейство шрифта',
    opacity: 'помутнение',
    resetAllToDefault: 'восстановить настройки по умолчанию'
  },

  //sftp
  sftp: {
    cancel: 'отменить',
    skip: 'пропустить',
    merge: 'объединить',
    overwrite: 'перезаписать',
    rename: 'переименовать',
    renameAll: 'переименовать все',
    mergeDesc: 'объединить остальные конфликтующие папки',
    overwriteDesc: 'объединить остальные конфликтующие файлы',
    mergeAll: 'объединить все',
    overwriteAll: 'перезаписать все',
    renameDesc: 'переименовать остальные файлы/папки',
    folder: 'папка',
    file: 'файл',
    fileConflict: 'файл конфликтует',
    submit: 'отправить',
    edit: 'редактировать',
    open: 'открыть',
    permission: 'разрешение',
    name: 'имя',
    mode: 'режим',
    path: 'путь',
    fullPath: 'полный путь',
    size: 'размер',
    accessTime: 'время доступа',
    modifyTime: 'время изменения',
    attributes: 'атрибуты',
    enter: 'войти',
    deleteAll: 'удалить все',
    selected: 'выбрано',
    newFile: 'новый файл',
    newFolder: 'новая папка',
    selectAll: 'выделить все',
    refresh: 'обновить',
    editPermission: 'изменить разрешения',
    info: 'информация',
    filesAndFolders: 'файлы/папки',
    files: 'файлы',
    delTip: 'вы уверены? это удалит их',
    delTip1: 'и все файлы и папки в них',
    goParent: 'перейти в родительскую папку',
    hide: 'скрыть',
    show: 'показать',
    hfd: 'скрытые файлы и папки',
    remote: 'удаленные',
    local: 'локальные',
    fileTransfers: 'передача файлов',
    cancelAll: 'отменить все',
    upload: 'загрузить',
    download: 'скачать',
    resume: 'возобновить',
    pause: 'приостановить',
    reset: 'сбросить'
  },

  permission: {
    read: 'чтение',
    write: 'запись',
    exec: 'выполнение',
    owner: 'владелец',
    group: 'группа',
    other: 'другие'
  },

  //ssh form
  form: {
    password: 'пароль',
    privateKey: 'приватный ключ',
    privateKeyDesc: 'строка приватного ключа',
    importFromFile: 'загрузить из файла',
    passphrase: 'фраза-пароль',
    passphraseDesc: 'фраза-пароль для приватного ключа',
    host: 'хост',
    username: 'имя пользователя',
    port: 'порт',
    title: 'название',
    saveAndConnect: 'сохранить и соединиться',
    save: 'сохранить',
    loginScript: 'запустить скрипт',
    loginScriptTip: 'запустить скрипт после логина',
    connect: 'соединиться',
    testConnection: 'проверить соединение',
    required: 'обязательно',
    proxyIp: 'ip прокси',
    proxyPort: 'порт прокси',
    proxyType: 'тип прокси',
    proxyIpPlaceholder: 'ip адрес прокси',
    selectProxy: 'выбрать прокси',
    auth: 'авторизация',
    proxy: 'прокси',
    use: 'использовать'
  },

  //ssh terminal
  ssh: {
    clear: 'очистить',
    selectAll: 'выделить все',
    savePassword: 'сохранить пароль',
    search: 'поиск',
    terminal: 'терминал',
    nextMatch: 'следующее соответствие',
    prevMatch: 'предыдущее соответствие',
    split: 'разделить',
    fileManager: 'файловый менеджер',
    changeDirection: 'изменить направление'
  },

  //user tips
  userTips: [
    '<b>двойной клик</b> по вкладке ssh будет дублировать ту же вкладку и вводить тот же путь, что и в исходной вкладке(ограниченная поддержка)',
    '<b>двойной клик</b> по пустой области панели вкладок также откроет новый терминал ssh',
    '<b>клик правой кнопкой мыши</b> по вкладке ssh откроет контекстное меню, в котором вы можете <b>закрыть другие вкладки</b>, <b>закрыть вкладки справа</b>, и использовать другие функции',
    'по умолчанию, <b>Ctrl + 2</b> будет выводить окно electerm поверх других окон, горячую клавишу можно установить в меню <b>настроек</b>',
    'sftp копирование и вставка работает как локально, так и удаленно'
  ],

  //features
  features: [
    'работает как терминал или ssh/sftp клиент(аналогично xshell)',
    'горячая клавиша для отображения окна поверх других окон (как в guake, по умолчанию ctrl + 2)',
    'поддержка мультиплатформы(linux, mac, windows)',
    'поддерживает мультиязычность (пока что только en, cn, pt, ru)'
  ],

  featuresName: 'особенности',

  //terminal themes
  terminalThemes: {
    terminalThemes: 'темы терминала',
    export: 'экспорт',
    themeName: 'название темы',
    saveAndApply: 'сохранить и применить',
    apply: 'применить',
    default: 'по умолчанию',
    newTheme: 'новая тема',
    themeConfig: 'конфигурация темы',
    updated: 'обновлено'
  }
}

module.exports = {
  lang,
  name: 'Русский',
  match: /ru/
}
