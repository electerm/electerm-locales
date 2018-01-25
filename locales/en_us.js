/**
 * language: english
 */
const lang = {

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
    resetzoom: 'reset zoom',
    zoomin: 'zoom in',
    zoomout: 'zoom out',
    togglefullscreen: 'toggle fullscreen',

    //window
    window: 'window',
    minimize: 'minimize',
    close: 'close',
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
    setting: 'setting',
    about: 'about',
    ok: 'ok',
    cancel: 'cancel'
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
    timeoutDesc: 'ssh timeout(in millisecond)',
    scrollBackDesc: 'scrollback lines',
    language: 'language'
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
    permission: 'permission',
    name: 'name',
    mode: 'mode',
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
    pause: 'pause'
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
    connect: 'connect',
    testConnection: 'test connection',
    required: 'required'
  },

  //ssh terminal
  ssh: {
    clear: 'clear',
    selectAll: 'select all'
  }

}

module.exports = {
  lang,
  name: 'english'
}
