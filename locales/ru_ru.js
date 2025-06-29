/**
 * language: русский
 */
const lang = {

  // app desc
  app: {
    isRunning: 'выполняется',
    press: 'нажмите',
    toShow: 'для отображения',
    changeLog: 'Журнал изменений',
    knownIssues: 'Известные вопросы',
    sponsorElecterm: 'спонсировать electerm',
    privacyNotice: 'Уведомление о конфиденциальности',
    desc: 'Клиент для терминала/SSH/SFTP/FTP/Telnet/последовательного порта/RDP/VNC (Linux, Mac, Windows)',
    single: 'Одиночный',
    twoColumns: 'Две колонки',
    threeColumns: 'Три колонки',
    twoRows: 'Две строки',
    threeRows: 'Три строки',
    grid2x2: 'Сетка 2x2',
    twoRowsRight: 'Две строки справа',
    twoColumnsBottom: 'Две колонки снизу',
    troubleShoot: 'устранение неполадок',
    clearConfig: 'очистить конфигурацию',
    clearData: 'очистить данные',
    runInCommandLine: 'запустить в командной строке',
    connectionHoppingWarning: 'С версии v1.50.65 порядок подключения при переходе изменился, подробности читайте в вики.',
    haveRead: 'Я прочитал, больше не показывать',
    runningTime: 'Время выполнения',
    fullContent: 'Полное содержание',
    copied: 'скопировано',
    moveTo: 'перейти к...',
    roleAI: 'роль для создания команд терминала с ИИ',
    roleExplainAI: 'роль для объяснения вывода терминала с помощью ИИ',
    modelAi: 'модель ИИ',
    aiSuggestionsCache: 'Кэш предложений ИИ',
    layout: 'раскладка'
  },

  // app menu
  menu: {
    // mac app
    hide: 'Скрыть',
    hideothers: 'Скрыть остальные',
    unhide: 'Показать',
    quit: 'Выход',

    // edit
    edit: 'Правка',
    undo: 'Отменить',
    redo: 'Повторить',
    cut: 'Вырезать',
    copy: 'Копировать',
    paste: 'Вставить',
    pasteandmatchstyle: 'Вставить и согласовать стиль',
    del: 'Удалить',
    selectall: 'Выделить все',
    startspeaking: 'Начать говорить',
    stopspeaking: 'Остановить говорить',

    // view
    view: 'Вид',
    reload: 'Перезапустить',
    forcereload: 'Принудительно перезапустить',
    toggledevtools: 'Включить инструменты разработчика',
    toggleControl: 'Включить кнопки управления',
    resetzoom: 'Сбросить масштаб',
    zoomin: 'Увеличить масштаб',
    zoomout: 'Уменьшить масштаб',
    togglefullscreen: 'Полноэкранный режим',

    // window
    window: 'Окно',
    minimize: 'Свернуть',
    maximize: 'Развернуть',
    unmaximize: 'Вернуть прежний размер',
    close: 'Закрыть',
    restart: 'Перезапустить',
    front: 'Поверх других окон',

    // help
    help: 'Помощь',
    about: 'О программе',
    checkUpdate: 'Проверить наличие обновлений',
    reportIssue: 'Сообщить о проблеме',
    homepage: 'Домашняя страница',
    sencondInstanceTip: 'можно сделать только в главном окне',
    copyFilePath: 'Копировать путь файла',
    pasteSelected: 'Вставить выбранное'
  },

  // common
  common: {
    history: 'История',
    bookmarks: 'Закладки',
    bookmarkCategory: 'Категория',
    setting: 'Настройки',
    about: 'О программе',
    ok: 'OK',
    cancel: 'Отмена',
    expandAll: 'Развернуть',
    collapseAll: 'Свернуть',
    restoreSessions: 'Восстановить сеансы',
    ignore: 'Игнорировать',
    pin: 'Оставить панель открытой',
    keyboardShortcuts: 'Горячие клавиши',
    delSelected: 'удалить выбранное',
    turnOff: 'выключать',
    tasks: 'задания',
    batchOperation: 'пакетная операция',
    examples: 'Примеры',
    importFromCSV: 'импорт из файла CSV',
    addToQueue: 'добавить в очередь',
    execute: 'выполнять',
    finished: 'законченный',
    resolutions: 'Разрешение',
    addressBookmarks: 'закладки адресов',
    import: 'импортировать',
    sshConfigNotice: 'обнаруженные конфигурации из ~/.ssh/config, импортировать как закладки?'
  },

  // control buttons
  control: {
    author: 'Автор',
    download: 'Скачать',
    bugReport: 'Сообщить о проблеме',
    checkForUpdate: 'Проверить наличие обновлений',
    homepage: 'Домашняя страница',
    notFoundContent: 'Ничего не найдено',
    newSsh: 'Новое SSH подключение',
    newTerminal: 'Новый терминал',
    dependencies: 'Зависимости',
    env: 'Окружение',
    os: 'ОС',
    userTips: 'Советы',
    commandLineUsage: 'Использование командной строки',
    newBookmark: 'Новая закладка',
    newWindow: 'Новый экземпляр'
  },

  // transferHistory
  transferHistory: {
    transferHistory: 'История передач',
    localPath: 'Локальный путь',
    remotePath: 'Удаленный путь',
    type: 'Тип',
    startTime: 'Время начала',
    finishTime: 'Время окончания',
    speed: 'Скорость',
    clear: 'Очистить',
    fromPath: 'Исходный путь',
    toPath: 'Целевой путь'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: 'Заголовок не может быть пустым',
    close: 'Закрыть',
    closeOtherTabs: 'Закрыть другие вкладки',
    closeTabRight: 'Закрыть вкладки справа',
    newTab: 'Новая вкладка',
    duplicate: 'Дублировать',
    rename: 'Переименовать',
    openNewTerm: 'Открыть новый терминал',
    sessions: 'Сессии',
    cloneToNextLayout: 'Клонировать в следующий макет',
    reloadCurrentTab: 'Перезагрузить текущую вкладку'
  },

  // main warpper
  main: {
    error: 'Что-то пошло не так.'
  },

  // updater check
  updater: {
    noNeed: 'Нет необходимости для обновления',
    noNeedDesc: 'Вы используете последнюю релизную версию',
    fail: 'Ошибка проверки обновления',
    newVersion: 'Найдена новая версия',
    upgrade: 'Обновить',
    upgrading: 'Изменения',
    skipThisVersion: 'Пропустить эту версию',
    moreChangeLog: 'Больше изменений',
    manuallyDownloadFrom: 'вручную скачать с'
  },

  // setting
  setting: {

    new: 'Новый',
    settings: 'Настройки',
    common: 'Общие',
    hotkeyNotOk: 'Горячая клавиша не может быть зарегистрирована, пожалуйста, используйте другую клавишу',
    saved: 'Сохранено',
    saveLang: 'Сохранено, перезапустите программу для применения изменений',
    restartNow: 'Перезапустить сейчас',
    hotkeyDesc: 'Системная горячая клавиша(выносит окно на передний план)',
    timeoutDesc: 'SSH/SFTP таймаут(в миллисекундах)',
    scrollBackDesc: 'Буфер строк',
    language: 'Язык',
    copyWhenSelect: 'Копировать при выделении',
    rightClickSelectsWord: 'Правая кнопка мыши автоматически выделяет слово',
    pasteWhenContextMenu: 'Вставка по нажатию правой кнопки мыши',
    fontSize: 'Размер шрифта',
    fontFamily: 'Семейство шрифта',
    opacity: 'Прозрачность',
    global: 'Глобальный',
    disableTransferHistory: 'Отключить историю переводов sftp',
    resetAllToDefault: 'Восстановить настройки по умолчанию',
    terminalBackgroundImage: 'Фоновое изображение',
    chooseFile: 'Выберите файл',
    rendererType: 'Тип рендерера',
    defaultTerminalType: 'Тип терминала по умолчанию',
    ctrlOrMetaOpenTerminalLink: 'Удерживать Ctrl или Meta (в Mac) при нажатии, чтобы открыть ссылку в терминале',
    noTerminalBg: 'Без фонового изображения',
    saveTerminalLogToFile: 'Сохранить журнал терминала в файл',
    checkUpdateOnStart: 'Проверить обновление при запуске приложения',
    encrypt: 'Зашифровать',
    cursorBlink: 'Мигающий курсор',
    openAll: 'Открыть все закладки в этой категории',
    useSystemTitleBar: 'Использовать системный заголовок окна',
    useSystemTitleBarTip: 'Нужно перезапустить приложение, чтобы изменения вступили в силу, при использовании системного заголовка окна, прозрачность не работает',
    onStartBookmarks: 'Открыть закладки при запуске',
    pleaseSelect: 'Пожалуйста, выберите',
    keepaliveIntervalDesc: 'Интервал keepalive',
    editorTip: 'Команда или путь редактора',
    cursorStyle: 'Стиль курсора',
    confirmBeforeExit: 'Подтвердить перед выходом',
    initDefaultTabOnStart: 'Открыть вкладку по умолчанию при запуске приложения',
    screenReaderMode: 'Читатель экрана поддержки в терминале',
    makeItPortable: 'сделать это портативным',
    dataTransferedTo: 'Данные переданы в',
    autoRefreshWhenSwitchToSftp: 'Автоматическое обновление при переключении на SFTP',
    terminalWordSeparator: 'Сепаратор терминала',
    settingShortcuts: 'Горячие клавиши',
    closeCurrentTab: 'Закрыть текущую вкладку',
    prevTab: 'Предыдущая вкладка',
    nextTab: 'Следующая вкладка',
    pasteSelected: 'Вставить выбранное',
    showNormalBuffer: 'Показать обычный буфер',
    customCss: 'Пользовательские CSS',
    hideSshConfig: 'Скрыть категорию SSH-Config',
    addTimeStampToTermLog: 'Добавить временную метку в журнал терминала',
    terminalBackSpaceMode: 'терминальная последовательность обратного пространства',
    showHiddenFilesOnSftpStart: 'Показать скрытые файлы в SFTP Start',
    hideIP: 'Скрыть IP-адрес',
    disableConnectionHistory: 'отключить историю подключений',
    terminalLogPath: 'путь журнала терминала',
    chooseFolder: 'выбрать папку',
    sshSftpSplitView: 'показать терминал и SFTP в разделенном виде',
    allowMultiInstance: 'разрешить несколько экземпляров'
  },

  // sftp
  sftp: {
    cancel: 'Отменить',
    skip: 'Пропустить',
    merge: 'Объединить',
    overwrite: 'Перезаписать',
    rename: 'Переименовать',
    renameAll: 'Переименовать все',
    mergeDesc: 'Объединить остальные конфликтующие папки',
    overwriteDesc: 'Объединить остальные конфликтующие файлы',
    mergeAll: 'Объединить все',
    overwriteAll: 'Перезаписать все',
    renameDesc: 'Переименовать остальные файлы/папки',
    folder: 'Папка',
    file: 'Файл',
    fileConflict: 'Конфликт файлов',
    submit: 'Отправить',
    edit: 'Редактировать',
    open: 'Открыть',
    permission: 'Разрешение',
    name: 'Имя',
    mode: 'Разрешения доступа',
    path: 'Путь',
    fullPath: 'Полный путь',
    size: 'Размер',
    accessTime: 'Время доступа',
    modifyTime: 'Время изменения',
    attributes: 'Атрибуты',
    enter: 'Войти',
    deleteAll: 'Удалить все',
    selected: 'Выбрано',
    newFile: 'Новый файл',
    newFolder: 'Новая папка',
    selectAll: 'Выделить все',
    refresh: 'Обновить',
    editPermission: 'Изменить разрешения',
    info: 'Информация',
    filesAndFolders: 'Файлы/папки',
    files: 'Файлы',
    delTip: 'Вы уверены? Действительно удалить их',
    delTip1: 'и все файлы и папки в них?',
    goParent: 'Перейти в родительскую папку',
    hide: 'Скрыть',
    show: 'Показать',
    hfd: 'Скрытые файлы и папки',
    remote: 'Удаленные',
    local: 'Локальные',
    fileTransfers: 'Передача файлов',
    cancelAll: 'Отменить все',
    upload: 'Загрузить',
    download: 'Скачать',
    resume: 'Возобновить',
    pause: 'Приостановить',
    reset: 'Сбросить',
    showInDefaultFileMananger: 'Показать в файловом менеджере',
    compressAndDownload: 'Сжатие и загрузка',
    compressAndUpload: 'Сжать и загрузить',
    editWithSystemEditor: 'Редактировать в системном редакторе',
    gotoFolderInTerminal: 'Доступ к этой папке через терминал',
    calculate: 'рассчитать',
    skipAll: 'пропусти все',
    compressAndTransfer: 'сжать и передать'
  },

  permission: {
    read: 'Чтение',
    write: 'Запись',
    exec: 'Выполнение',
    owner: 'Владелец',
    group: 'Группа',
    other: 'Другие'
  },

  // ssh form
  form: {
    password: 'Пароль',
    privateKey: 'Приватный ключ',
    privateKeyDesc: 'Строка приватного ключа',
    importFromFile: 'Загрузить из файла',
    passphrase: 'Фраза-пароль',
    passphraseDesc: 'Фраза-пароль для приватного ключа',
    host: 'Адрес',
    username: 'Имя пользователя',
    port: 'Порт',
    title: 'Название',
    saveAndConnect: 'Сохранить и соединиться',
    saveAndCreateNew: 'Сохранить и создать новый',
    save: 'Сохранить',
    loginScript: 'Запустить скрипт',
    loginScriptDelay: 'Задержка запуска скрипта',
    loginScriptTip: 'Запустить скрипт после логина',
    connect: 'Соединиться',
    testConnection: 'Проверить соединение',
    required: 'Обязательно',
    proxyIp: 'IP прокси',
    proxyPort: 'Порт прокси',
    proxyType: 'Тип прокси',
    proxyIpPlaceholder: 'IP адрес прокси',
    selectProxy: 'Выбрать прокси',
    auth: 'Авторизация',
    proxy: 'Прокси',
    use: 'Использовать',
    encode: 'Кодировка',
    terminalType: 'Тип терминала',
    startDirectory: 'Начальный каталог',
    ignoreKeyboardInteractive: 'Игнорировать интерактивную клавиатуру',
    description: 'Описание',
    connectionHopping: 'Connection hopping',
    loginPassword: 'логин Пароль',
    loginFail: 'Ошибка входа',
    notSet: 'не задано',
    displayRaw: 'Отображение необработанного текста в терминале',
    supportRegexp: 'Поддержка регулярных выражений',
    keywordsHighlight: 'Подсветка ключевых слов',
    keyword: 'ключевое слово',
    viewOnly: 'Только просмотр',
    scaleViewport: 'Масштабировать окно просмотра',
    credentialsRequired: 'Требуются учетные данные',
    profiles: 'Профили',
    profileName: 'Имя профиля',
    interactiveValues: 'предопределённые интерактивные значения для клавиатуры',
    chooseFromBookmarks: 'Выбрать из закладок',
    editWithColorPicker: 'Редактировать с выбором цвета',
    editWithTextEditor: 'Редактировать с текстовым редактором',
    loadSshConfigs: 'загрузить конфигурации ssh'
  },

  // ssh terminal
  ssh: {
    clear: 'Очистить',
    selectAll: 'Выделить все',
    savePassword: 'Сохранить пароль',
    search: 'Поиск',
    terminal: 'Терминал',
    nextMatch: 'Следующее соответствие',
    prevMatch: 'Предыдущее соответствие',
    split: 'Разделить',
    fileManager: 'Файловый менеджер',
    changeDirection: 'Изменить направление',
    batchInput: 'Пакетный ввод',
    runInAllTerminals: 'Выполнить во всех терминалах',
    matchCase: 'С учетом регистра',
    matchWholeWord: 'Целое слово',
    useRegExp: 'Регулярное выражение',
    socketCloseTip: 'Соединение потеряно',
    sshTunnel: 'SSH Туннель',
    remotePort: 'удаленный порт',
    localPort: 'локальный порт',
    localToRemote: 'Перемесить локальное соединение на удаленный сервер',
    remoteToLocal: 'Перемесить удаленное соединение с локальным сервером',
    sftpPathFollowSsh: 'Синхронизация пути SFTP с терминалом',
    dynamicPortForwarding: 'динамическая пересылка порта',
    sftpPathFollowSshTip: 'При включенной синхронизации пути SFTP с терминалом, вы можете столкнуться с некоторыми проблемами вывода терминала',
    explainWithAi: 'объяснить с ИИ',
    getAiSuggestions: 'получить предложения ИИ',
    showCmdSuggestions: 'показать предложения команд',
    broadcastInput: 'отображать ввод на всех терминалах'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: 'Темы терминала',
    export: 'Экспорт',
    themeName: 'Название темы',
    saveAndApply: 'Сохранить и применить',
    apply: 'Применить',
    default: 'По умолчанию',
    newTheme: 'Новая тема',
    themeConfig: 'Конфигурация темы',
    updated: 'Обновлено',
    uiThemes: 'Темы пользовательского интерфейса'
  },

  // quick commands
  quickCommands: {
    quickCommand: 'Быстрая команда',
    quickCommands: 'Быстрые команды',
    quickCommandName: 'Имя быстрой команды',
    addQuickCommands: 'Добавить быстрые команды',
    newQuickCommand: 'Новая быстрая команда',
    inputOnly: 'Только ввод',
    labels: 'Ярлыки',
    sortByFrequency: 'Сортировать по частоте'
  },

  // setting sync
  settingSync: {
    settingSync: 'Настройка синхронизации',
    sync: 'Синхронизировать',
    syncing: 'Синхронизация',
    syncSettings: 'Настройки синхронизации',
    uploadSettings: 'Загрузить настройки',
    downloadSettings: 'Скачать настройки',
    synced: 'Синхронизировано',
    syncDesc: 'Синхронизировать закладки / историю / настройки в GitHub gist',
    autoSync: 'Автосинхронизация',
    lastSyncTime: 'Время последней синхронизации',
    useExistingGistId: 'Использовать существующий gist',
    autoSyncTip: 'автоматическая загрузка (перезаписать) данные при изменении данных',
    syncServerDataStatus: 'статус данных на сервере синхронизации'
  }

}

export default {
  lang,
  name: 'Русский',
  match: 'ru',
  flag: '🇷🇺'
}
