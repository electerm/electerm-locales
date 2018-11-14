/**
 * language: Português do Brasil
 */
const lang = {
  
  //app desc
  app: {
    desc: 'electerm é um cliente terminal/ssh/sftp para (linux, mac, win) baseado em electron/node-pty/xterm/antd e muitas outras libs, funciona como uma combinação de guake e xshell.',
    isRunning: 'está rodando',
    press: 'pressione',
    toShow: 'para exibir'
  },
  
  //app menu
  menu: {
    //mac app
    hide: 'ocultar',
    hideothers: 'ocultar outros',
    unhide: 'exibir',
    quit: 'sair',
    
    //edit
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
    
    //view
    view: 'ver',
    reload: 'recarregar',
    forcereload: 'forçar recarregamento',
    toggledevtools: 'exibir/ocultar dev tools',
    toggleControl: 'exibir/ocultar controle de botões',
    resetzoom: 'resetar zoom',
    zoomin: 'zoom in',
    zoomout: 'zoom out',
    togglefullscreen: 'entrar/sair tela cheia',
    
    //window
    window: 'janela',
    minimize: 'minimizar',
    maximize: 'maximizar',
    unmaximize: 'desmaximizar',
    close: 'fechar',
    restart: 'restartar',
    front: 'frente',
    
    //help
    help: 'ajuda',
    about: 'sobre',
    checkUpdate: 'checkar atualizações',
    reportIssue: 'reportar problema',
    homepage: 'homepage'
  },
  
  //common
  common: {
    history: 'histórico',
    bookmarks: 'favoritos',
    bookmarkCategory: 'categorias',
    setting: 'configurações',
    about: 'sobre',
    ok: 'ok',
    cancel: 'cancelar',
    restoreSessions: 'Restaurar sesiones de incorrecto shutdown?'
  },
  
  //control buttons
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
    userTips: 'dicas do usuário'
  },
  
  //transferHistory
  transferHistory: {
    transferHistory: 'transferir histórico',
    localPath: 'caminho local',
    remotePath: 'caminho remoto',
    type: 'tipo',
    startTime: 'tempo de início',
    finishTime: 'tempo final',
    speed: 'velocidade',
    clear: 'limpar'
  },
  
  //ssh tabs
  tabs: {
    titleEmptyWarn: 'o título não pode ficar em branco',
    close: 'fechar',
    closeOtherTabs: 'fechar outras tabs',
    closeTabRight: 'fechar tabs à direita',
    newTab: 'nova tab',
    duplicate: 'duplicar',
    rename: 'renomear',
    openNewTerm: 'abrir novo terminal'
  },
  
  //main warpper
  main: {
    error: 'Algo deu errado.'
  },
  
  //updater check
  updater: {
    noNeed: 'não precisa atualizar',
    noNeedDesc: 'você está usando a última versão',
    fail: 'falha ao checar atualizações',
    goGetIt: 'buscar',
    newVersion: 'nova versão encontrada'
  },
  
  //setting
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
    resetAllToDefault: 'restaurar configurações para seus padrões originais'
  },
  
  //sftp
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
    reset: 'restaurar'
  },
  
  permission: {
    read: 'leitura',
    write: 'escrita',
    exec: 'exec',
    owner: 'dono',
    group: 'grupo',
    other: 'outro'
  },
  
  //ssh form
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
    save: 'salvar',
    loginScript: 'rodar script',
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
    use: 'usar'
  },
  
  //ssh terminal
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
    changeDirection: 'alterar direção'
  },
  
  //user tips
  userTips: [
    '<b>clique duplo</b> uma guia ssh duplicará uma mesma guia e inserirá o mesmo caminho da guia original (suporte limitado)',
    '<b>clique duplo</b> área em branco da barra de abas também abrirá um novo terminal ssh',
    '<b>botão direito</b> em uma aba SHH você pode abrir o menu de contexto, no menu de contexto existe <b>fechar outras tabs</b>, <b>feche as tabs a direita</b>, e outras funções',
    'por padrão, <b>Ctrl + 2</b> vai trazer a janela de emergência para frente, tecla de atalho pode ser definido no menu de <b>configurações</b> ',
    'sftp copiar e colar funciona em local e remoto'
  ],
  
  //features
  features: [
    'tabalhe com o terminal ou cliente ssh/sftp (similar ao xshell)',
    'tecla de atalho para trazer a janela de volta para frente (simliar para guake, por padrão é ctrl + 2)',
    'suporte a múltiplas plataformas(linux, mac, windows)',
    'suporte a múltiplas linguagens(en, cn, pt-br only for now)'
  ],
  
  featuresName: 'funcionalidades',
  
  //terminal themes
  terminalThemes: {
    terminalThemes: 'temas do terminal',
    export: 'exportar',
    themeName: 'nome do tema',
    saveAndApply: 'salvar e aplicar',
    apply: 'aplicar',
    default: 'padrão',
    newTheme: 'novo tema',
    themeConfig: 'configuração do tema',
    updated: 'Atualizada'
  }
}

module.exports = {
  lang,
  name: 'Português do Brasil'
}

