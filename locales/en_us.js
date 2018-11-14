/**
 * language: english
 */
const lang = {

  //app desc
  app: {
    desc: 'electerm is a terminal/ssh/sftp client(linux, mac, win) based on electron/node-pty/xterm/antd and many other libs',
    isRunning: 'is running',
    press: 'press',
    toShow: 'to show'
  },

  //app menu
  menu: {
    //mac app
    hide: 'hide',
    hideothers: 'hide others',
    unhide: 'unhide',
    quit: 'quit',

    //edit
    edit: 'edit',
    undo: 'undo',
    redo: 'redo',
    cut: 'cut',
    copy: 'copy',
    paste: 'paste',
    pasteandmatchstyle: 'paste and match style',
    del: 'delete',
    selectall: 'select all',
    startspeaking: 'start speaking',
    stopspeaking: 'stop speaking',

    //view
    view: 'view',
    reload: 'reload',
    forcereload: 'force reload',
    toggledevtools: 'toggle dev tools',
    toggleControl: 'toggle control buttons',
    resetzoom: 'reset zoom',
    zoomin: 'zoom in',
    zoomout: 'zoom out',
    togglefullscreen: 'toggle fullscreen',

    //window
    window: 'window',
    minimize: 'minimize',
    maximize: 'maximize',
    unmaximize: 'unmaximize',
    close: 'close',
    restart: 'restart',
    front: 'front',

    //help
    help: 'help',
    about: 'about',
    checkUpdate: 'check update',
    reportIssue: 'report issue',
    homepage: 'homepage'
  },

  //common
  common: {
    history: 'history',
    bookmarks: 'bookmarks',
    bookmarkCategory: 'category',
    setting: 'setting',
    about: 'about',
    ok: 'ok',
    cancel: 'cancel',
    restoreSessions: 'restore sessions from uncorrect shutdown?'
  },

  //control buttons
  control: {
    author: 'author',
    download: 'download',
    bugReport: 'bug report',
    checkForUpdate: 'check for update',
    homepage: 'homepage',
    notFoundContent: 'no item',
    newSsh: 'new ssh',
    newTerminal: 'new terminal',
    dependencies: 'dependencies',
    env: 'env',
    os: 'os',
    userTips: 'user tips'
  },

  //transferHistory
  transferHistory: {
    transferHistory: 'transfer history',
    localPath: 'local path',
    remotePath: 'remote path',
    type: 'type',
    startTime: 'start time',
    finishTime: 'finish time',
    speed: 'speed',
    clear: 'clear'
  },

  //ssh tabs
  tabs: {
    titleEmptyWarn: 'title can not be empty',
    close: 'close',
    closeOtherTabs: 'close other tabs',
    closeTabRight: 'close tabs on the right',
    newTab: 'new tab',
    duplicate: 'duplicate',
    rename: 'rename',
    openNewTerm: 'open new terminal'
  },

  //main warpper
  main: {
    error: 'Something went wrong.'
  },

  //updater check
  updater: {
    noNeed: 'no need to update',
    noNeedDesc: 'you are using the latest release',
    fail: 'check update fails',
    goGetIt: 'go get it!',
    newVersion: 'new version found'
  },

  //setting
  setting: {
    new: 'new',
    settings: 'settings',
    common: 'common',
    hotkeyNotOk: 'hotkey can not be registe, please use another one',
    saved: 'saved',
    saveLang: 'saved, restart to take effect',
    restartNow: 'restart now',
    hotkeyDesc: 'system hotkey(bring window back to front)',
    timeoutDesc: 'ssh/sftp timeout(in millisecond)',
    scrollBackDesc: 'scrollback lines',
    language: 'language',
    copyWhenSelect: 'copy selected text when select',
    rightClickSelectsWord: 'right click auto select word',
    pasteWhenContextMenu: 'paste when right click',
    fontSize: 'font size',
    fontFamily: 'font family',
    resetAllToDefault: 'restore settings to their original defaults'
  },

  //sftp
  sftp: {
    cancel: 'cancel',
    skip: 'skip',
    merge: 'merge',
    overwrite: 'overwrite',
    rename: 'rename',
    renameAll: 'rename all',
    mergeDesc: 'merge rest conflict folders',
    overwriteDesc: 'overwrite rest conflict files',
    mergeAll: 'merge all',
    overwriteAll: 'overwrite all',
    renameDesc: 'rename rest files/folders',
    folder: 'folder',
    file: 'file',
    fileConflict: 'file conflict',
    submit: 'submit',
    edit: 'edit',
    open: 'open',
    permission: 'permission',
    name: 'name',
    mode: 'mode',
    path: 'path',
    fullPath: 'full path',
    size: 'size',
    accessTime: 'access time',
    modifyTime: 'modify time',
    attributes: 'attributes',
    enter: 'enter',
    deleteAll: 'delete all',
    selected: 'selected',
    newFile: 'new file',
    newFolder: 'new folder',
    selectAll: 'select all',
    refresh: 'refresh',
    editPermission: 'edit permission',
    info: 'info',
    filesAndFolders: 'files/folders',
    files: 'files',
    delTip: 'are you sure? this will delete these',
    delTip1: 'and all the file/directory in them',
    goParent: 'goto parent folder',
    hide: 'hide',
    show: 'show',
    hfd: 'hidden files and directories',
    remote: 'remote',
    local: 'local',
    fileTransfers: 'file transfers',
    cancelAll: 'cancel all',
    upload: 'upload',
    download: 'download',
    resume: 'resume',
    pause: 'pause',
    reset: 'reset'
  },

  permission: {
    read: 'read',
    write: 'write',
    exec: 'exec',
    owner: 'owner',
    group: 'group',
    other: 'other'
  },

  //ssh form
  form: {
    password: 'password',
    privateKey: 'privateKey',
    privateKeyDesc: 'private key string',
    importFromFile: 'import from file',
    passphrase: 'passphrase',
    passphraseDesc: 'passphrase for privateKey',
    host: 'host',
    username: 'username',
    port: 'port',
    title: 'title',
    saveAndConnect: 'save and connect',
    save: 'save',
    loginScript: 'run script',
    loginScriptTip: 'run script after logined',
    connect: 'connect',
    testConnection: 'test connection',
    required: 'required',
    proxyIp: 'proxy ip',
    proxyPort: 'proxy port',
    proxyType: 'proxy type',
    proxyIpPlaceholder: 'proxy ip address',
    selectProxy: 'select proxy',
    auth: 'auth',
    proxy: 'proxy',
    use: 'use'
  },

  //ssh terminal
  ssh: {
    clear: 'clear',
    selectAll: 'select all',
    savePassword: 'save password',
    search: 'search',
    terminal: 'terminal',
    nextMatch: 'next match',
    prevMatch: 'prev match',
    split: 'split',
    fileManager: 'file manager',
    changeDirection: 'change direction'
  },

  //user tips
  userTips: [
    '<b>double click</b> a ssh tab will duplicate a same tab, and enter same path as original tab(limited support)',
    '<b>double click</b> blank area of tab bar will open a new ssh terminal too',
    '<b>right click</b> a ssh tab you can open context menu, from context menu there are <b>close other tabs</b>, <b>close tabs on the right</b>, and other functions',
    'by default, <b>Ctrl + 2</b> will bring electerm window to front, hotkey can be set in <b>setting</b> menu',
    'sftp copy and paste works in both local and remote'
  ],

  //features
  features: [
    'work as a terminal or ssh/sftp client(similar to xshell)',
    'hotkey to bring window back to front(simliar to guake, default is ctrl + 2)',
    'support multi platform(linux, mac, windows)',
    'support multi-language(en, cn only for now)'
  ],

  featuresName: 'features',

  //terminal themes
  terminalThemes: {
    terminalThemes: 'terminal themes',
    export: 'export',
    themeName: 'theme name',
    saveAndApply: 'save and apply',
    apply: 'apply',
    default: 'default',
    newTheme: 'new theme',
    themeConfig: 'theme config',
    updated: 'updated'
  }
}

module.exports = {
  lang,
  name: 'English'
}
