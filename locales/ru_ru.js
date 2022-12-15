/**
 * language: русский
 */
const lang = {

  // app desc
  app: {
    desc: 'electerm - это мультиплатформенный терминал и ssh/sftp клиент (linux, mac, win) на основе electron/ssh2/node-pty/xterm/antd/useProxy и многих других библиотек',
    isRunning: 'выполняется',
    press: 'нажмите',
    toShow: 'для отображения'
  },

  // app menu
  menu: {
    // mac app
    hide: 'скрыть',
    hideothers: 'скрыть другие',
    unhide: 'показать',
    quit: 'выход',

    // edit
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

    // view
    view: 'вид',
    reload: 'перезапустить',
    forcereload: 'принудительно перезапустить',
    toggledevtools: 'включить инструменты разработчика',
    toggleControl: 'включить кнопки управления',
    resetzoom: 'сбросить масштаб',
    zoomin: 'увеличить масштаб',
    zoomout: 'уменьшить масштаб',
    togglefullscreen: 'полноэкранный режим',

    // window
    window: 'окно',
    minimize: 'свернуть',
    maximize: 'развернуть',
    unmaximize: 'вернуть прежний размер',
    close: 'закрыть',
    restart: 'перезапустить',
    front: 'поверх других окон',

    // help
    help: 'помощь',
    about: 'о программе',
    checkUpdate: 'проверить наличие обновлений',
    reportIssue: 'сообщить о проблеме',
    homepage: 'домашняя страница',
    sencondInstanceTip: 'можно сделать только в главном окне'
  },

  // common
  common: {
    history: 'история',
    bookmarks: 'закладки',
    bookmarkCategory: 'категория',
    setting: 'настройки',
    about: 'о программе',
    ok: 'ок',
    cancel: 'отмена',
    expandAll: 'развернуть',
    collapseAll: 'свернуть',
    restoreSessions: 'восстановить сеансы',
    ignore: 'игнорировать',
    pin: 'держите панель открытой',
    keyboardShortcuts: 'горячие клавиши'
  },

  // control buttons
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
    os: 'ОС',
    userTips: 'советы',
    commandLineUsage: 'Использование командной строки',
    newBookmark: 'Новая закладка',
    newWindow: 'новый экземпляр'
  },

  // transferHistory
  transferHistory: {
    transferHistory: 'история передач',
    localPath: 'локальный путь',
    remotePath: 'удаленный путь',
    type: 'тип',
    startTime: 'начальное время',
    finishTime: 'конечное время',
    speed: 'скорость',
    clear: 'очистить',
    fromPath: 'исходный путь',
    toPath: 'целевой путь'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: 'заголовок не может быть пустым',
    close: 'закрыть',
    closeOtherTabs: 'закрыть другие вкладки',
    closeTabRight: 'закрыть вкладки справа',
    newTab: 'новая вкладка',
    duplicate: 'дублировать',
    rename: 'переименовать',
    openNewTerm: 'открыть новый терминал',
    sessions: 'сессий'
  },

  // main warpper
  main: {
    error: 'Что-то пошло не так.'
  },

  // updater check
  updater: {
    noNeed: 'нет необходимости для обновления',
    noNeedDesc: 'вы используете последнюю релизную версию',
    fail: 'ошибка проверки обновления',
    goGetIt: 'получите ее!',
    newVersion: 'найдена новая версия',
    upgrade: 'Обновить',
    upgrading: 'модернизация',
    skipThisVersion: 'пропустить эту версию',
    moreChangeLog: 'Больше журнала изменений'
  },

  // setting
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
    global: 'глобальной',
    disableSshHistory: 'Отключить историю SSH',
    disableTransferHistory: 'Отключить историю переводов sftp',
    resetAllToDefault: 'восстановить настройки по умолчанию',
    terminalBackgroundImage: 'терминал фоновое изображение',
    chooseFile: 'выберите файл',
    rendererType: 'тип рендерера',
    defaultTerminalType: 'тип терминала по умолчанию',
    ctrlOrMetaOpenTerminalLink: 'должен удерживать Ctrl или Meta (в Mac) при нажатии, чтобы открыть ссылку терминала',
    noTerminalBg: 'без фонового изображения',
    saveTerminalLogToFile: 'сохранить журнал терминала в файл',
    checkUpdateOnStart: 'проверить обновление при запуске приложения',
    encrypt: 'зашифровать',
    cursorBlink: 'Курсор мигает',
    openAll: 'Открыть всю закладку в этой категории',
    useSystemTitleBar: 'Использовать строку заголовка системы',
    useSystemTitleBarTip: 'Нужно восстановить приложение, чтобы вступить в силу, при использовании строки заголовка системы, прозрачные не работают',
    onStartBookmarks: 'Открытые закладки на запуск',
    pleaseSelect: 'пожалуйста выберите',
    keepaliveIntervalDesc: 'keepalive интервал',
    editorTip: 'команда или путь редактора',
    cursorStyle: 'Стиль курсора',
    confirmBeforeExit: 'подтвердить перед выходом',
    initDefaultTabOnStart: 'Открыть вкладку по умолчанию при запуске приложения'
  },

  // sftp
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
    reset: 'сбросить',
    showInDefaultFileMananger: 'показать в файловом менеджере',
    compressAndDownload: 'Сжатие и загрузка',
    compressAndUpload: 'Сжать и загружать',
    editWithSystemEditor: 'Редактировать с редактором системы'
  },

  permission: {
    read: 'чтение',
    write: 'запись',
    exec: 'выполнение',
    owner: 'владелец',
    group: 'группа',
    other: 'другие'
  },

  // ssh form
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
    saveAndCreateNew: 'сохранить и создать новый',
    save: 'сохранить',
    loginScript: 'запустить скрипт',
    loginScriptDelay: 'задержка запуска скрипта',
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
    use: 'использовать',
    encode: 'кодировка',
    terminalType: 'тип терминала',
    startDirectory: 'начальный каталог',
    ignoreKeyboardInteractive: 'игнорировать интерактивную клавиатуру',
    description: 'описание'
  },

  // ssh terminal
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
    changeDirection: 'изменить направление',
    batchInput: 'пакетный ввод',
    runInAllTerminals: 'запустить во всех терминалах',
    matchCase: 'с учетом регистра',
    matchWholeWord: 'Сопоставьте целое слово',
    useRegExp: 'Используйте регулярное выражение',
    socketCloseTip: 'Терминальное соединение потеряно'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: 'темы терминала',
    export: 'экспорт',
    themeName: 'название темы',
    saveAndApply: 'сохранить и применить',
    apply: 'применить',
    default: 'по умолчанию',
    newTheme: 'новая тема',
    themeConfig: 'конфигурация темы',
    updated: 'обновлено',
    uiThemes: 'Темы пользовательского интерфейса'
  },

  // quick commands
  quickCommands: {
    quickCommand: 'быстрая команда',
    quickCommands: 'быстрые команды',
    quickCommandName: 'быстрое имя команды',
    addQuickCommands: 'добавить быстрые команды',
    newQuickCommand: 'новая быстрая команда',
    inputOnly: 'только вход',
    labels: 'ярлыки'
  },

  // setting sync
  settingSync: {
    settingSync: 'настройка синхронизации',
    sync: 'синхронизировать',
    syncing: 'синхронизации',
    syncSettings: 'настройки синхронизации',
    uploadSettings: 'загрузить настройки',
    downloadSettings: 'скачать настройки',
    synced: 'синхронизирован',
    syncDesc: 'синхронизировать закладку / историю / настройку в github секретный гист',
    autoSync: 'автосинхронизация',
    lastSyncTime: 'время последней синхронизации',
    useExistingGistId: 'использовать существующие'
  }

}

export default {
  lang,
  name: 'Русский',
  match: 'ru',
  flag: '🇷🇺'
}
