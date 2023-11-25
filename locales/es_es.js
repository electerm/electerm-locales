/**
 * language: Español
 * By Federico Pereira <fpereira@cnsoluciones.com>
 */
const lang = {

  // app desc
  app: {
    desc: 'Cliente de terminal/SSH/SFTP/Telnet/puerto serie (Linux, Mac, Windows)',
    isRunning: 'está corriendo',
    press: 'presione',
    toShow: 'mostrar',
    changeLog: 'Registro de cambios',
    knownIssues: 'Problemas conocidos',
    sponsorElecterm: 'patrocinar electerm',
    privacyNotice: 'aviso de Privacidad'
  },

  // app menu
  menu: {
    // mac app
    hide: 'esconder',
    hideothers: 'esconder otros',
    unhide: 'mostrar',
    quit: 'salir',

    // edit
    edit: 'editar',
    undo: 'deshacer',
    redo: 'rehacer',
    cut: 'cortar',
    copy: 'copiar',
    paste: 'pegar',
    pasteandmatchstyle: 'pegar y combinar estilo',
    del: 'borrar',
    selectall: 'seleccionar todo',
    startspeaking: 'empieza a hablar',
    stopspeaking: 'parar de hablar',

    // view
    view: 'ver',
    reload: 'recargar',
    forcereload: 'forzar recarga',
    toggledevtools: 'alternar herramientas de desarrollo',
    toggleControl: 'botones de control de alternar',
    resetzoom: 'reajustar el zoom',
    zoomin: 'acercarse',
    zoomout: 'disminuir el zoom',
    togglefullscreen: 'alternar pantalla completa',

    // window
    window: 'window',
    minimize: 'minimimizar',
    maximize: 'maximizar',
    unmaximize: 'desmaximizar',
    close: 'cerrar',
    restart: 'reiniciar',
    front: 'frente',

    // help
    help: 'ayuda',
    about: 'acerca de',
    checkUpdate: 'comprueba la actualización',
    reportIssue: 'informe de problema',
    homepage: 'página principal',
    sencondInstanceTip: 'solo puede hacer esto en la ventana principal',
    copyFilePath: 'Copiar ruta del archivo'
  },

  // common
  common: {
    history: 'historial',
    bookmarks: 'marcadores',
    bookmarkCategory: 'categoría',
    setting: 'ajustes',
    about: 'acerca de',
    ok: 'ok',
    cancel: 'cancelar',
    expandAll: 'Expandir todos',
    collapseAll: 'Contraer todos',
    restoreSessions: 'restaurar sesiones',
    ignore: 'ignorar',
    pin: 'mantener el panel abierto',
    keyboardShortcuts: 'atajos de teclado',
    delSelected: 'eliminar seleccionado',
    turnOff: 'apagar',
    tasks: 'tareas',
    batchOperation: 'operación por lotes',
    examples: 'ejemplos',
    importFromCSV: 'Importar desde el archivo CSV',
    addToQueue: 'añadir a la cola',
    execute: 'ejecutar',
    finished: 'terminado'
  },

  // control buttons
  control: {
    author: 'autor',
    download: 'descargar',
    bugReport: 'informe de error',
    checkForUpdate: 'buscar actualizaciones',
    homepage: 'página principal',
    notFoundContent: 'sin objeto',
    newSsh: 'nuevo ssh',
    newTerminal: 'nueva terminal',
    dependencies: 'dependencias',
    env: 'env',
    os: 'os',
    userTips: 'consejos para el usuario',
    commandLineUsage: 'Uso de la línea de comandos',
    newBookmark: 'nuevo marcador',
    newWindow: 'nueva instancia'
  },

  // transferHistory
  transferHistory: {
    transferHistory: 'historial de transferencias',
    localPath: 'camino local',
    remotePath: 'camino remoto',
    type: 'tipo',
    startTime: 'hora de inicio',
    finishTime: 'hora de finalización',
    speed: 'velocidad',
    clear: 'limpio',
    fromPath: 'ruta de origen',
    toPath: 'ruta de destino'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: 'el título no puede estar vacío',
    close: 'cerrar',
    closeOtherTabs: 'cerrar otras pestañas',
    closeTabRight: 'cerrar pestañas a la derecha',
    newTab: 'nueva pestaña',
    duplicate: 'duplicar',
    rename: 'renombrar',
    openNewTerm: 'abrir nueva terminal',
    sessions: 'Las sesiones'
  },

  // main warpper
  main: {
    error: 'algo salió mal.'
  },

  // updater check
  updater: {
    noNeed: 'no es necesario actualizar',
    noNeedDesc: 'estás usando la última versión',
    fail: 'falla al verificar la actualización',
    newVersion: 'nueva versión encontrada',
    upgrade: 'mejorar',
    upgrading: 'mejorando',
    skipThisVersion: 'omitir esta version',
    moreChangeLog: 'Más registro de cambios',
    manuallyDownloadFrom: 'descargar manualmente desde'
  },

  // setting
  setting: {
    new: 'new',
    settings: 'ajustes',
    common: 'common',
    hotkeyNotOk: 'la tecla de acceso rápido no puede ser registrada, por favor use otra',
    saved: 'salvado',
    saveLang: 'guardado, reinicie para aplicar cambios',
    restartNow: 'reiniciar ahora',
    hotkeyDesc: 'tecla de acceso directo del sistema (traer la ventana de nuevo al frente)',
    timeoutDesc: 'ssh/sftp tiempo de espera (en milisegundos)',
    scrollBackDesc: 'líneas de retroceso',
    language: 'lenguaje',
    copyWhenSelect: 'copiar texto seleccionado cuando se selecciona',
    rightClickSelectsWord: 'haga clic derecho en seleccionar automáticamente la palabra',
    pasteWhenContextMenu: 'pegar cuando haga clic derecho',
    fontSize: 'tamaño de fuente',
    fontFamily: 'tipografía familiar',
    opacity: 'opacidad',
    global: 'global',
    disableSshHistory: 'deshabilitar el historial de ssh',
    disableTransferHistory: 'deshabilitar el historial de transferencia sftp',
    resetAllToDefault: 'restaurar la configuración a sus valores predeterminados originales',
    terminalBackgroundImage: 'imagen de fondo terminal',
    chooseFile: 'Elija el archivo',
    rendererType: 'tipo de renderizador',
    defaultTerminalType: 'tipo de terminal predeterminado',
    ctrlOrMetaOpenTerminalLink: 'debe contener ctrl o meta (en mac) al hacer clic para abrir el enlace del terminal',
    noTerminalBg: 'sin imagen de fondo',
    saveTerminalLogToFile: 'guardar el registro del terminal en el archivo',
    checkUpdateOnStart: 'comprobar actualización al inicio de la aplicación',
    encrypt: 'cifrar',
    cursorBlink: 'Cursor Blink',
    openAll: 'Abrir todo marcador en esta categoría',
    useSystemTitleBar: 'Usa la barra de título del sistema',
    useSystemTitleBarTip: 'Necesito reiniciar la aplicación para tener efecto, cuando se usa la barra de título del sistema, transparente no funciona',
    onStartBookmarks: 'Bookmarks abiertos en el inicio',
    pleaseSelect: 'por favor seleccione',
    keepaliveIntervalDesc: 'intervalo de keepalive',
    editorTip: 'Comando o ruta del editor',
    cursorStyle: 'Estilo del cursor',
    confirmBeforeExit: 'confirmar antes de salir',
    initDefaultTabOnStart: 'Abra la pestaña predeterminada cuando se inicie la aplicación',
    screenReaderMode: 'Lector de pantalla de soporte en terminal',
    makeItPortable: 'Hazlo portátil',
    dataTransferedTo: 'datos transferidos a',
    autoRefreshWhenSwitchToSftp: 'Actualizar automáticamente cuando cambie a SFTP',
    terminalWordSeparator: 'separador de palabras terminal',
    settingShortcuts: 'atajos',
    closeCurrentTab: 'cierre la pestaña actual',
    prevTab: 'pestaña anterior',
    nextTab: 'Pestaña siguiente',
    pasteSelected: 'Pegar seleccionado',
    showNormalBuffer: 'Mostrar búfer normal',
    customCss: 'CSS personalizado',
    hideSshConfig: 'ocultar la categoría de SSH-config'
  },

  // sftp
  sftp: {
    cancel: 'cancelar',
    skip: 'omitir',
    merge: 'unir',
    overwrite: 'exagerar',
    rename: 'renombrar',
    renameAll: 'renombrar todo',
    mergeDesc: 'fusionar carpetas de conflicto de descanso',
    overwriteDesc: 'sobrescribir archivos de conflicto de descanso',
    mergeAll: 'fusionar todo',
    overwriteAll: 'sobrescribir todo',
    renameDesc: 'renombrar archivos / carpetas',
    folder: 'carpetas',
    file: 'expediente',
    fileConflict: 'conflicto de archivos',
    submit: 'enviar',
    edit: 'editar',
    open: 'abrir',
    permission: 'permiso',
    name: 'nombre',
    mode: 'modo',
    path: 'camino',
    fullPath: 'ruta completa',
    size: 'tamaño',
    accessTime: 'tiempo de acceso',
    modifyTime: 'modificar el tiempo',
    attributes: 'atributos',
    enter: 'entrar',
    deleteAll: 'borrar todo',
    selected: 'seleccionar',
    newFile: 'archivo nuevo',
    newFolder: 'carpeta nueva',
    selectAll: 'seleccionar todo',
    refresh: 'refrescar',
    editPermission: 'permiso de edición',
    info: 'información',
    filesAndFolders: 'archivos/carpetas',
    files: 'farchivos',
    delTip: '¿Estás seguro? esto borrará esto',
    delTip1: 'y todo el archivo / directorio en ellos',
    goParent: 'ir a la carpeta principal',
    hide: 'esconder',
    show: 'mostrar',
    hfd: 'esconder archivos y directorios',
    remote: 'remoto',
    local: 'local',
    fileTransfers: 'transferencias de archivos',
    cancelAll: 'cancelar todo',
    upload: 'subir',
    download: 'descargar',
    resume: 'resumir',
    pause: 'pausar',
    reset: 'reiniciar',
    showInDefaultFileMananger: 'mostrar en el administrador de archivos',
    compressAndDownload: 'comprimir y descargar',
    compressAndUpload: 'comprimir y subir',
    editWithSystemEditor: 'editar con el editor de sistemas',
    gotoFolderInTerminal: 'Acceda a esta carpeta desde la terminal',
    calculate: 'calcular',
    skipAll: 'omitir todo'
  },

  permission: {
    read: 'leer',
    write: 'escribir',
    exec: 'exec',
    owner: 'propietario',
    group: 'grupo',
    other: 'otro'
  },

  // ssh form
  form: {
    password: 'contraseña',
    privateKey: 'llave privada',
    privateKeyDesc: 'cadena de clave privada',
    importFromFile: 'importar desde archivos',
    passphrase: 'frase de contraseña',
    passphraseDesc: 'frase de contraseña para llave privada',
    host: 'host',
    username: 'nombre de usuario',
    port: 'puerto',
    title: 'título',
    saveAndConnect: 'guardar y conectar',
    saveAndCreateNew: 'guardar y crear nuevos',
    save: 'guardar',
    loginScript: 'ejecutar script',
    loginScriptDelay: 'executar atraso do script',
    loginScriptTip: 'ejecutar script después de iniciar sesión',
    connect: 'conectar',
    testConnection: 'conexión de prueba',
    required: 'necesario',
    proxyIp: 'proxy ip',
    proxyPort: 'proxy port',
    proxyType: 'proxy type',
    proxyIpPlaceholder: 'dirección IP del proxy',
    selectProxy: 'seleccionar proxy',
    auth: 'autenticacción',
    proxy: 'proxy',
    use: 'usar',
    encode: 'codificar',
    terminalType: 'tipo de terminal',
    startDirectory: 'directorio de inicio',
    ignoreKeyboardInteractive: 'ignorar el teclado interactivo',
    description: 'descripción',
    connectionHopping: 'salto de conexión',
    loginPassword: 'contraseña de inicio de sesión',
    loginFail: 'error de inicio de sesion',
    notSet: 'no establecido',
    displayRaw: 'Muestra texto en bruto en la terminal',
    supportRegexp: 'Soporta expresiones regulares',
    keywordsHighlight: 'Resaltar palabras clave',
    keyword: 'palabra clave'
  },

  // ssh terminal
  ssh: {
    clear: 'limpiar',
    selectAll: 'seleccionar todo',
    savePassword: 'guardar contraseña',
    search: 'buscar',
    terminal: 'terminal',
    nextMatch: 'próximo',
    prevMatch: 'anterior',
    split: 'dividir',
    fileManager: 'administrador de archivos',
    changeDirection: 'cambiar dirección',
    batchInput: 'entrada por lotes',
    runInAllTerminals: 'correr en todas las terminales',
    matchCase: 'distingue mayúsculas y minúsculas',
    matchWholeWord: 'compare la palabra completa',
    useRegExp: 'Use expresión regular',
    socketCloseTip: 'Conexión terminal perdida',
    sshTunnel: 'túnel ssh',
    remotePort: 'Puerto remoto',
    localPort: 'puerto local',
    localToRemote: 'Reenviar la conexión local al servidor remoto',
    remoteToLocal: 'Reenviar conexión remota al servidor local'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: 'temas terminales',
    export: 'exportar',
    themeName: 'nombre del tema',
    saveAndApply: 'guardar y aplicar',
    apply: 'aplicar',
    default: 'defecto',
    newTheme: 'nuevo tema',
    themeConfig: 'configuración del tema',
    updated: 'actualizado',
    uiThemes: 'Temas de UI'
  },

  // quick commands
  quickCommands: {
    quickCommand: 'comando rápido',
    quickCommands: 'comando rápidos',
    quickCommandName: 'nombre de comando rápido',
    addQuickCommands: 'agregar comandos rápidos',
    newQuickCommand: 'nuevo comando rápido',
    inputOnly: 'solo entrada',
    labels: 'etiquetas'
  },

  // setting sync
  settingSync: {
    settingSync: 'ajuste de sincronización',
    sync: 'sincronizar',
    syncing: 'sincronización',
    syncSettings: 'ajustes de sincronización',
    uploadSettings: 'subir configuraciones',
    downloadSettings: 'configuración de descarga',
    synced: 'sincronizado',
    syncDesc: 'sincronizar marcador / historial / configuración a github secret gist',
    autoSync: 'sincronización automática',
    lastSyncTime: 'última hora de sincronización',
    useExistingGistId: 'utilizar existente',
    autoSyncTip: 'Datos de carga automática (sobrescribir) cuando los datos cambian'
  }
}

export default {
  lang,
  name: 'Español',
  match: 'es',
  flag: '🇪🇸'
}
