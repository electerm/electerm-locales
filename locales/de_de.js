/**
 * language: Deutsch
 */
const lang = {

  app: {
    isRunning: 'wird ausgeführt',
    press: 'drücken Sie',
    toShow: 'zum Anzeigen',
    changeLog: 'Änderungsverlauf',
    knownIssues: 'Bekannte Probleme',
    sponsorElecterm: 'Electerm unterstützen',
    privacyNotice: 'Datenschutzhinweis',
    desc: 'Terminal/SSH/SFTP/Telnet/Serielle Schnittstelle/RDP/VNC-Client (Linux, Mac, Windows)',
    single: 'Einzelansicht',
    twoColumns: 'Zweispaltig',
    threeColumns: 'Dreispaltig',
    twoRows: 'Zweizeilig',
    threeRows: 'Dreizeilig',
    grid2x2: '2x2 Raster',
    twoRowsRight: 'Zwei Zeilen rechts',
    twoColumnsBottom: 'Zwei Spalten unten',
    troubleShoot: 'Problembehandlung',
    clearConfig: 'Konfiguration zurücksetzen',
    clearData: 'Daten zurücksetzen',
    runInCommandLine: 'In der Kommandozeile ausführen',
    connectionHoppingWarning: 'Seit Version v1.50.65 hat sich die Verbindungsreihenfolge beim Connection Hopping geändert. Details finden Sie im Wiki.',
    haveRead: 'Verstanden, nicht mehr anzeigen',
    runningTime: 'Laufzeit',
    fullContent: 'Vollständiger Inhalt',
    copied: 'kopiert',
    moveTo: 'verschieben nach...',
    roleAI: 'Rolle zum Erstellen von Terminalbefehlen mit KI',
    roleExplainAI: 'Rolle zur Erklärung der Terminalausgabe mit KI',
    modelAi: 'KI-Modell',
    aiSuggestionsCache: 'KI-Vorschläge-Cache'
  },

  menu: {

    hide: 'Verstecken',
    hideothers: 'Andere verstecken',
    unhide: 'Anzeigen',
    quit: 'Beenden',

    edit: 'Bearbeiten',
    undo: 'Rückgängig',
    redo: 'Wiederholen',
    cut: 'Ausschneiden',
    copy: 'Kopieren',
    paste: 'Einfügen',
    pasteandmatchstyle: 'Einfügen und Stil anpassen',
    del: 'Löschen',
    selectall: 'Alles auswählen',
    startspeaking: 'Stimme aktivieren',
    stopspeaking: 'Stimme deaktivieren',

    view: 'Ansicht',
    reload: 'Neu laden',
    forcereload: 'Erneut laden',
    toggledevtools: 'Entwicklerwerkzeuge',
    toggleControl: 'Steuerung anzeigen',
    resetzoom: 'Zoom zurücksetzen',
    zoomin: 'Vergrößern',
    zoomout: 'Verkleinern',
    togglefullscreen: 'Vollbild',

    window: 'Fenster',
    minimize: 'Minimieren',
    maximize: 'Maximieren',
    unmaximize: 'Maximieren aufheben',
    close: 'Schließen',
    restart: 'Neu starten',
    front: 'Vorne',

    help: 'Hilfe',
    about: 'Über',
    checkUpdate: 'Aktualisierung prüfen',
    reportIssue: 'Fehler melden',
    homepage: 'Homepage',
    sencondInstanceTip: 'Dies ist nur im Haupt-Fenster möglich',
    copyFilePath: 'Dateipfad kopieren',
    pasteSelected: 'Auswahl einfügen'
  },

  common: {
    history: 'Verlauf',
    bookmarks: 'Lesezeichen',
    bookmarkCategory: 'Kategorie',
    setting: 'Einstellung',
    about: 'Über',
    ok: 'OK',
    cancel: 'Abbrechen',
    expandAll: 'Alle aufklappen',
    collapseAll: 'Alle zuklappen',
    restoreSessions: 'Sitzungen wiederherstellen',
    ignore: 'Ignorieren',
    pin: 'Anheften',
    keyboardShortcuts: 'Tastatürkürzel',
    delSelected: 'ausgewählte löschen',
    turnOff: 'abschalten',
    tasks: 'Aufgaben',
    batchOperation: 'Batch -Betrieb',
    examples: 'Beispiele',
    importFromCSV: 'aus der CSV -Datei importieren',
    addToQueue: 'zur Warteschlange hinzufügen',
    execute: 'ausführen',
    finished: 'fertig',
    resolutions: 'Auflösung',
    addressBookmarks: 'Adress-Lesezeichen',
    import: 'importieren',
    sshConfigNotice: 'Konfigurationen aus ~/.ssh/config erkannt, als Lesezeichen importieren?'
  },

  control: {
    author: 'Autor',
    download: 'Herunterladen',
    bugReport: 'Fehler melden',
    checkForUpdate: 'Aktualisierung prüfen',
    homepage: 'Homepage',
    notFoundContent: 'Inhalt nicht gefunden',
    newSsh: 'Neue SSH-Verbindung',
    newTerminal: 'Neuer Terminal',
    dependencies: 'Abhängigkeiten',
    env: 'Umgebungsvariablen',
    os: 'Betriebssystem',
    userTips: 'Benutzungshinweise',
    commandLineUsage: 'Kommandozeilen-Benutzung',
    newBookmark: 'Neues Lesezeichen',
    newWindow: 'Neues Fenster'
  },

  transferHistory: {
    transferHistory: 'Transfer-Verlauf',
    localPath: 'Lokaler Pfad',
    remotePath: 'Remote Pfad',
    type: 'Typ',
    startTime: 'Startzeit',
    finishTime: 'Endzeit',
    speed: 'Geschwindigkeit',
    clear: 'Leeren',
    fromPath: 'Von',
    toPath: 'Nach'
  },

  tabs: {
    titleEmptyWarn: 'Titel darf nicht leer sein',
    close: 'Schließen',
    closeOtherTabs: 'Andere Tabs schließen',
    closeTabRight: 'Rechte Tabs schließen',
    newTab: 'Neuer Tab',
    duplicate: 'Duplizieren',
    rename: 'Umbenennen',
    openNewTerm: 'Neuen Terminal öffnen',
    sessions: 'Sitzungen',
    cloneToNextLayout: 'In nächstes Layout klonen',
    reloadCurrentTab: 'Aktuellen Tab neu laden'
  },

  main: {
    error: 'Etwas ist fehlgeschlagen.'
  },

  updater: {
    noNeed: 'Keine Aktualisierung',
    noNeedDesc: 'Sie haben die neueste Version',
    fail: 'Aktualisierung fehlgeschlagen',
    newVersion: 'Neue Version',
    upgrade: 'Aktualisieren',
    upgrading: 'Aktualisieren...',
    skipThisVersion: 'Diese Version überspringen',
    moreChangeLog: 'Weitere Änderungsprotokoll',
    manuallyDownloadFrom: 'manuell herunterladen von'
  },

  setting: {

    new: 'Neu',
    settings: 'Einstellungen',
    common: 'Allgemein',
    hotkeyNotOk: 'Hotkey ist nicht verfügbar',
    saved: 'Gespeichert',
    saveLang: 'Gespeichert, bitte neustarten',
    restartNow: 'Jetzt neu starten',
    hotkeyDesc: 'System Hotkey(Bringe das Fenster zurück)',
    timeoutDesc: 'SSH/SFTP Timeout(in Millisekunden)',
    scrollBackDesc: 'Scrollback-Größe(in Zeilen)',
    language: 'Sprache',
    copyWhenSelect: 'Kopieren wenn ausgewählt',
    rightClickSelectsWord: 'Rechtsklick wählt Wort aus',
    pasteWhenContextMenu: 'Rechtsklick um einzufügen',
    fontSize: 'Schriftgröße',
    fontFamily: 'Schriftfamilie',
    opacity: 'Transparenz',
    global: 'Global',
    disableTransferHistory: 'Transfer-Verlauf deaktivieren',
    resetAllToDefault: 'Alle zurücksetzen',
    terminalBackgroundImage: 'Terminal-Hintergrundbild',
    chooseFile: 'Datei auswählen',
    rendererType: 'Renderer-Typ',
    defaultTerminalType: 'Standard-Terminal-Typ',
    ctrlOrMetaOpenTerminalLink: 'STRG oder META (auf Mac) muss gedrückt werden, wenn Sie auf einen Terminal-Link klicken',
    noTerminalBg: 'Kein Hintergrund-Bild',
    saveTerminalLogToFile: 'Terminal-Log in Datei speichern',
    checkUpdateOnStart: 'Beim Start auf Aktualisierung prüfen',
    encrypt: 'Verschlüsseln',
    cursorBlink: 'Blinkender Cursor',
    openAll: 'Alle Lesezeichen in dieser Kategorie öffnen',
    useSystemTitleBar: 'System-Titelleiste verwenden',
    useSystemTitleBarTip: 'Programm muss neu gestartet werden, wenn Sie System-Titelleiste verwenden, Transparenz funktioniert nicht',
    onStartBookmarks: 'Öffne Lesezeichen beim Start',
    pleaseSelect: 'Bitte wählen',
    keepaliveIntervalDesc: 'Keepalive-Intervall(in Millisekunden)',
    editorTip: 'Editor Befehl oder Pfad',
    cursorStyle: 'Cursor-Stil',
    confirmBeforeExit: 'Vor dem Beenden bestätigen',
    initDefaultTabOnStart: 'Öffnen Sie die Standard -Registerkarte, wenn die App starten',
    screenReaderMode: 'Unterstützen Sie den Bildschirmleser im Terminal',
    makeItPortable: 'Machen Sie es tragbar',
    dataTransferedTo: 'Daten übertragen auf',
    autoRefreshWhenSwitchToSftp: 'automatische Aktualisieren beim Wechsel zu SFTP',
    terminalWordSeparator: 'Terminalwortabscheider',
    settingShortcuts: 'Verknüpfungen',
    closeCurrentTab: 'Die aktuelle Registerkarte schließen',
    prevTab: 'Vorheriger Tab',
    nextTab: 'Nächster Tab',
    pasteSelected: 'Ausgewähltes einfügen',
    showNormalBuffer: 'Normale Puffer zeigen',
    customCss: 'Benutzerdefinierte CSS',
    hideSshConfig: 'SSH-Config-Kategorie ausblenden',
    addTimeStampToTermLog: 'Fügen Sie dem Terminalprotokoll Zeitstempel hinzu',
    terminalBackSpaceMode: 'Endraumsequenz',
    showHiddenFilesOnSftpStart: 'Zeigen Sie versteckte Dateien auf SFTP -Start an',
    hideIP: 'IP-Adresse verbergen',
    disableConnectionHistory: 'Verbindungsverlauf deaktivieren',
    terminalLogPath: 'Terminal-Protokollpfad',
    chooseFolder: 'Ordner auswählen',
    sshSftpSplitView: 'Terminal und SFTP in geteilter Ansicht anzeigen'
  },

  sftp: {
    cancel: 'Abbrechen',
    skip: 'Überspringen',
    merge: 'Zusammenführen',
    overwrite: 'Überschreiben',
    rename: 'Umbenennen',
    renameAll: 'Alle umbenennen',
    mergeDesc: 'Konflikt-Ordner zusammenführen',
    overwriteDesc: 'Konflikt-Dateien überschreiben',
    mergeAll: 'Alle zusammenführen',
    overwriteAll: 'Alle überschreiben',
    renameDesc: 'Konflikt-Dateien/Ordner umbenennen',
    folder: 'Ordner',
    file: 'Datei',
    fileConflict: 'Datei-Konflikt',
    submit: 'Absenden',
    edit: 'Bearbeiten',
    open: 'Öffnen',
    permission: 'Berechtigung',
    name: 'Name',
    mode: 'Modus',
    path: 'Pfad',
    fullPath: 'Voller Pfad',
    size: 'Größe',
    accessTime: 'Zugriffszeit',
    modifyTime: 'Änderungszeit',
    attributes: 'Attribute',
    enter: 'Eingeben',
    deleteAll: 'Alle löschen',
    selected: 'Ausgewählt',
    newFile: 'Neue Datei',
    newFolder: 'Neuer Ordner',
    selectAll: 'Alle auswählen',
    refresh: 'Aktualisieren',
    editPermission: 'Berechtigung bearbeiten',
    info: 'Info',
    filesAndFolders: 'Dateien und Ordner',
    files: 'Dateien',
    delTip: 'Sind Sie sicher? Diese werden gelöscht',
    delTip1: 'und alle Dateien und Ordner in ihnen',
    goParent: 'Zu übergeordnetem Ordner',
    hide: 'Verstecken',
    show: 'Anzeigen',
    hfd: 'Versteckte Dateien und Ordner anzeigen',
    remote: 'Remote',
    local: 'Lokal',
    fileTransfers: 'Datei-Transfer',
    cancelAll: 'Alle abbrechen',
    upload: 'Hochladen',
    download: 'Herunterladen',
    resume: 'Fortsetzen',
    pause: 'Pause',
    reset: 'Zurücksetzen',
    showInDefaultFileMananger: 'In Dateimanager anzeigen',
    compressAndDownload: 'Komprimieren und herunterladen',
    compressAndUpload: 'Komprimieren und hochladen',
    editWithSystemEditor: 'Bearbeiten mit Systemeditor',
    gotoFolderInTerminal: 'Greifen Sie von der Konsole auf diesen Ordner zu',
    calculate: 'Berechnung',
    skipAll: 'alles überspringen'
  },

  permission: {
    read: 'Lesen',
    write: 'Schreiben',
    exec: 'Ausführen',
    owner: 'Eigentümer',
    group: 'Gruppe',
    other: 'Andere'
  },

  form: {
    password: 'Passwort',
    privateKey: 'Privater Schlüssel',
    privateKeyDesc: 'Inhalt des privaten Schlüssels',
    importFromFile: 'Aus Datei importieren',
    passphrase: 'Passphrase',
    passphraseDesc: 'Passphrase für den privaten Schlüssel',
    host: 'Host',
    username: 'Benutzername',
    port: 'Port',
    title: 'Titel',
    saveAndConnect: 'Speichern und verbinden',
    saveAndCreateNew: 'Speichern und neu erstellen',
    save: 'Speichern',
    loginScript: 'Anmeldeskript',
    loginScriptDelay: 'Anmeldeskript-Verzögerung',
    loginScriptTip: 'Anmeldeskript wird nach erfolgreicher SSH-Verbindung ausgeführt',
    connect: 'Verbinden',
    testConnection: 'Verbindung testen',
    required: 'Erforderlich',
    proxyIp: 'Proxy-IP',
    proxyPort: 'Proxy-Port',
    proxyType: 'Proxy-Typ',
    proxyIpPlaceholder: 'Proxy-IP-Adresse',
    selectProxy: 'Proxy auswählen',
    auth: 'Authentifizierung',
    proxy: 'Proxy',
    use: 'Verwenden',
    encode: 'Kodierung',
    terminalType: 'Terminal-Typ',
    startDirectory: 'Startverzeichnis',
    ignoreKeyboardInteractive: 'Keyboard-Interactive ignorieren',
    description: 'Beschreibung',
    connectionHopping: 'Connection Hopping',
    loginPassword: 'Anmeldepasswort',
    loginFail: 'Anmeldung fehlgeschlagen',
    notSet: 'Nicht festgelegt',
    displayRaw: 'Rohdaten im Terminal anzeigen',
    supportRegexp: 'Unterstützt reguläre Ausdrücke',
    keywordsHighlight: 'Schlüsselwort-Hervorhebung',
    keyword: 'Schlüsselwort',
    viewOnly: 'Nur Ansicht',
    scaleViewport: 'Ansichtsfenster skalieren',
    credentialsRequired: 'Anmeldedaten erforderlich',
    profiles: 'Profile',
    profileName: 'Profilname',
    interactiveValues: 'Vordefinierte Werte für Keyboard-Interactive',
    chooseFromBookmarks: 'Aus Lesezeichen auswählen',
    editWithColorPicker: 'Mit Farbauswahl bearbeiten',
    editWithTextEditor: 'Mit Texteditor bearbeiten',
    loadSshConfigs: 'SSH-Konfigurationen laden'
  },

  ssh: {
    clear: 'Löschen',
    selectAll: 'Alles auswählen',
    savePassword: 'Passwort speichern',
    search: 'Suchen',
    terminal: 'Terminal',
    nextMatch: 'Nächster Treffer',
    prevMatch: 'Vorheriger Treffer',
    split: 'Teilen',
    fileManager: 'Dateimanager',
    changeDirection: 'Richtung ändern',
    batchInput: 'Mehrfacheingabe',
    runInAllTerminals: 'In allen Terminals ausführen',
    matchCase: 'Groß-/Kleinschreibung beachten',
    matchWholeWord: 'Ganzes Wort',
    useRegExp: 'Reguläre Ausdrücke verwenden',
    socketCloseTip: 'Terminalverbindung wurde getrennt',
    sshTunnel: 'SSH-Tunnel',
    remotePort: 'Remote-Port',
    localPort: 'Lokaler Port',
    localToRemote: 'Lokale Verbindung zum Remote-Server weiterleiten',
    remoteToLocal: 'Remote-Verbindung zum lokalen Server weiterleiten',
    sftpPathFollowSsh: 'SFTP-Pfad mit Terminal synchronisieren',
    dynamicPortForwarding: 'Dynamische Portweiterleitung',
    sftpPathFollowSshTip: 'Wenn die SFTP-Pfadsynchronisierung aktiviert ist, können bestimmte Ausgabeprobleme im Terminal auftreten',
    explainWithAi: 'Mit KI erklären',
    getAiSuggestions: 'KI-Vorschläge erhalten',
    broadcastInput: 'Eingabe auf alle sichtbaren Terminals spiegeln',
    showCmdSuggestions: 'Befehlsvorschläge anzeigen'
  },

  terminalThemes: {
    terminalThemes: 'Terminal-Designs',
    export: 'Exportieren',
    themeName: 'Design-Name',
    saveAndApply: 'Speichern und anwenden',
    apply: 'Anwenden',
    default: 'Standard',
    newTheme: 'Neues Design',
    themeConfig: 'Design-Konfiguration',
    updated: 'Design aktualisiert',
    uiThemes: 'Benutzeroberflächen-Designs'
  },

  quickCommands: {
    quickCommand: 'Schnellbefehl',
    quickCommands: 'Schnellbefehle',
    quickCommandName: 'Schnellbefehl-Name',
    addQuickCommands: 'Schnellbefehle hinzufügen',
    newQuickCommand: 'Neuer Schnellbefehl',
    inputOnly: 'Nur Eingabe',
    labels: 'Bezeichnungen',
    sortByFrequency: 'Nach Häufigkeit sortieren'
  },

  settingSync: {
    settingSync: 'Einstellungssynchronisation',
    sync: 'Synchronisieren',
    syncing: 'Synchronisiere...',
    syncSettings: 'Einstellungen synchronisieren',
    uploadSettings: 'Einstellungen hochladen',
    downloadSettings: 'Einstellungen herunterladen',
    synced: 'Synchronisiert',
    syncDesc: 'Synchronisiert Lesezeichen/Verlauf/Einstellungen mit GitHub Secret Gist',
    autoSync: 'Automatische Synchronisation',
    lastSyncTime: 'Letzte Synchronisation',
    useExistingGistId: 'Vorhandene Gist-ID verwenden',
    autoSyncTip: 'Daten automatisch überschreiben, wenn Änderungen erkannt werden',
    syncServerDataStatus: 'Status der Serverdaten'
  }
}

export default {
  lang,
  name: 'Deutsch',
  match: 'de',
  flag: '🇩🇪'
}
