/**
 * language: 中文
 */
const lang = {

  // app desc
  app: {
    isRunning: '运行中',
    press: '按',
    toShow: '显示',
    changeLog: '更新日志',
    knownIssues: '已知问题',
    sponsorElecterm: '赞助 Electerm',
    privacyNotice: '隐私声明',
    desc: '终端/SSH/SFTP/FTP/Telnet/串口/RDP/VNC客户端(支持Linux、Mac、Win)',
    single: '单一',
    twoColumns: '双列',
    threeColumns: '三列',
    twoRows: '双行',
    threeRows: '三行',
    grid2x2: '网格 2x2',
    twoRowsRight: '右侧双行',
    twoColumnsBottom: '底部双列',
    troubleShoot: '故障排除',
    clearConfig: '清除配置',
    clearData: '清除数据',
    runInCommandLine: '在命令行中运行',
    connectionHoppingWarning: '自版本v1.50.65起，连接跳转的连接顺序已更改，详情请阅读wiki。',
    haveRead: '已阅，勿扰',
    runningTime: '运行时间',
    fullContent: '完整内容',
    copied: '已复制',
    moveTo: '移动到...',
    roleAI: '使用AI创建终端命令的角色',
    roleExplainAI: '用于通过AI解释终端输出的角色',
    modelAi: 'AI模型',
    aiSuggestionsCache: 'AI建议缓存',
    layout: '布局'
  },

  // app menu
  menu: {
    // mac app
    hide: '隐藏',
    hideothers: '隐藏其他',
    unhide: '显示',
    quit: '退出',

    // edit
    edit: '编辑',
    undo: '撤销',
    redo: '重做',
    cut: '剪切',
    copy: '复制',
    paste: '粘贴',
    pasteandmatchstyle: '带格式粘贴',
    del: '删除',
    selectall: '全选',
    startspeaking: '开始录音',
    stopspeaking: '停止录音',

    // view
    view: '视图',
    reload: '刷新',
    forcereload: '强制刷新',
    toggledevtools: '切换开发者工具',
    toggleControl: '切换显示/隐藏控制按钮',
    resetzoom: '重设大小',
    zoomin: '放大',
    zoomout: '缩小',
    togglefullscreen: '切换全屏',

    // window
    window: '窗口',
    minimize: '最小化',
    maximize: '最大化',
    unmaximize: '取消最大化',
    close: '关闭',
    restart: '重启',
    front: '窗口置顶',

    // help
    help: '帮助',
    about: '关于',
    checkUpdate: '检查更新',
    reportIssue: '报告问题',
    homepage: '官网',
    sencondInstanceTip: '只能在主窗口中执行此操作',
    copyFilePath: '复制文件路径',
    pasteSelected: '粘贴所选内容'
  },

  // common
  common: {
    history: '访问历史',
    bookmarks: '书签',
    bookmarkCategory: '书签分类',
    setting: '设置',
    about: '关于',
    ok: '确定',
    cancel: '取消',
    expandAll: '展开所有',
    collapseAll: '收起所有',
    restoreSessions: '恢复会话',
    ignore: '忽视',
    pin: '保持面板打开',
    keyboardShortcuts: '键盘快捷键',
    delSelected: '删除所选',
    turnOff: '关闭',
    tasks: '任务',
    batchOperation: '批处理操作',
    examples: '例子',
    importFromCSV: '从CSV文件中导入',
    addToQueue: '添加到队列',
    execute: '执行',
    finished: '完成的',
    resolutions: '分辨率',
    addressBookmarks: '地址书签',
    import: '导入',
    sshConfigNotice: '检测到 ~/.ssh/config 中的配置，将其导入为书签？'
  },

  // control buttons
  control: {
    author: '作者',
    download: '下载',
    bugReport: '提交bug',
    checkForUpdate: '检查更新',
    homepage: '官网',
    notFoundContent: '还没有内容',
    newSsh: '新建ssh',
    newTerminal: '新连接',
    dependencies: '依赖组件',
    env: '环境变量',
    os: '操作系统',
    userTips: '使用小技巧',
    commandLineUsage: '命令行用法',
    newBookmark: '新书签',
    newWindow: '新窗口'
  },

  // transferHistory
  transferHistory: {
    transferHistory: '传输历史记录',
    localPath: '本地路径',
    remotePath: '远程路径',
    type: '类型',
    startTime: '开始时间',
    finishTime: '结束时间',
    speed: '速度',
    clear: '清空',
    fromPath: '源路径',
    toPath: '目标路径'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: '标题不能为空',
    close: '关闭',
    closeOtherTabs: '关闭其他连接',
    closeTabRight: '关闭右侧连接',
    newTab: '新建连接',
    duplicate: '复制',
    rename: '重命名',
    openNewTerm: '打开新连接',
    sessions: '连接',
    cloneToNextLayout: '克隆到下一个布局',
    reloadCurrentTab: '重新加载当前标签页'
  },

  // main warpper
  main: {
    error: '出错了.'
  },

  // updater check
  updater: {
    noNeed: '无需升级',
    noNeedDesc: '你已经在使用最新版本',
    fail: '检查升级失败了',
    newVersion: '发现新版本',
    upgrade: '升级',
    upgrading: '升级中',
    skipThisVersion: '不再提示这个版本',
    moreChangeLog: '更多更改日志',
    manuallyDownloadFrom: '手动下载'
  },

  // setting
  setting: {

    new: '新建',
    settings: '设置',
    common: '通用',
    hotkeyNotOk: '快捷键无法使用，请换一个试试',
    saved: '已保存',
    saveLang: '已保存, 重启生效',
    restartNow: '立刻重启',
    hotkeyDesc: '系统快捷键(重新把窗口带到最前面)',
    timeoutDesc: 'ssh/sftp超时时间(毫秒)',
    scrollBackDesc: '保留终端显示行数',
    language: '语言',
    copyWhenSelect: '选中文字后自动拷贝到剪贴板',
    rightClickSelectsWord: '右键自动选择单词',
    pasteWhenContextMenu: '右键自动粘贴',
    fontSize: '字体大小',
    fontFamily: '字体',
    opacity: '不透明度',
    global: '全局',
    disableTransferHistory: '关闭传输SFTP传输历史',
    resetAllToDefault: '重置为默认设置',
    terminalBackgroundImage: '终端背景图片',
    chooseFile: '选择文件',
    rendererType: '渲染类型',
    defaultTerminalType: '默认终端类型',
    ctrlOrMetaOpenTerminalLink: '按住ctrl或者meta(mac系统)才能点击打开终端里的链接',
    noTerminalBg: '无背景图片',
    saveTerminalLogToFile: '将终端日志保存到文件',
    checkUpdateOnStart: '检查应用程序启动时的更新',
    encrypt: '加密',
    cursorBlink: '光标闪烁',
    openAll: '在此类别中打开所有书签',
    useSystemTitleBar: '使用系统标题栏',
    useSystemTitleBarTip: '需要重新启动应用程序生效，使用系统标题栏时，透明不起作用',
    onStartBookmarks: '在启动时打开书签',
    pleaseSelect: '请选择',
    keepaliveIntervalDesc: 'Keepalive间隔',
    editorTip: '编辑器的命令或路径',
    cursorStyle: '光标风格',
    confirmBeforeExit: '退出前确认',
    initDefaultTabOnStart: '打开默认选项卡当应用启动时',
    screenReaderMode: '终端中支持屏幕阅读器',
    makeItPortable: '使其便携',
    dataTransferedTo: '数据传输到',
    autoRefreshWhenSwitchToSftp: '切换到SFTP时自动刷新',
    terminalWordSeparator: '终端单词分离器',
    settingShortcuts: '捷径',
    closeCurrentTab: '关闭当前选项卡',
    prevTab: '上一个选项卡',
    nextTab: '下一个选项卡',
    pasteSelected: '粘贴所选内容',
    showNormalBuffer: '显示正常缓冲区',
    customCss: '自定义CSS',
    hideSshConfig: '隐藏ssh-config类别',
    addTimeStampToTermLog: '将时间戳添加到终端日志',
    terminalBackSpaceMode: '终端backspace序列',
    showHiddenFilesOnSftpStart: '在SFTP开始显示隐藏的文件',
    hideIP: '隐藏 IP 地址',
    disableConnectionHistory: '禁用连接历史',
    terminalLogPath: '终端日志路径',
    chooseFolder: '选择文件夹',
    sshSftpSplitView: '在分屏视图中显示终端和SFTP',
    allowMultiInstance: '允许多实例'
  },

  // sftp
  sftp: {
    cancel: '取消',
    skip: '跳过',
    merge: '合并',
    overwrite: '覆盖',
    rename: '重命名',
    renameAll: '重命名所有',
    mergeDesc: '合并所有冲突',
    overwriteDesc: '覆盖所有冲突文件',
    mergeAll: '合并所有',
    overwriteAll: '覆盖所有',
    renameDesc: '重命名余下的文件/文件夹',
    folder: '文件夹',
    file: '文件',
    fileConflict: '文件冲突',
    submit: '提交',
    edit: '编辑',
    open: '打开',
    permission: '权限',
    name: '名称',
    mode: '模式',
    path: '路径',
    fullPath: '完整路径',
    size: '大小',
    accessTime: '访问时间',
    modifyTime: '修改时间',
    attributes: '属性',
    enter: '进入',
    deleteAll: '删除所有',
    selected: '选中的',
    newFile: '新建文件',
    newFolder: '新建文件夹',
    selectAll: '全选',
    refresh: '刷新',
    editPermission: '编辑权限',
    info: '文件信息',
    filesAndFolders: '文件/文件夹',
    files: '文件',
    delTip: '确定么？将会删除这些',
    delTip1: '以及其中的文件/文件夹',
    goParent: '前往上级文件夹',
    hide: '隐藏',
    show: '显示',
    hfd: '隐藏文件和文件夹',
    remote: '远程',
    local: '本地',
    fileTransfers: '文件传输',
    cancelAll: '取消所有',
    upload: '上传',
    download: '下载',
    resume: '继续',
    pause: '暂停',
    reset: '重置',
    showInDefaultFileMananger: '在文件管理器中显示',
    compressAndDownload: '压缩和下载',
    compressAndUpload: '压缩和上传',
    editWithSystemEditor: '使用系统编辑器编辑',
    gotoFolderInTerminal: '访问终端文件夹',
    calculate: '计算',
    skipAll: '跳过所有',
    compressAndTransfer: '压缩并传输'
  },

  permission: {
    read: '读',
    write: '写',
    exec: '执行',
    owner: '所有者',
    group: '组',
    other: '其他'
  },

  // ssh form
  form: {
    password: '密码',
    privateKey: '私钥',
    privateKeyDesc: '私钥字符串',
    importFromFile: '从文件导入',
    passphrase: '私钥密码',
    passphraseDesc: '私钥的密码',
    host: '主机地址',
    username: '用户名',
    port: '端口',
    title: '标题',
    saveAndConnect: '保存并连接',
    saveAndCreateNew: '保存并新建',
    save: '保存',
    loginScript: '运行脚本',
    loginScriptDelay: '运行脚本延迟',
    loginScriptTip: '登陆后运行脚本',
    connect: '连接',
    testConnection: '测试连接',
    required: '必填',
    proxyIp: '代理ip',
    proxyPort: '代理端口',
    proxyType: '代理类型',
    proxyIpPlaceholder: '代理ip地址',
    selectProxy: '选择代理',
    auth: '授权信息',
    proxy: '代理',
    use: '使用',
    encode: '编码',
    terminalType: '终端类型',
    startDirectory: '开始目录',
    ignoreKeyboardInteractive: '忽略键盘互动',
    description: '描述',
    connectionHopping: '连接跳跃',
    loginPassword: '登录密码',
    loginFail: '登录失败',
    notSet: '没有设置',
    displayRaw: '在终端显示原始文本',
    supportRegexp: '支持正则表达式',
    keywordsHighlight: '关键词高亮',
    keyword: '关键词',
    viewOnly: '仅查看',
    scaleViewport: '缩放视口',
    credentialsRequired: '需要凭证',
    profiles: '配置文件',
    profileName: '配置文件名称',
    interactiveValues: '预定义的键盘交互值',
    chooseFromBookmarks: '从书签中选择',
    editWithColorPicker: '用颜色选择器编辑',
    editWithTextEditor: '用文本编辑器编辑',
    loadSshConfigs: '加载 SSH 配置'
  },

  // ssh terminal
  ssh: {
    clear: '清屏',
    selectAll: '全选',
    savePassword: '保存密码',
    search: '搜索',
    terminal: '终端',
    nextMatch: '下一处',
    prevMatch: '上一处',
    split: '分屏',
    fileManager: '文件管理器',
    changeDirection: '切换布局',
    batchInput: '批量输入',
    runInAllTerminals: '在所有终端上运行',
    matchCase: '区分大小写',
    matchWholeWord: '匹配整个单词',
    useRegExp: '使用正则表达式',
    socketCloseTip: '终端连接丢失',
    sshTunnel: 'SSH隧道',
    remotePort: '远程端口',
    localPort: '本地端口',
    localToRemote: '将本地连接转发到远程服务器',
    remoteToLocal: '转发远程连接到本地服务器',
    sftpPathFollowSsh: 'SFTP路径与终端同步',
    dynamicPortForwarding: '动态端口转发',
    sftpPathFollowSshTip: '当启用 SFTP 路径同步到终端时，您可能会遇到某些终端输出问题',
    explainWithAi: '用AI解释',
    getAiSuggestions: '获取AI建议',
    showCmdSuggestions: '显示命令建议',
    broadcastInput: '将输入镜像到所有终端'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: '终端主题',
    export: '导出',
    themeName: '主题名称',
    saveAndApply: '保存并应用',
    apply: '应用',
    default: '默认',
    newTheme: '新主题',
    themeConfig: '主题配置',
    updated: '已更新',
    uiThemes: 'UI主题'
  },

  // quick commands
  quickCommands: {
    quickCommand: '快速命令',
    quickCommands: '快速命令',
    quickCommandName: '快速命令名称',
    addQuickCommands: '添加快速命令',
    newQuickCommand: '新建快速命令',
    inputOnly: '仅输入',
    labels: '标签',
    sortByFrequency: '按频率排序'
  },

  // setting sync
  settingSync: {
    settingSync: '设置同步',
    sync: '同步',
    syncing: '同步中...',
    syncSettings: '同步设置',
    uploadSettings: '上传设置',
    downloadSettings: '下载设置',
    synced: '已同步',
    syncDesc: '把书签/历史/系统设置同步到Github的私有Gist',
    autoSync: '自动同步',
    lastSyncTime: '最后同步时间',
    useExistingGistId: '利用现有的',
    autoSyncTip: '当数据更改时自动上传（覆盖）数据',
    syncServerDataStatus: '同步服务器中的数据状态'
  }
}

export default {
  lang,
  name: '简体中文',
  match: 'zh(-|_)cn|zh(-|_)mo|zh(-|_)sg',
  flag: '🇨🇳'
}
