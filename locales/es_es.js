/**
 * language: Español
 * By Federico Pereira <fpereira@cnsoluciones.com>
 */
const lang = {

  //app desc
  app: {
    desc: 'electerm es una terminal/ssh/sftp client(linux, mac, win) basada en electron/ssh2/node-pty/xterm/antd y otras librerías',
    isRunning: 'está corriendo',
    press: 'presione',
    toShow: 'mostrar'
  },

  //app menu
  menu: {
    //mac app
    hide: 'esconder',
    hideothers: 'esconder otros',
    unhide: 'mostrar',
    quit: 'salir',

    //edit
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

    //view
    view: 'ver',
    reload: 'recargar',
    forcereload: 'forzar recarga',
    toggledevtools: 'alternar herramientas de desarrollo',
    toggleControl: 'botones de control de alternar',
    resetzoom: 'reajustar el zoom',
    zoomin: 'acercarse',
    zoomout: 'disminuir el zoom',
    togglefullscreen: 'alternar pantalla completa',

    //window
    window: 'window',
    minimize: 'minimimizar',
    maximize: 'maximizar',
    unmaximize: 'desmaximizar',
    close: 'cerrar',
    restart: 'reiniciar',
    front: 'frente',

    //help
    help: 'ayuda',
    about: 'acerca de',
    checkUpdate: 'comprueba la actualización',
    reportIssue: 'informe de problema',
    homepage: 'página principal'
  },

  //common
  common: {
    history: 'historyial',
    bookmarks: 'marcadores',
    bookmarkCategory: 'categoría',
    setting: 'ajuste',
    about: 'acerca de',
    ok: 'ok',
    cancel: 'cancelar',
    restoreSessions: 'restaurar sesiones desde apagado incorrecto?'
  },

  //control buttons
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

  //transferHistory
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

  //ssh tabs
  tabs: {
    titleEmptyWarn: 'el título no puede estar vacío',
    close: 'cerrar',
    closeOtherTabs: 'cerrar otras pestañas',
    closeTabRight: 'cerrar pestañas a la derecha',
    newTab: 'nueva pestaña',
    duplicate: 'duplicar',
    rename: 'renombrar',
    openNewTerm: 'abrir nueva terminal'
  },

  //main warpper
  main: {
    error: 'algo salió mal.'
  },

  //updater check
  updater: {
    noNeed: 'no es necesario actualizar',
    noNeedDesc: 'estás usando la última versión',
    fail: 'falla al verificar la actualización',
    goGetIt: 've a buscarlo!',
    newVersion: 'nueva versión encontrada',
    upgrade: 'mejorar',
    upgrading: 'mejorando'
  },

  //setting
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
    resetAllToDefault: 'restaurar la configuración a sus valores predeterminados originales'
  },

  //sftp
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

  //ssh form
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
    use: 'usar'
  },

  //ssh terminal
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

  //user tips
  userTips: [
    '<b>double click</b> una pestaña ssh duplicará una misma pestaña, e ingresará a la misma ruta que la pestaña original (soporte limitado)',
    '<b>double click</b> área en blanco de la barra de pestañas abrirá un nuevo terminal ssh también',
    '<b>right click</b> Una pestaña ssh puede abrir el menú contextual, desde el menú contextual hay<b>cerrar otras pestañas</b>, <b>cerrar pestañas a la derecha</b>, y otras funciones',
    'por default, <b>Ctrl + 2</b> traerá la ventana del electerm al frente, la tecla de acceso rápido se puede configurar en<b>setting</b> menu',
    'sftp copiar y pegar funciona en local y remoto'
  ],

  //features
  features: [
    'funciona como un terminal o cliente ssh / sftp (similar a xshell)',
    'tecla de acceso rápido para traer la ventana al frente (similar a guake, el valor predeterminado es ctrl + 2)',
    'soporte multiplataforma (linux, mac, windows)',
    'soporte multi-idioma (en, cn solo por ahora)'
  ],

  featuresName: 'caracteristicas',

  //terminal themes
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
  }
}

module.exports = {
  lang,
  name: 'Español',
  match: /es/
}
