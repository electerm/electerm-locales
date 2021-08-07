/**
 * language: Português do Brasil
 */
const lang = {

  // app desc
  app: {
    desc: 'electerm é um cliente terminal/ssh/sftp para (linux, mac, win) baseado em electron/ssh2/node-pty/xterm/antd/subx e muitas outras libs',
    isRunning: 'está rodando',
    press: 'pressione',
    toShow: 'para exibir'
  },

  // app menu
  menu: {
    // mac app
    hide: 'ocultar',
    hideothers: 'ocultar outros',
    unhide: 'exibir',
    quit: 'sair',

    // edit
    edit: 'editar',
    undo: 'desfazer',
    redo: 'refazer',
    cut: 'cortar',
    copy: 'copiar',
    paste: 'colar',
    pasteandmatchstyle: 'colar e combinar estilo',
    del: 'deletar',
    selectall: 'selecionar todos',
    startspeaking: 'começar falar',
    stopspeaking: 'parar de falar',

    // view
    view: 'ver',
    reload: 'recarregar',
    forcereload: 'forçar recarregamento',
    toggledevtools: 'exibir/ocultar dev tools',
    toggleControl: 'exibir/ocultar controle de botões',
    resetzoom: 'resetar zoom',
    zoomin: 'zoom in',
    zoomout: 'zoom out',
    togglefullscreen: 'entrar/sair tela cheia',

    // window
    window: 'janela',
    minimize: 'minimizar',
    maximize: 'maximizar',
    unmaximize: 'desmaximizar',
    close: 'fechar',
    restart: 'restartar',
    front: 'frente',

    // help
    help: 'ajuda',
    about: 'sobre',
    checkUpdate: 'checkar atualizações',
    reportIssue: 'reportar problema',
    homepage: 'homepage'
  },

  // common
  common: {
    history: 'histórico',
    bookmarks: 'favoritos',
    bookmarkCategory: 'categorias',
    setting: 'configurações',
    about: 'sobre',
    ok: 'ok',
    cancel: 'cancelar',
    expandAll: 'Expandir todo',
    collapseAll: 'Recolher todo',
    restoreSessions: 'restaurar sessões',
    ignore: 'ignorar',
    pin: 'mantenha o painel aberto'
  },

  // control buttons
  control: {
    author: 'autor',
    download: 'download',
    bugReport: 'reportar bug',
    checkForUpdate: 'checar por atualizações',
    homepage: 'homepage',
    notFoundContent: 'nehum item',
    newSsh: 'novo ssh',
    newTerminal: 'novo terminal',
    dependencies: 'dependencias',
    env: 'env',
    os: 'os',
    userTips: 'dicas do usuário',
    commandLineUsage: 'Uso de linha de comando'
  },

  // transferHistory
  transferHistory: {
    transferHistory: 'transferir histórico',
    localPath: 'caminho local',
    remotePath: 'caminho remoto',
    type: 'tipo',
    startTime: 'tempo de início',
    finishTime: 'tempo final',
    speed: 'velocidade',
    clear: 'limpar',
    fromPath: 'caminho de origem',
    toPath: 'caminho de Destino'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: 'o título não pode ficar em branco',
    close: 'fechar',
    closeOtherTabs: 'fechar outras tabs',
    closeTabRight: 'fechar tabs à direita',
    newTab: 'nova tab',
    duplicate: 'duplicar',
    rename: 'renomear',
    openNewTerm: 'abrir novo terminal',
    sessions: 'Sessões'
  },

  // main warpper
  main: {
    error: 'Algo deu errado.'
  },

  // updater check
  updater: {
    noNeed: 'não precisa atualizar',
    noNeedDesc: 'você está usando a última versão',
    fail: 'falha ao checar atualizações',
    goGetIt: 'buscar',
    newVersion: 'nova versão encontrada',
    upgrade: 'atualizar',
    upgrading: 'atualizando',
    skipThisVersion: 'pular esta versão'
  },

  // setting
  setting: {
    new: 'novo',
    settings: 'configurações',
    common: 'comum',
    hotkeyNotOk: 'tecla de atalho não pode ser registrada, tente outra.',
    saved: 'salvo',
    saveLang: 'salvo, você precisa reiniciar',
    restartNow: 'reiniciar agora',
    hotkeyDesc: 'teclas de atalho do sistema(traga a janela de volta para frente)',
    timeoutDesc: 'ssh/sftp timeout(em milisegundos)',
    scrollBackDesc: 'linhas de rolagem',
    language: 'língua',
    copyWhenSelect: 'copiar texto selecionado quando selecionar',
    rightClickSelectsWord: 'clique direito  auto selecionar palavra',
    pasteWhenContextMenu: 'colar quando clique direito',
    fontSize: 'tamanho da fonte',
    fontFamily: 'família de fontes',
    opacity: 'opacidade',
    global: 'global',
    disableSshHistory: 'desativar o histórico do ssh',
    disableTransferHistory: 'desativar histórico de transferência do sftp',
    resetAllToDefault: 'restaurar configurações para seus padrões originais',
    terminalBackgroundImage: 'imagem de fundo do terminal',
    chooseFile: 'escolher arquivo',
    rendererType: 'tipo renderizador',
    defaultTerminalType: 'tipo de terminal padrão',
    ctrlOrMetaOpenTerminalLink: 'deve segurar ctrl ou meta (no mac) quando clicar para abrir o link do terminal',
    noTerminalBg: 'nenhuma imagem de fundo',
    saveTerminalLogToFile: 'salvar o log do terminal no arquivo',
    checkUpdateOnStart: 'verifique a atualização no início do aplicativo',
    encrypt: 'criptografar',
    cursorBlink: 'Cursor Piscar',
    openAll: 'D.',
    useSystemTitleBar: 'Use a barra de título do sistema',
    useSystemTitleBarTip: 'Precisa de reinicializar o aplicativo para entrar em vigor, quando usar barra de título do sistema, transparente não funciona',
    onStartBookmarks: 'Abra os marcadores na inicialização',
    pleaseSelect: 'por favor selecione',
    keepaliveIntervalDesc: 'Intervalo Keepalive'
  },

  // sftp
  sftp: {
    cancel: 'cancelar',
    skip: 'avançar',
    merge: 'mesclar',
    overwrite: 'substituir',
    rename: 'renomear',
    renameAll: 'renomear todos',
    mergeDesc: 'Mesclar pastas de conflito de descanso',
    overwriteDesc: 'sobrescrever arquivos de conflito de descanso',
    mergeAll: 'mesclar todos',
    overwriteAll: 'substituir todos',
    renameDesc: 'renomear arquivos/pastas decrescente',
    folder: 'pasta',
    file: 'arquivo',
    fileConflict: 'arquivo conflitante',
    submit: 'enviar',
    edit: 'editar',
    open: 'abrir',
    permission: 'permissão',
    name: 'nome',
    mode: 'modo',
    path: 'caminho',
    fullPath: 'caminho completo',
    size: 'tamnho',
    accessTime: 'tempo de acesso',
    modifyTime: 'tempo da modificação',
    attributes: 'atributos',
    enter: 'entrar',
    deleteAll: 'deletar todos',
    selected: 'selecionado',
    newFile: 'novo arquivo',
    newFolder: 'nova pasta',
    selectAll: 'selecionar todos',
    refresh: 'atualizar',
    editPermission: 'editar permissão',
    info: 'info',
    filesAndFolders: 'arquivos/pastas',
    files: 'arquivos',
    delTip: 'você tem certeza? isso exluirá isso:',
    delTip1: 'e todos os arquivos e diretórios neles',
    goParent: 'ir para pasta parente',
    hide: 'ocultar',
    show: 'mostrar',
    hfd: 'arquivos e diretório ocultos',
    remote: 'remoto',
    local: 'local',
    fileTransfers: 'arquivos transferidos',
    cancelAll: 'cancelar todos',
    upload: 'upload',
    download: 'download',
    resume: 'continuar',
    pause: 'pausar',
    reset: 'restaurar',
    showInDefaultFileMananger: 'mostrar no gerenciador de arquivos',
    compressAndDownload: 'comprimir e download',
    compressAndUpload: 'Comprimir e upload'
  },

  permission: {
    read: 'leitura',
    write: 'escrita',
    exec: 'exec',
    owner: 'dono',
    group: 'grupo',
    other: 'outro'
  },

  // ssh form
  form: {
    password: 'senha',
    privateKey: 'chave privada',
    privateKeyDesc: 'string da chave privada',
    importFromFile: 'importar arquivo',
    passphrase: 'senha',
    passphraseDesc: 'senha da chave privada',
    host: 'host',
    username: 'usuário',
    port: 'porta',
    title: 'título',
    saveAndConnect: 'salvar e conectar',
    saveAndCreateNew: 'salve e crie novo',
    save: 'salvar',
    loginScript: 'rodar script',
    loginScriptDelay: 'run script delay',
    loginScriptTip: 'rodar script após login',
    connect: 'conectar',
    testConnection: 'testar conexão',
    required: 'requerido',
    proxyIp: 'proxy ip',
    proxyPort: 'proxy porta',
    proxyType: 'proxy tipo',
    proxyIpPlaceholder: 'endereço de ip do proxy',
    selectProxy: 'selecione o proxy',
    auth: 'autenticação',
    proxy: 'proxy',
    use: 'usar',
    encode: 'codificar',
    terminalType: 'tipo de terminal',
    startDirectory: 'diretório inicial',
    ignoreKeyboardInteractive: 'ignorar teclado interativo'
  },

  // ssh terminal
  ssh: {
    clear: 'limpar',
    selectAll: 'selecionar tudo',
    savePassword: 'salvar senha',
    search: 'procurar',
    terminal: 'terminal',
    nextMatch: 'próximo ',
    prevMatch: 'anterior',
    split: 'dividir',
    fileManager: 'gerenciador de arquivo',
    changeDirection: 'alterar direção',
    batchInput: 'entrada de lote',
    runInAllTerminals: 'correr em todos os terminais'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: 'temas do terminal',
    export: 'exportar',
    themeName: 'nome do tema',
    saveAndApply: 'salvar e aplicar',
    apply: 'aplicar',
    default: 'padrão',
    newTheme: 'novo tema',
    themeConfig: 'configuração do tema',
    updated: 'Atualizada',
    uiThemes: 'Temas de IU'
  },

  // quick commands
  quickCommands: {
    quickCommand: 'comando rápido',
    quickCommands: 'comandos rápidos',
    quickCommandName: 'nome de comando rápido',
    addQuickCommands: 'adicionar comandos rápidos',
    newQuickCommand: 'novo comando rápido',
    inputOnly: 'somente entrada'
  },

  // setting sync
  settingSync: {
    settingSync: 'ajustando a sincronização',
    sync: 'sincronizar',
    syncing: 'sincronização',
    syncSettings: 'configurações de sincronização',
    uploadSettings: 'configurações de upload',
    downloadSettings: 'configurações de download',
    synced: 'sincronizado',
    syncDesc: 'sincronizar marcador / history / setting para github secret gist',
    autoSync: 'sincronização automática',
    lastSyncTime: 'hora da última sincronização',
    useExistingGistId: 'usar existente'
  }
}

module.exports = {
  lang,
  name: 'Português do Brasil',
  match: /pt/,
  flag: '🇧🇷'
}
