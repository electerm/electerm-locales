/**
 * language: 日本語
 */
const lang = {

  // app desc
  app: {
    desc: 'ターミナル/SSH/SFTP/Telnet/シリアルポートクライアント（Linux、Mac、Windows）',
    isRunning: '実行中',
    press: '押す',
    toShow: '表示',
    changeLog: '更新履歴',
    knownIssues: '既知の問題',
    sponsorElecterm: 'electerm をスポンサー',
    privacyNotice: 'プライバシー通知'
  },

  // app menu
  menu: {
    // mac app
    hide: '非表示',
    hideothers: 'その他を非表示',
    unhide: '表示',
    quit: '終了',

    // edit
    edit: '編集',
    undo: '取り消す',
    redo: 'やり直す',
    cut: 'カット',
    copy: 'コピー',
    paste: 'ペースト',
    pasteandmatchstyle: 'ペーストしてスタイルを合わせる',
    del: '削除',
    selectall: 'すべでを選択',
    startspeaking: '読み上げを開始',
    stopspeaking: '読み上げを終了',

    // view
    view: '表示',
    reload: 'リロード',
    forcereload: '強制リロード',
    toggledevtools: '開発者ツールを切替',
    toggleControl: '制御ボタンを切替',
    resetzoom: '実際のサイズ',
    zoomin: '拡大',
    zoomout: '縮小',
    togglefullscreen: 'フルスクリーンを切替',

    // window
    window: 'ウインドウ',
    minimize: 'しまう',
    maximize: '拡大',
    unmaximize: '縮小',
    close: '終了',
    restart: '再起動',
    front: '手前にする',

    // help
    help: 'ヘルプ',
    about: 'アプリについで',
    checkUpdate: '更新を確認',
    reportIssue: '問題を報告',
    homepage: 'ホームページ',
    sencondInstanceTip: 'これをメインウィンドウで行うことができます',
    copyFilePath: 'ファイルパスをコピーします'
  },

  // common
  common: {
    history: '履歴',
    bookmarks: 'ブックマーク',
    bookmarkCategory: 'カテゴリ',
    setting: '設定',
    about: 'についで',
    ok: '確認',
    cancel: 'キャンセル',
    expandAll: 'すべて展開',
    collapseAll: 'すべて折りたたむ',
    restoreSessions: 'セッションの復元 ',
    ignore: '無視',
    pin: 'パネルを開いたままにする',
    keyboardShortcuts: 'キーボードショートカット',
    delSelected: '選択を削除します',
    turnOff: '消す',
    tasks: 'タスク',
    batchOperation: 'バッチ操作',
    examples: '例',
    importFromCSV: 'CSVファイルからのインポート',
    addToQueue: 'キューに追加する',
    execute: '実行する',
    finished: '終了した'
  },

  // control buttons
  control: {
    author: '著者',
    download: 'ダウンロード',
    bugReport: 'バグレポート',
    checkForUpdate: '更新を確認',
    homepage: 'ホームページ',
    notFoundContent: 'アイテムなし',
    newSsh: '新規SSH',
    newTerminal: '新規ターミナル',
    dependencies: '依存',
    env: '環境変数',
    os: 'システム',
    userTips: 'ヒント',
    commandLineUsage: 'コマンドラインの使用法',
    newBookmark: '新しいブックマーク',
    newWindow: '新しいインスタンス'
  },

  // transferHistory
  transferHistory: {
    transferHistory: '転送履歴',
    localPath: 'ローカルパス',
    remotePath: 'リモートパス',
    type: 'タイプ',
    startTime: '開始時間',
    finishTime: '終了時間',
    speed: 'スピード',
    clear: 'クリア',
    fromPath: 'ソースパス',
    toPath: 'ターゲットパス'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: 'タイトルが必要',
    close: '終了',
    closeOtherTabs: 'その他のタブを終了',
    closeTabRight: '右のタブを終了',
    newTab: '新規タブ',
    duplicate: '複製',
    rename: '名前を変更',
    openNewTerm: '新しい接続を開く',
    sessions: 'セッション'
  },

  // main warpper
  main: {
    error: 'エラーが発生'
  },

  // updater check
  updater: {
    noNeed: '更新する必要はありません',
    noNeedDesc: '最新のリリースを使用しています',
    fail: '更新の確認が失敗',
    newVersion: '更新があります',
    upgrade: '更新',
    upgrading: '更新中',
    skipThisVersion: '更新を無視',
    moreChangeLog: 'より多くの変更ログ',
    manuallyDownloadFrom: '手動でダウンロードします'
  },

  // setting
  setting: {
    new: '新規',
    settings: '設定',
    common: '通用',
    hotkeyNotOk: 'ホットキーは登録できません。別のホットキーを使用してください',
    saved: '保存',
    saveLang: '保存し、再起動して有効にします',
    restartNow: '今すぐ再起動',
    hotkeyDesc: 'システムホットキー（ウィンドウを前面に戻す）',
    timeoutDesc: 'ssh / sftpタイムアウト時間（ミリ秒）',
    scrollBackDesc: '端末の表示行を保留',
    language: '言語',
    copyWhenSelect: 'テキストを選択した時に自動的にコピー',
    rightClickSelectsWord: '右クリックして単語を自動的に選択',
    pasteWhenContextMenu: '右クリックしてペースト',
    fontSize: 'フォントサイズ',
    fontFamily: 'フォント',
    opacity: '不透明度',
    global: 'グローバル',
    disableSshHistory: 'ssh履歴を無効',
    disableTransferHistory: 'sftp転送履歴を無効',
    resetAllToDefault: '設定をデフォルトにする',
    terminalBackgroundImage: 'ターミナルの背景画像',
    chooseFile: 'ファイルを選択',
    rendererType: 'レンダラータイプ',
    defaultTerminalType: 'デフォルトのタイプ',
    ctrlOrMetaOpenTerminalLink: 'CtrlキーまたはMeta（Macシステム）を押したままクリックして、ターミナルでリンクを開きます',
    noTerminalBg: '背景画像なし',
    saveTerminalLogToFile: 'ターミナルログをファイルに保存',
    checkUpdateOnStart: 'アプリの起動時に更新を確認する',
    encrypt: '暗号化',
    cursorBlink: 'カーソル点滅',
    openAll: 'このカテゴリのすべてのブックマークを開く',
    useSystemTitleBar: 'システムタイトルバーを使用してください',
    useSystemTitleBarTip: 'システムのタイトルバーを使用するときは、透明に機能しない場合に、再起動アプリを再起動する必要があります。',
    onStartBookmarks: '起動時のブックマークを開く',
    pleaseSelect: '選んでください',
    keepaliveIntervalDesc: 'キープアライブ間隔',
    editorTip: 'エディタのコマンドまたはパス',
    cursorStyle: 'カーソルスタイル',
    confirmBeforeExit: '終了前に確認してください',
    initDefaultTabOnStart: 'アプリが起動するときにデフォルトのタブを開きます',
    screenReaderMode: 'ターミナルのスクリーンリーダーをサポートします',
    makeItPortable: 'ポータブルにします',
    dataTransferedTo: 'に転送されたデータ',
    autoRefreshWhenSwitchToSftp: 'SFTPに切り替えると自動更新'
  },

  // sftp
  sftp: {
    cancel: 'キャンセル',
    skip: '無視',
    merge: 'マージ',
    overwrite: '上書き',
    rename: '名前を変更',
    renameAll: 'すべての名前を変更',
    mergeDesc: '競合フォルダーをマージする',
    overwriteDesc: '競合フォルダーを上書き',
    mergeAll: 'すべてをマージ',
    overwriteAll: 'すべてを上書き',
    renameDesc: '残りのファイル/フォルダの名前を変更します',
    folder: 'フォルダ',
    file: 'ファイル',
    fileConflict: 'ファイルの競合',
    submit: '提出',
    edit: '編集',
    open: '開く',
    permission: '権限',
    name: '名前',
    mode: 'モード',
    path: 'パス',
    fullPath: 'フルパス',
    size: 'サイズ',
    accessTime: 'アクセス時間',
    modifyTime: '編集時間',
    attributes: '属性',
    enter: '入る',
    deleteAll: 'すべでを削除',
    selected: '選択済み',
    newFile: '新規ファイル',
    newFolder: '新規フォルダ',
    selectAll: 'すべでを選択',
    refresh: '更新',
    editPermission: '権限を編集',
    info: '情報',
    filesAndFolders: 'ファイル/フォルダ',
    files: 'ファイル',
    delTip: '確認しますか？これからすべでを削除し',
    delTip1: 'すべでのファイルやフォルダがなくなります',
    goParent: '親フォルダーに移動します',
    hide: '非表示',
    show: '表示',
    hfd: 'ファイルとフォルダを非表示',
    remote: 'リモート',
    local: 'ローカル',
    fileTransfers: 'ファイル転送',
    cancelAll: 'すべでをキャンセル',
    upload: 'アップロード',
    download: 'ダウンロード',
    resume: '継続',
    pause: '一時停止',
    reset: 'リセット',
    showInDefaultFileMananger: 'ファイルマネージャに表示',
    compressAndDownload: '圧縮してダウンロードします',
    compressAndUpload: '圧縮してアップロードします',
    editWithSystemEditor: 'システムエディターで編集します'
  },

  permission: {
    read: '読み',
    write: '書き',
    exec: '実行',
    owner: '所有者',
    group: 'グループ',
    other: 'その他'
  },

  // ssh form
  form: {
    password: 'パスワード',
    privateKey: '秘密鍵',
    privateKeyDesc: '秘密鍵テキスト',
    importFromFile: 'ファイルからインポート',
    passphrase: '秘密鍵パスワード',
    passphraseDesc: '秘密鍵のパスワード',
    host: 'ホスト',
    username: 'ユーザー名',
    port: 'ポート',
    title: 'タイトル',
    saveAndConnect: '保存して接続',
    saveAndCreateNew: '保存して新規',
    save: '保存',
    loginScript: 'スクリプトを実行',
    loginScriptDelay: 'スクリプトを遅延実行',
    loginScriptTip: 'ログイン後にスクリプトを実行',
    connect: '接続',
    testConnection: '接続のテスト',
    required: '必要',
    proxyIp: 'プロキシIP',
    proxyPort: 'プロキシポート',
    proxyType: 'プロキシタイプ',
    proxyIpPlaceholder: 'プロキシIPアドレス',
    selectProxy: 'プロキシを選択',
    auth: '承認情報',
    proxy: 'プロキシ',
    use: '使用',
    encode: 'エンコード',
    terminalType: 'ターミナルタイプ',
    startDirectory: '開始パス',
    ignoreKeyboardInteractive: 'キーボードインタラクティブを無視',
    description: '説明'
  },

  // ssh terminal
  ssh: {
    clear: 'クリア',
    selectAll: 'すべでを選択',
    savePassword: 'パスワードを保存',
    search: '検索',
    terminal: 'ターミナル',
    nextMatch: '次',
    prevMatch: '前',
    split: '分割',
    fileManager: 'ファイルマネージャー',
    changeDirection: 'レイアウトの切替',
    batchInput: 'バッチ入力',
    runInAllTerminals: 'すべてのターミナルで実行',
    matchCase: '大文字と小文字を区別',
    matchWholeWord: '単語全体に一致します',
    useRegExp: '正規表現を使用します',
    socketCloseTip: 'ターミナル接続が失われました',
    sshTunnel: 'SSHトンネル',
    remotePort: 'リモートポート',
    localPort: 'ローカルポート',
    localToRemote: 'リモートサーバーへのローカル接続を転送します',
    remoteToLocal: 'ローカルサーバーへのリモート接続を転送します'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: 'ターミナルテーマ',
    export: '書き出す',
    themeName: 'テーマ名',
    saveAndApply: '保存して適用',
    apply: '適用',
    default: 'デフォルト',
    newTheme: '新規テーマ',
    themeConfig: 'テーマ設定',
    updated: '更新',
    uiThemes: 'UIテーマ'
  },

  // quick commands
  quickCommands: {
    quickCommand: 'クイックコマンド',
    quickCommands: 'クイックコマンド',
    quickCommandName: 'コマンド名',
    addQuickCommands: 'コマンドを追加',
    newQuickCommand: '新規コマンド',
    inputOnly: '入力のみ',
    labels: 'ラベル'
  },

  // setting sync
  settingSync: {
    settingSync: '設定の同期',
    sync: '同期',
    syncing: '同期中',
    syncSettings: '同期の設定',
    uploadSettings: '設定をアップロード',
    downloadSettings: '設定をダウンロード',
    synced: '同期しました',
    syncDesc: 'ブックマーク／履歴／設定をgithubシークレットへ同期',
    autoSync: '自動同期',
    lastSyncTime: '前回同期の時間',
    useExistingGistId: '既存を使用'
  }
}

export default {
  lang,
  name: '日本語',
  match: 'ja|ja(-|_)jp',
  flag: '🇯🇵'
}
