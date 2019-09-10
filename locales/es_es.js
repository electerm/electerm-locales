/**
 * language: Español
 * By Federico Pereira <fpereira@cnsoluciones.com>
 */
const lang = {

  // app desc
  app: {
    desc: 'electerm es una terminal/ssh/sftp client(linux, mac, win) basada en electron/ssh2/node-pty/xterm/antd/subx y otras librerías',
    isRunning: 'está corriendo',
    press: 'presione',
    toShow: 'mostrar'
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
    homepage: 'página principal'
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
    restoreSessions: 'restaurar sesiones desde apagado incorrecto?'
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
    userTips: 'consejos para el usuario'
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
    clear: 'limpio'
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
    goGetIt: 've a buscarlo!',
    newVersion: 'nueva versión encontrada',
    upgrade: 'mejorar',
    upgrading: 'mejorando'
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
    rendererType: 'tipo de renderizador'
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
    reset: 'reiniciar'
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
    save: 'guardar',
    loginScript: 'ejecutar script',
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
    encode: 'codificar'
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
    changeDirection: 'cambiar dirección'
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
    updated: 'actualizado'
  },

  // quick commands
  quickCommands: {
    quickCommand: 'comando rápido',
    quickCommands: 'comando rápidos',
    quickCommandName: 'nombre de comando rápido',
    addQuickCommands: 'agregar comandos rápidos',
    newQuickCommand: 'nuevo comando rápido',
    inputOnly: 'solo entrada'
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
    lastSyncTime: 'última hora de sincronización'
  }
}

module.exports = {
  lang,
  name: 'Español',
  match: /es/,
  flag: '🇪🇸'
}
