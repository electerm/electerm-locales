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
    sencondInstanceTip: 'можно сделать только в главном окне'
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
    keyboardShortcuts: 'Горячие клавиши'
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
    sessions: 'Сессии'
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
    goGetIt: 'Установить!',
    newVersion: 'Найдена новая версия',
    upgrade: 'Обновить',
    upgrading: 'Изменения',
    skipThisVersion: 'Пропустить эту версию',
    moreChangeLog: 'Больше изменений'
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
    disableSshHistory: 'Отключить историю SSH',
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
    initDefaultTabOnStart: 'Открыть вкладку по умолчанию при запуске приложения'
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
    editWithSystemEditor: 'Редактировать в системном редакторе'
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
    description: 'Описание'
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
    socketCloseTip: 'Соединение потеряно'
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
    labels: 'Ярлыки'
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
    useExistingGistId: 'Использовать существующий gist'
  }

}

export default {
  lang,
  name: 'Русский',
  match: 'ru',
  flag: '🇷🇺'
}
