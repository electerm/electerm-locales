/**
 * language: Türkçe
 */
const lang = {

  // app desc
  app: {
    desc: 'Terminal/SSH/SFTP/Telnet/Seri port istemcisi (Linux, Mac, Windows)',
    isRunning: 'çalışıyor',
    press: 'bas',
    toShow: 'göster',
    changeLog: 'Değişiklik Günlüğü',
    knownIssues: 'Bilinen Sorunlar',
    sponsorElecterm: 'electerm\'i sponsor et',
    privacyNotice: 'gizlilik bildirimi'
  },

  // app menu
  menu: {
    // mac app
    hide: 'gizle',
    hideothers: 'diğerlerini gizle',
    unhide: 'göster',
    quit: 'çıkış',

    // edit
    edit: 'düzenle',
    undo: 'geri al',
    redo: 'tekrar yap',
    cut: 'kes',
    copy: 'kopyala',
    paste: 'yapıştır',
    pasteandmatchstyle: 'yapıştır ve tarzı eşleştir',
    del: 'sil',
    selectall: 'tümünü seç',
    startspeaking: 'konuşmayı başlat',
    stopspeaking: 'konuşmayı durdur',

    // view
    view: 'görüntüle',
    reload: 'yeniden yükle',
    forcereload: 'yeniden yüklemeye zorla',
    toggledevtools: 'geliştirici araçlarını aç/kapat',
    toggleControl: 'denetim butonlarını aç/kapat',
    resetzoom: 'yakınlaştırmayı sıfırla',
    zoomin: 'yakınlaştır',
    zoomout: 'uzaklaştır',
    togglefullscreen: 'tam ekran modunu aç/kapat',

    // window
    window: 'pencere',
    minimize: 'küçült',
    maximize: 'büyüt',
    unmaximize: 'eski boyutuna döndür',
    close: 'kapat',
    restart: 'yeniden başlat',
    front: 'ön',

    // help
    help: 'yardım',
    about: 'hakkında',
    checkUpdate: 'güncellemeleri denetle',
    reportIssue: 'sorun bildir',
    homepage: 'anasayfa',
    sencondInstanceTip: 'bunu sadece ana pencerede yapabilir',
    copyFilePath: 'Dosya Yolunu Kopyala'
  },

  // common
  common: {
    history: 'geçmiş',
    bookmarks: 'yer imleri',
    bookmarkCategory: 'kategori',
    setting: 'ayarlar',
    about: 'hakkında',
    ok: 'tamam',
    cancel: 'iptal',
    expandAll: 'Tümünü genişlet',
    collapseAll: 'Tümünü daralt',
    restoreSessions: 'oturumları geri yükle',
    ignore: 'aldırmamak',
    pin: 'paneli açık tut',
    keyboardShortcuts: 'Klavye kısayolları',
    delSelected: 'silme seçildi',
    turnOff: 'kapamak',
    tasks: 'görevler',
    batchOperation: 'toplu işlem',
    examples: 'örnekler',
    importFromCSV: 'CSV dosyasından içe aktarın',
    addToQueue: 'Sıraya ekle',
    execute: 'uygulamak',
    finished: 'bitmiş'
  },

  // control buttons
  control: {
    author: 'geliştirici',
    download: 'indir',
    bugReport: 'hata raporu',
    checkForUpdate: 'güncellemeleri denetle',
    homepage: 'anasayfa',
    notFoundContent: 'içerik yok',
    newSsh: 'yeni ssh',
    newTerminal: 'yeni terminal',
    dependencies: 'bağımlılıklar',
    env: 'ortam',
    os: 'işletim sistemi',
    userTips: 'kullanım ipuçları',
    commandLineUsage: 'Komut satırı kullanımı',
    newBookmark: 'Yeni Yer imi',
    newWindow: 'yeni örnek'
  },

  // transferHistory
  transferHistory: {
    transferHistory: 'geçmişi aktar',
    localPath: 'yerel dosya yolu',
    remotePath: 'uzak dosya tolu',
    type: 'tür',
    startTime: 'başlangıç zamanı',
    finishTime: 'bitiş zamanı',
    speed: 'hız',
    clear: 'temizle',
    fromPath: 'kaynak yolu',
    toPath: 'hedef yol'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: 'başlık boş olamaz',
    close: 'kapat',
    closeOtherTabs: 'diğer sekmeleri kapat',
    closeTabRight: 'sağdaki sekmeleri kapat',
    newTab: 'yeni sekme',
    duplicate: 'çoğalt',
    rename: 'yeniden adlandır',
    openNewTerm: 'yeni terminal aç',
    sessions: 'oturumlar'
  },

  // main warpper
  main: {
    error: 'Bir hata oluştu.'
  },

  // updater check
  updater: {
    noNeed: 'güncelleme ihtiyacı bulunmuyor',
    noNeedDesc: 'en güncel sürümü kullanıyorsunuz',
    fail: 'güncelleme sorgulaması başarısız oldu',
    newVersion: 'güncel sürüm bulundu',
    upgrade: 'yükselt!',
    upgrading: 'yükseltiliyor',
    skipThisVersion: 'bu sürümü atla',
    moreChangeLog: 'Daha Fazla Değişiklik Günlüğü',
    manuallyDownloadFrom: 'Manuel olarak indir'
  },

  // setting
  setting: {
    new: 'yeni',
    settings: 'ayarlar',
    common: 'genel',
    hotkeyNotOk: 'bu kısayol kullanılamıyor, lütfen başka bir kısayol kullanın',
    saved: 'kaydedildi',
    saveLang: 'kaydedildi, işlevsel hale gelmesi için yeniden başlatın',
    restartNow: 'şimdi yeniden başlat',
    hotkeyDesc: 'sistem kısayolu (pencereyi öne getir)',
    timeoutDesc: 'ssh/sftp zaman aşımı (milisaniye)',
    scrollBackDesc: 'kaydırılabilecek satır miktarı',
    language: 'dil',
    copyWhenSelect: 'seçilen metni kopyala',
    rightClickSelectsWord: 'sağ tık ile kelimeyi otomatik seç',
    pasteWhenContextMenu: 'sağ tık ile yapıştır',
    fontSize: 'font boyutu',
    fontFamily: 'font ailesi',
    opacity: 'opaklık',
    global: 'evrensel',
    disableSshHistory: 'ssh geçmişini devre dışı bırak',
    disableTransferHistory: 'sftp aktarım geçmişini devre dışı bırak',
    resetAllToDefault: 'ayarları varsayılanlara geri döndür',
    terminalBackgroundImage: 'terminal arkaplan resmi',
    chooseFile: 'dosya seç',
    rendererType: 'render türü',
    defaultTerminalType: 'varsayılan terminal türü',
    ctrlOrMetaOpenTerminalLink: 'terminal bağlantısını açmak için ctrl (veya mac ise meta) basılı iken bağlantıya tıklanmalıdır',
    noTerminalBg: 'arkaplan resmi yok',
    saveTerminalLogToFile: 'terminal günlüğünü dosyaya kaydet',
    checkUpdateOnStart: 'uygulama başlangıcında güncellemeyi kontrol et',
    encrypt: 'şifrelemek',
    cursorBlink: 'imleç yanıp',
    openAll: 'Bu kategorideki tüm yer imini aç',
    useSystemTitleBar: 'Sistem başlık çubuğunu kullanın',
    useSystemTitleBarTip: 'Sistem başlık çubuğunu kullanırken, şeffaf çalıştırdığında etkili olmak için uygulamanın yeniden başlatılması gerekir.',
    onStartBookmarks: 'Başlangıçta yer imlerini açın',
    pleaseSelect: 'lütfen seçin',
    keepaliveIntervalDesc: 'Keepalive aralığı',
    editorTip: 'editörün komutu veya yolu',
    cursorStyle: 'imleç tarzı',
    confirmBeforeExit: 'Çıkmadan önce onaylayın',
    initDefaultTabOnStart: 'Uygulama başladığında varsayılan sekmeyi açın',
    screenReaderMode: 'Terminalde Destek Ekranı Okuyucusu',
    makeItPortable: 'Taşınabilir Yapın',
    dataTransferedTo: 'aktarılan veri',
    autoRefreshWhenSwitchToSftp: 'SFTP\'ye geçerken otomatik yenileme',
    terminalWordSeparator: 'terminal kelime ayırıcı'
  },

  // sftp
  sftp: {
    cancel: 'iptal',
    skip: 'atla',
    merge: 'birleştir',
    overwrite: 'üzerine yaz',
    rename: 'yeniden adlandır',
    renameAll: 'tümünü yeniden adlandır',
    mergeDesc: 'tekrar dizin tutarsızlığı oluşursa birleştir',
    overwriteDesc: 'tekrar dosya tutarsızlığı oluşursa üzerine yaz',
    mergeAll: 'tümünü birleştir',
    overwriteAll: 'tümünü üzerine yaz',
    renameDesc: 'kalan tüm dosyaları/dizinleri yeniden adlandır',
    folder: 'dizin',
    file: 'dosya',
    fileConflict: 'dosya tutarsızlığı',
    submit: 'onayla',
    edit: 'düzenle',
    open: 'aç',
    permission: 'yetki',
    name: 'isim',
    mode: 'mod',
    path: 'dosya yolu',
    fullPath: 'tam dosya yolu',
    size: 'boyut',
    accessTime: 'erişim tarihi',
    modifyTime: 'düzenlenme tarihi',
    attributes: 'nitelikler',
    enter: 'gir',
    deleteAll: 'tümünü sil',
    selected: 'seçili',
    newFile: 'yeni dosya',
    newFolder: 'yeni dizin',
    selectAll: 'tümünü seç',
    refresh: 'yenile',
    editPermission: 'yetkiyi düzenle',
    info: 'bilgi',
    filesAndFolders: 'dosyalar/dizinler',
    files: 'dosyalar',
    delTip: 'emin misiniz? belirtilenler silinecektir',
    delTip1: 'aynı zamanda içerdikleri tüm dosya ve dizinler de silinecektir',
    goParent: 'üst dizine git',
    hide: 'gizle',
    show: 'göster',
    hfd: 'gizli dosya ve dizinler',
    remote: 'uzak',
    local: 'yerel',
    fileTransfers: 'dosya aktarımları',
    cancelAll: 'tümünü iptal et',
    upload: 'yükle',
    download: 'indir',
    resume: 'devam et',
    pause: 'duraklat',
    reset: 'yeniden başlat',
    showInDefaultFileMananger: 'dosya yöneticisinde göster',
    compressAndDownload: 'sıkıştır ve indir',
    compressAndUpload: 'sıkıştırın ve yükleyin',
    editWithSystemEditor: 'Sistem Düzenleyicisi ile Düzenle',
    gotoFolderInTerminal: 'Bu klasöre terminalden erişin',
    calculate: 'hesaplamak',
    skipAll: 'Hepsini geç'
  },

  permission: {
    read: 'okuma',
    write: 'yazma',
    exec: 'çalıştırma',
    owner: 'dosya sahibi',
    group: 'kullanıcı grubu',
    other: 'diğerleri'
  },

  // ssh form
  form: {
    password: 'parola',
    privateKey: 'özel anahtar',
    privateKeyDesc: 'özel anahtar açıklaması',
    importFromFile: 'dosyadan içeri aktar',
    passphrase: 'anahtar parolası',
    passphraseDesc: 'anahtar parolası açıklaması',
    host: 'sunucu',
    username: 'kullanıcı adı',
    port: 'port',
    title: 'başlık',
    saveAndConnect: 'kaydet ve bağlan',
    saveAndCreateNew: 'kaydet ve yenisini oluştur',
    save: 'kaydet',
    loginScript: 'komut dosyası çalıştır',
    loginScriptDelay: 'komut dosyası gecikmesi',
    loginScriptTip: 'giriş yaptıktan sonra komut dosyasını çalıştır',
    connect: 'bağlan',
    testConnection: 'bağlantıyı test et',
    required: 'gerekli',
    proxyIp: 'vekil sunucuya ait ip',
    proxyPort: 'vekil sunucuya ait port',
    proxyType: 'vekil sunucu türü',
    proxyIpPlaceholder: 'vekil sunucu ip adresi',
    selectProxy: 'vekil sunucu seç',
    auth: 'yetkilendirme',
    proxy: 'vekil sunucu',
    use: 'kullan',
    encode: 'şifrele',
    terminalType: 'terminal türü',
    startDirectory: 'başlangıç dizini',
    ignoreKeyboardInteractive: 'klavye etkileşimini yoksay',
    description: 'NS',
    connectionHopping: 'Connection hopping',
    loginPassword: 'giriş şifresi',
    loginFail: 'giriş başarısız oldu'
  },

  // ssh terminal
  ssh: {
    clear: 'temizle',
    selectAll: 'tümünü seç',
    savePassword: 'parolayı kaydet',
    search: 'ara',
    terminal: 'terminal',
    nextMatch: 'sonraki eşleşme',
    prevMatch: 'önceki eşleşme',
    split: 'ikiye böl',
    fileManager: 'dosya yöneticisi',
    changeDirection: 'yönü değiştir',
    batchInput: 'Toplu giriş',
    runInAllTerminals: 'tüm terminallerde çalıştır',
    matchCase: 'harfe duyarlı',
    matchWholeWord: 'Tüm kelimeyi eşleştir',
    useRegExp: 'Normal ifade kullanın',
    socketCloseTip: 'Terminal Bağlantısı Kayıp',
    sshTunnel: 'ssh tüneli',
    remotePort: 'uzak liman',
    localPort: 'yerel liman',
    localToRemote: 'Yerel bağlantıyı uzak sunucuya iletin',
    remoteToLocal: 'Yerel Sunucuya Uzaktan Bağlantı İleri Bağlantısı'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: 'terminal temaları',
    export: 'dışarı aktar',
    themeName: 'tema adı',
    saveAndApply: 'kaydet ve uygula',
    apply: 'uygula',
    default: 'varsayılan',
    newTheme: 'yeni tema',
    themeConfig: 'tema ayarları',
    updated: 'güncellendi',
    uiThemes: 'UI Temaları'
  },

  // quick commands
  quickCommands: {
    quickCommand: 'hızlı komut',
    quickCommands: 'hızlı komutlar',
    quickCommandName: 'hızlı komut adı',
    addQuickCommands: 'hızlı komutlar ekle',
    newQuickCommand: 'yeni hızlı komut',
    inputOnly: 'sadece giriş',
    labels: 'etiket'
  },

  // setting sync
  settingSync: {
    settingSync: 'ayar senkronizasyonu',
    sync: 'senkronize et',
    syncing: 'senkronize ediliyor',
    syncSettings: 'senkronizasyon ayarları',
    uploadSettings: 'yükleme ayarları',
    downloadSettings: 'indirme ayarları',
    synced: 'senkronize edildi',
    syncDesc: 'yer imlerini / geçmişi / ayarları gizli github gist adresine senkronize et',
    autoSync: 'otomatik senkronizasyon',
    lastSyncTime: 'son senkronizasyon zamanı',
    useExistingGistId: 'var olanı kullan',
    autoSyncTip: 'Veriler değiştiğinde verileri otomatik yükleme (üzerine yazın)'
  }
}

export default {
  lang,
  name: 'Türkçe',
  match: 'tr',
  flag: '🇹🇷'
}
