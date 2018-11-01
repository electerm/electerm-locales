/**
 * language: 中文
 */
const lang = {

  //app desc
  app: {
    desc: 'electerm是一个terminal/ssh/sftp客户端(支持linux, mac, win), 基于electron/node-pty/xterm/antd等组件',
    isRunning: '运行中',
    press: '按',
    toShow: '显示'
  },

  //app menu
  menu: {
    //mac app
    hide: '隐藏',
    hideothers: '隐藏其他',
    unhide: '显示',
    quit: '退出',

    //edit
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

    //view
    view: '视图',
    reload: '刷新',
    forcereload: '强制刷新',
    toggledevtools: '切换开发者工具',
    toggleControl: '切换显示/隐藏控制按钮',
    resetzoom: '重设大小',
    zoomin: '缩小',
    zoomout: '放大',
    togglefullscreen: '切换全屏',

    //window
    window: '窗口',
    minimize: '最小化',
    maximize: '最大化',
    unmaximize: '取消最大化',
    close: '关闭',
    restart: '重启',
    front: '到最前',

    //help
    help: '帮助',
    about: '关于',
    checkUpdate: '检查更新',
    reportIssue: '报告问题',
    homepage: '官网'
  },

  //common
  common: {
    history: '访问历史',
    bookmarks: '书签',
    bookmarkCategory: '书签分类',
    setting: '设置',
    about: '关于',
    ok: '好的',
    cancel: '取消',
    restoreSessions: '恢复未正确关闭的连接?'
  },

  //control buttons
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
    userTips: '使用小技巧'
  },

  //transferHistory
  transferHistory: {
    transferHistory: '传输历史记录',
    localPath: '本地路径',
    remotePath: '远程路径',
    type: '类型',
    startTime: '开始时间',
    finishTime: '结束时间',
    speed: '速度',
    clear: '清空'
  },

  //ssh tabs
  tabs: {
    titleEmptyWarn: '标题不能为空',
    close: '关闭',
    closeOtherTabs: '关闭其他连接',
    closeTabRight: '关闭右侧连接',
    newTab: '新建连接',
    duplicate: '复制',
    rename: '重命名',
    openNewTerm: '打开新连接'
  },

  //main warpper
  main: {
    error: '出错了.'
  },

  //updater check
  updater: {
    noNeed: '无需升级',
    noNeedDesc: '你已经在使用最新版本',
    fail: '检查升级失败了',
    goGetIt: '前往升级!',
    newVersion: '发现新版本'
  },

  //setting
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
    scrollBackDesc: '保留的行数',
    language: '语言',
    copyWhenSelect: '选中文字后自动拷贝到剪贴板',
    rightClickSelectsWord: '右键自动选择单词',
    pasteWhenContextMenu: '右键自动粘贴',
    fontSize: '字体大小',
    fontFamily: '字体',
    resetAllToDefault: '重置为默认设置'
  },

  //sftp
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
    reset: '重置'
  },

  permission: {
    read: '读',
    write: '写',
    exec: '执行',
    owner: '所有者',
    group: '组',
    other: '其他'
  },

  //ssh form
  form: {
    password: '密码',
    privateKey: '私匙',
    privateKeyDesc: '私匙字符串',
    importFromFile: '从文件导入',
    passphrase: '私匙密码',
    passphraseDesc: '私匙的密码',
    host: '主机地址',
    username: '用户名',
    port: '端口',
    title: '标题',
    saveAndConnect: '保存并连接',
    save: '保存',
    loginScript: '运行脚本',
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
    use: '使用'
  },

  //ssh terminal
  ssh: {
    clear: '清屏',
    selectAll: '全选',
    savePassword: '保存密码',
    search: '搜索',
    terminal: '终端',
    nextMatch: '下一处',
    prevMatch: '上一处',
    split: '分割',
    fileManager: '文件管理器',
    changeDirection: '切换布局'
  },

  //user tips
  userTips: [
    '<b>双击</b>一个标签即可复制一个新标签，并且自动进入相同的路径(有限支持)',
    '<b>双击</b>标签栏空白处也可以打开一个新标签',
    '<b>右键单击</b>标签页打开菜单, 有<b>关闭其他标签</b>, <b>关闭右侧连接</b>等功能',
    '默认情况下, 按下组合键<b>Ctrl + 2</b>就会把窗口重新激活置于最前, 热键可以在设置页面设置',
    'sftp的复制粘贴功能可以任意使用在远程和本地文件管理器'
  ],

  //features
  features: [
    'terminal/ssh/sftp客户端(类似xshell)',
    '支持热键唤醒',
    '多平台支持(linux, mac, windows)',
    '多语言支持'
  ],

  featuresName: '特性',

  //terminal themes
  terminalThemes: {
    terminalThemes: '终端主题',
    export: '导出',
    themeName: '主题名称',
    saveAndApply: '保存并应用',
    apply: '应用',
    default: '默认',
    newTheme: '新主题',
    themeConfig: '主题定义'
  }
}

module.exports = {
  lang,
  name: '中文'
}
