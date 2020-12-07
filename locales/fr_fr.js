/**
 * language: Français
 */
const lang = {

  // app desc
  app: {
    desc: 'electerm est un terminal ssh/sftp multiplateforme (linux, mac, win) basé sur electron/ssh2/node-pty/xterm/antd/subx et d\'autres librairies',
    isRunning: 'est démarré',
    press: 'Appuyez',
    toShow: 'Pour ouvrir'
  },

  // app menu
  menu: {
    // mac app
    hide: 'Masquer',
    hideothers: 'Masquer les autres',
    unhide: 'Afficher',
    quit: 'Quitter',

    // edit
    edit: 'Editer',
    undo: 'Annuler',
    redo: 'Rétablir',
    cut: 'Couper',
    copy: 'Copier',
    paste: 'Coller',
    pasteandmatchstyle: 'Coller avec le style',
    del: 'Supprimer',
    selectall: 'Sélectionner tout',
    startspeaking: 'Démarrer la conversation',
    stopspeaking: 'Arrêter la conversation',

    // view
    view: 'Vue',
    reload: 'Rafraîchir',
    forcereload: 'Forcer le rafraîchissement',
    toggledevtools: 'Afficher la console',
    toggleControl: 'Afficher les boutons de contrôle',
    resetzoom: 'Réinitialiser le zoom',
    zoomin: 'Zoom avant',
    zoomout: 'Zoom arrière',
    togglefullscreen: ' Plein écran',

    // window
    window: 'Fenêtre',
    minimize: 'Minimiser',
    maximize: 'Maximiser',
    unmaximize: 'Réduire',
    close: 'Fermer',
    restart: 'Redémarrer',
    front: 'front',

    // help
    help: 'Aide',
    about: 'A propos',
    checkUpdate: 'Vérifier les mises à jour',
    reportIssue: 'Reporter une anomalie',
    homepage: 'Accueil'
  },

  // common
  common: {
    history: 'Historique',
    bookmarks: 'Favoris',
    bookmarkCategory: 'Catégorie',
    setting: 'Paramètres',
    about: 'A propos',
    ok: 'Ok',
    cancel: 'Annuler',
    expandAll: 'Déplier tout',
    collapseAll: 'Réduire tout',
    restoreSessions: 'restaurer des sessions',
    ignore: 'ignorer'
  },

  // control buttons
  control: {
    author: 'Auteur',
    download: 'Télécharger',
    bugReport: 'Rapport d\'erreur',
    checkForUpdate: 'Vérifier les mises à jour',
    homepage: 'Page d\'accueil',
    notFoundContent: 'Aucun élément',
    newSsh: 'Nouvelle connexion ssh',
    newTerminal: 'Nouveau terminal',
    dependencies: 'Dépendances',
    env: 'Environnement',
    os: 'Système',
    userTips: 'user tips'
  },

  // transferHistory
  transferHistory: {
    transferHistory: 'Historique des transferts',
    localPath: 'Chemin local',
    remotePath: 'Chemin distant',
    type: 'Type',
    startTime: 'Démarré le',
    finishTime: 'Terminé le',
    speed: 'Vitesse',
    clear: 'Vider',
    fromPath: 'chemin source',
    toPath: 'chemin cible'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: 'Le titre est requis',
    close: 'Fermer',
    closeOtherTabs: 'Fermer les autres onglets',
    closeTabRight: 'Fermer les onglets à droite',
    newTab: 'Nouvel onglet',
    duplicate: 'Dupliquer',
    rename: 'Renommer',
    openNewTerm: 'Nouveau terminal SSH',
    sessions: 'sessions'
  },

  // main warpper
  main: {
    error: 'Une erreur a été rencontrée.'
  },

  // updater check
  updater: {
    noNeed: 'Aucune mise à jour disponible',
    noNeedDesc: 'Vous utilisez la dernière version disponible',
    fail: 'Erreur de vérification de mise à jour',
    goGetIt: 'Mise à jour disponible !',
    newVersion: 'Nouvelle version disponible',
    upgrade: 'Mettre à jour',
    upgrading: 'Mise à jour en cours',
    skipThisVersion: 'Ignorer cette version'
  },

  // setting
  setting: {
    new: 'Nouveau',
    settings: 'Paramètres',
    common: 'Général',
    hotkeyNotOk: 'Le raccourci ne peut pas être utilisé, veuillez en choisir un autre',
    saved: 'Enregistré',
    saveLang: 'Enregistré, redémarrez l\'application pour prendre en compte les changements',
    restartNow: 'Redémarrer maintenant',
    hotkeyDesc: 'Raccourci pour afficher l\'application',
    timeoutDesc: 'Délai d\'attente ssh/sftp (en millisecondes)',
    scrollBackDesc: 'Lignes de défilement',
    language: 'Langue',
    copyWhenSelect: 'Copier dans le presse-papier lors de la sélection',
    rightClickSelectsWord: 'Clic droit sélectionne autmatiquement le mot',
    pasteWhenContextMenu: 'Coller lors du clic droit',
    fontSize: 'Taille de la police',
    fontFamily: 'Police',
    opacity: 'Opacité',
    global: 'Global',
    disableSshHistory: 'Désactiver l\'historique SSH',
    disableTransferHistory: 'Désactiver l\'historique de transfert sftp',
    resetAllToDefault: 'Restaurer les paramères par défaut',
    terminalBackgroundImage: 'Image de fond du terminal',
    chooseFile: 'Sélectionner un fichier',
    rendererType: 'Type de rendu',
    defaultTerminalType: 'Type de terminal par défaut',
    ctrlOrMetaOpenTerminalLink: 'Doit maintenir la touche ctrl ou meta (sur mac) enfoncée pour ouvrir les liens dans le terminal',
    noTerminalBg: 'pas d\'image d\'arrière-plan',
    saveTerminalLogToFile: 'enregistrer le journal du terminal dans un fichier',
    checkUpdateOnStart: 'vérifier la mise à jour au démarrage de l\'application',
    encrypt: 'Crypter'
  },

  // sftp
  sftp: {
    cancel: 'Annuler',
    skip: 'Ignorer',
    merge: 'Fusionner',
    overwrite: 'Ecraser',
    rename: 'Renommer',
    renameAll: 'Tout renommer',
    mergeDesc: 'Fusionner les dossiers restants',
    overwriteDesc: 'Ecraser les fichiers restants',
    mergeAll: 'Tout fusionner',
    overwriteAll: 'Tout écraser',
    renameDesc: 'Tenommer les fichiers/dossiers restants',
    folder: 'Dossier',
    file: 'Fichier',
    fileConflict: 'Conflit de fichier',
    submit: 'Valider',
    edit: 'Editer',
    open: 'Ouvrir',
    permission: 'Permission',
    name: 'Nom',
    mode: 'Mode',
    path: 'Chemin',
    fullPath: 'Chemin complet',
    size: 'Taille',
    accessTime: 'Dernier accès',
    modifyTime: 'Dernière modification',
    attributes: 'Attributs',
    enter: 'Entrée',
    deleteAll: 'Tout supprimer',
    selected: 'Sélectionnés',
    newFile: 'Nouveau fichier',
    newFolder: 'Nouveau dossier',
    selectAll: 'Tout sélectionner',
    refresh: 'Actualiser',
    editPermission: 'Editer les permissions',
    info: 'Informations',
    filesAndFolders: 'Fichiers/Dossiers',
    files: 'Fichiers',
    delTip: 'Etes-vous sûr ? Ceci supprimera',
    delTip1: 'tous les fichiers et dossiers',
    goParent: 'Aller au dossier parent',
    hide: 'Masquer',
    show: 'Afficher',
    hfd: 'Fichiers et dossiers cachés',
    remote: 'Distant',
    local: 'Local',
    fileTransfers: 'Transfert de fichiers',
    cancelAll: 'Tout annuler',
    upload: 'Envoyer',
    download: 'Télécharger',
    resume: 'Reprendre',
    pause: 'Pause',
    reset: 'Réinitialiser',
    showInDefaultFileMananger: 'afficher dans le gestionnaire de fichiers'
  },

  permission: {
    read: 'Lecture',
    write: 'Ecriture',
    exec: 'Exécution',
    owner: 'Propriétaire',
    group: 'Groupe',
    other: 'Autre'
  },

  // ssh form
  form: {
    password: 'Mot de passe',
    privateKey: 'Clé privée',
    privateKeyDesc: 'Contenu de la clé privée',
    importFromFile: 'Importer un fichier',
    passphrase: 'Passphrase',
    passphraseDesc: 'Passphrase de la clé privée',
    host: 'Hôte',
    username: 'Identifiant',
    port: 'Port',
    title: 'Titre',
    saveAndConnect: 'Enregistrer et se connecter',
    saveAndCreateNew: 'Enregistrer et créer un nouveau',
    save: 'Enregistrer',
    loginScript: 'Script à la connexion',
    loginScriptDelay: 'Délai avant exécution du script',
    loginScriptTip: 'Exécute une script à la connexion',
    connect: 'Connexion',
    testConnection: 'Tester la connexion',
    required: 'Requis',
    proxyIp: 'IP du proxy',
    proxyPort: 'Port du proxy',
    proxyType: 'Type de proxy',
    proxyIpPlaceholder: 'Adresse IP du proxy',
    selectProxy: 'Sélectionner le proxy',
    auth: 'auth',
    proxy: 'proxy',
    use: 'use',
    encode: 'encode',
    terminalType: 'Type de terminal',
    startDirectory: 'répertoire de démarrage',
    ignoreKeyboardInteractive: 'ignorer le clavier interactif'
  },

  // ssh terminal
  ssh: {
    clear: 'Effacer',
    selectAll: 'Tout sélectionner',
    savePassword: 'Mémoriser le mot de passe',
    search: 'Rechercher',
    terminal: 'Terminal SSH',
    nextMatch: 'Suivant',
    prevMatch: 'Précédent',
    split: 'Séparer',
    fileManager: 'Gestionnaire de fichiers SFTP',
    changeDirection: 'Changer d\'orientation',
    batchInput: 'entrée par lots',
    runInAllTerminals: 'courir dans tous les terminaux'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: 'Thèmes de terminal',
    export: 'Exporter',
    themeName: 'Nom du thème',
    saveAndApply: 'Enregistrer et appliquer',
    apply: 'Appliquer',
    default: 'Default',
    newTheme: 'Nouveau thème',
    themeConfig: 'Configuration du thème',
    updated: 'Mis à jour',
    uiThemes: 'Thèmes de l\'interface utilisateur'
  },

  // quick commands
  quickCommands: {
    quickCommand: 'Commande',
    quickCommands: 'Raccourcis (commandes)',
    quickCommandName: 'Nom du raccourci',
    addQuickCommands: 'Ajouter un raccourci',
    newQuickCommand: 'Nouveau raccourci',
    inputOnly: 'Saisie uniquement (ne termine pas par la touche entrée)'
  },

  // setting sync
  settingSync: {
    settingSync: 'Synchronisation des paramètres',
    sync: 'Synchronier',
    syncing: 'Synchronisation en cours',
    syncSettings: 'Synchroniser les paramètres',
    uploadSettings: 'Envoyer les paramètres',
    downloadSettings: 'Télécharger les paramètres',
    synced: 'Synchronisé',
    syncDesc: 'Synchroniser les favoris / historique / paramètres dans gist',
    autoSync: 'Synchronisation automatique',
    lastSyncTime: 'Dernière synchronisation',
    useExistingGistId: 'utiliser existant'
  }
}

module.exports = {
  lang,
  name: 'Français',
  match: /fr/,
  flag: '🇫🇷'
}
