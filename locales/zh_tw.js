/**
 * language: 正體中文
 */
const lang = {

  // app desc
  app: {
    desc: 'electerm 是一個跨平台的 Terminal/SSH/SFTP 用户端工具，同時支援 Linux、MacOS、Windows，基於 electron/ssh2/node-pty/xterm/antd/subx 等開源軟體所開發。',
    isRunning: '執行中',
    press: '按',
    toShow: '顯示'
  },

  // app menu
  menu: {
    // mac app
    hide: '隱藏',
    hideothers: '隱藏其他',
    unhide: '顯示',
    quit: '離開',

    // edit
    edit: '編輯',
    undo: '復原',
    redo: '重做',
    cut: '剪下',
    copy: '複製',
    paste: '貼上',
    pasteandmatchstyle: '格式貼上',
    del: '刪除',
    selectall: '全選',
    startspeaking: '開始錄音',
    stopspeaking: '停止錄音',

    // view
    view: '檢視',
    reload: '重新載入',
    forcereload: '強制重新載入',
    toggledevtools: '切換開發者工具',
    toggleControl: '切換顯示/隱藏控制選項',
    resetzoom: '重設大小',
    zoomin: '放大',
    zoomout: '縮小',
    togglefullscreen: '切換全螢幕',

    // window
    window: '視窗',
    minimize: '最小化',
    maximize: '最大化',
    unmaximize: '取消最大化',
    close: '關閉',
    restart: '重新啓動',
    front: '視窗置頂',

    // help
    help: '協助',
    about: '關於',
    checkUpdate: '檢查更新',
    reportIssue: '回報問題',
    homepage: '專案首頁'
  },

  // common
  common: {
    history: '連線歷史',
    bookmarks: '書籤',
    bookmarkCategory: '書籤群組',
    setting: '設定',
    about: '關於',
    ok: '確定',
    cancel: '取消',
    expandAll: '展開全部',
    collapseAll: '收起全部',
    restoreSessions: '回復連線'
  },

  // control buttons
  control: {
    author: '作者',
    download: '下載',
    bugReport: '回報錯誤',
    checkForUpdate: '檢查更新',
    homepage: '專案首頁',
    notFoundContent: '沒有內容',
    newSsh: '建立新的 SSH 連線',
    newTerminal: '新的 Terminal 分頁',
    dependencies: '相依模組',
    env: '環境變數',
    os: '作業系統',
    userTips: '小技巧'
  },

  // transferHistory
  transferHistory: {
    transferHistory: '傳輸歷史記錄',
    localPath: '本地端路徑',
    remotePath: '遠端路徑',
    type: '類型',
    startTime: '開始時間',
    finishTime: '結束時間',
    speed: '速度',
    clear: '清空白',
    fromPath: '源路徑',
    toPath: '目標路徑'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: '標題不能為空白',
    close: '關閉',
    closeOtherTabs: '關閉其他分頁',
    closeTabRight: '關閉右邊所有分頁',
    newTab: '新增分頁',
    duplicate: '複製',
    rename: '重新命名',
    openNewTerm: '開啓新的分頁',
    sessions: '連線'
  },

  // main warpper
  main: {
    error: '發生錯誤了！'
  },

  // updater check
  updater: {
    noNeed: '不需要升級',
    noNeedDesc: '你已經在使用最新版本了',
    fail: '檢查升級失敗了',
    goGetIt: '前往升級！',
    newVersion: '發現了新的版本',
    upgrade: '升級',
    upgrading: '升級中',
    skipThisVersion: '不再提示這個版本'
  },

  // setting
  setting: {
    new: '新建',
    settings: '設定',
    common: '環境設定',
    hotkeyNotOk: '這個快捷鍵無法使用，請換一個試試',
    saved: '已儲存',
    saveLang: '已儲存，需要重新啓動才能生效',
    restartNow: '請立刻重新啓動',
    hotkeyDesc: '系统快捷鍵(重新把視窗帶到最前面)',
    timeoutDesc: 'ssh/sftp 逾時時限(毫秒)',
    scrollBackDesc: '保留顯示行數',
    language: '介面語言',
    copyWhenSelect: '選取文字之後自動複製到剪貼簿',
    rightClickSelectsWord: '右鍵自動選取單字',
    pasteWhenContextMenu: '右鍵自動貼上',
    fontSize: '字體大小',
    fontFamily: '字體',
    opacity: '不透明度',
    global: '全域',
    disableSshHistory: '關閉 SSH 分頁歷史',
    disableTransferHistory: '關閉傳輸 SFTP 傳輸歷史',
    resetAllToDefault: '重置為預設設定',
    terminalBackgroundImage: '終端機背景圖片',
    chooseFile: '選取檔案',
    rendererType: '渲染類型',
    defaultTerminalType: '預設終端機類型',
    ctrlOrMetaOpenTerminalLink: '按住 ctrl 或者 meta (mac 系统) 才能開啓終端機裡的連結',
    noTerminalBg: '無背景圖片',
    saveTerminalLogToFile: '將終端機日誌儲存到檔案',
    checkUpdateOnStart: '啓動時檢查更新'
  },

  // sftp
  sftp: {
    cancel: '取消',
    skip: '跳過',
    merge: '合並',
    overwrite: '覆寫',
    rename: '重新命名',
    renameAll: '重新命名全部',
    mergeDesc: '合並全部衝突',
    overwriteDesc: '覆寫全部衝突檔案',
    mergeAll: '合並全部',
    overwriteAll: '覆寫全部',
    renameDesc: '重新命名剩下的檔案/目錄',
    folder: '目錄',
    file: '檔案',
    fileConflict: '檔案衝突',
    submit: '提交',
    edit: '編輯',
    open: '開啓',
    permission: '權限',
    name: '名稱',
    mode: '模式',
    path: '路徑',
    fullPath: '完整路徑',
    size: '大小',
    accessTime: '存取時間',
    modifyTime: '修改時間',
    attributes: '屬性',
    enter: '進入',
    deleteAll: '刪除全部',
    selected: '選中的',
    newFile: '新建檔案',
    newFolder: '新建目錄',
    selectAll: '全選',
    refresh: '重新載入',
    editPermission: '編輯權限',
    info: '檔案資訊',
    filesAndFolders: '檔案/目錄',
    files: '檔案',
    delTip: '確定嗎？將會刪除這些',
    delTip1: '以及其中的檔案/目錄',
    goParent: '前往上層目錄',
    hide: '隱藏',
    show: '顯示',
    hfd: '隱藏檔案和目錄',
    remote: '遠端',
    local: '本地端',
    fileTransfers: '檔案傳輸',
    cancelAll: '取消全部',
    upload: '上傳',
    download: '下載',
    resume: '繼續',
    pause: '暫停',
    reset: '重置',
    showInDefaultFileMananger: '在檔案瀏覽器中顯示'
  },

  permission: {
    read: '讀',
    write: '寫',
    exec: '執行',
    owner: '擁有者',
    group: '群組',
    other: '其他'
  },

  // ssh form
  form: {
    password: '密碼',
    privateKey: '私鑰',
    privateKeyDesc: '私鑰字串',
    importFromFile: '從檔案匯入',
    passphrase: '私鑰密碼',
    passphraseDesc: '私鑰的密碼',
    host: '主機位址',
    username: '使用者名稱',
    port: '連接埠',
    title: '標題',
    saveAndConnect: '儲存然後開始連線',
    saveAndCreateNew: '儲存然後再建立新的',
    save: '儲存',
    loginScript: '登入腳本',
    loginScriptDelay: '登入腳本延遲執行',
    loginScriptTip: '登入後執行登入腳本',
    connect: '連線',
    testConnection: '测試連線',
    required: '必填',
    proxyIp: '代理伺服器 IP',
    proxyPort: '代理伺服器連接埠',
    proxyType: '代理伺服器類型',
    proxyIpPlaceholder: '代理伺服器 IP 位址',
    selectProxy: '選取代理伺服器',
    auth: '授權資訊',
    proxy: '代理伺服器',
    use: '使用',
    encode: '編碼',
    terminalType: '終端機類型',
    startDirectory: '啓動目錄'
  },

  // ssh terminal
  ssh: {
    clear: '清空畫面',
    selectAll: '全選',
    savePassword: '儲存密碼',
    search: '搜尋',
    terminal: '終端機',
    nextMatch: '下一個',
    prevMatch: '上一個',
    split: '分隔畫面',
    fileManager: '檔案瀏覽器',
    changeDirection: '切換排列',
    batchInput: '批量輸入'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: '終端機主題',
    export: '匯出',
    themeName: '主題名稱',
    saveAndApply: '儲存並套用',
    apply: '套用',
    default: '預設',
    newTheme: '新主題',
    themeConfig: '主題設定',
    updated: '已更新'
  },

  // quick commands
  quickCommands: {
    quickCommand: '快速指令',
    quickCommands: '快速指令',
    quickCommandName: '快速指令名稱',
    addQuickCommands: '加入快速指令',
    newQuickCommand: '新建快速指令',
    inputOnly: '僅能輸入'
  },

  // setting sync
  settingSync: {
    settingSync: '設定同步',
    sync: '同步',
    syncing: '同步中...',
    syncSettings: '同步設定',
    uploadSettings: '上傳設定',
    downloadSettings: '下載設定',
    synced: '已同步',
    syncDesc: '把書籤/歷史/系统設定同步到 Github 的私有 Gist',
    autoSync: '自動同步',
    lastSyncTime: '最後同步時間'
  }
}

module.exports = {
  lang,
  name: '繁體中文',
  match: /zh(-|_)TW|zh(-|_)HK/,
  flag: 'tw'
}
