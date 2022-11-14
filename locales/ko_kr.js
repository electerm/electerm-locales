/**
 * language: 한국어
 */
const lang = {

  // app desc
  app: {
    desc: 'electerm은 electron/ssh2/node-pty/xterm/antd/useProxy와 다른 라이브러리를 기반으로 한 터미널/SSH/SFTP 클라이언트(리눅스, 맥, 윈도우)입니다.',
    isRunning: '이 실행되고 있습니다.',
    press: '누르기',
    toShow: '보기'
  },

  // app menu
  menu: {
    // mac app
    hide: '숨기기',
    hideothers: '기타 숨기기',
    unhide: '보이기',
    quit: '종료',

    // edit
    edit: '편집',
    undo: '되돌리기',
    redo: '다시실행',
    cut: '잘라내기',
    copy: '복사',
    paste: '붙여넣기',
    pasteandmatchstyle: '스타일에 맞게 붙여넣기',
    del: '삭제',
    selectall: '전체 선택',
    startspeaking: '말하기 시작',
    stopspeaking: '말하기 정지',

    // view
    view: '보기',
    reload: '새로고침',
    forcereload: '강제 새로고침',
    toggledevtools: '개발자 도구 전환',
    toggleControl: '컨트롤 버튼 전환',
    resetzoom: '기본 배율',
    zoomin: '확대',
    zoomout: '축소',
    togglefullscreen: '전체화면 전환',

    // window
    window: '창',
    minimize: '최소화',
    maximize: '최대화',
    unmaximize: '최소화',
    close: '닫기',
    restart: '다시 시작',
    front: '앞으로',

    // help
    help: '도움말',
    about: '정보',
    checkUpdate: '업데이트 확인',
    reportIssue: '문제 보고',
    homepage: '홈페이지',
    sencondInstanceTip: '메인 창에서만 실행할 수 있습니다.'
  },

  // common
  common: {
    history: '기록',
    bookmarks: '북마크',
    bookmarkCategory: '카테고리',
    setting: '설정',
    about: '정보',
    ok: '확인',
    cancel: '취소',
    expandAll: '모두 펼치기',
    collapseAll: '모두 접기',
    restoreSessions: '세션 복원',
    ignore: '무시',
    pin: '패널 열기 유지',
    keyboardShortcuts: '키보드 단축키'
  },

  // control buttons
  control: {
    author: '저자',
    download: '다운로드',
    bugReport: '버그 리포트',
    checkForUpdate: '업데이트 확인',
    homepage: '홈페이지',
    notFoundContent: '항목 없음',
    newSsh: '새 SSH',
    newTerminal: '새 터미널',
    dependencies: '종속성',
    env: '환경',
    os: '운영체제',
    userTips: '사용자 팁',
    commandLineUsage: '커맨드 라인 사용',
    newBookmark: '새 북마크',
    newWindow: '새 창'
  },

  // transferHistory
  transferHistory: {
    transferHistory: '전송 기록',
    localPath: '로컬 경로',
    remotePath: '원격 경로',
    type: '종류',
    startTime: '시작 시간',
    finishTime: '종료 시간',
    speed: '속도',
    clear: '지우기',
    fromPath: '원본 경로',
    toPath: '대상 경로'
  },

  // ssh tabs
  tabs: {
    titleEmptyWarn: '제목은 비어있을 수 없습니다.',
    close: '닫기',
    closeOtherTabs: '다른 탭 닫기',
    closeTabRight: '우측 탭 닫기',
    newTab: '새 탭',
    duplicate: '복제',
    rename: '이름 바꾸기',
    openNewTerm: '새 터미널 열기',
    sessions: '세션'
  },

  // main warpper
  main: {
    error: '알 수 없는 문제가 발생했습니다.'
  },

  // updater check
  updater: {
    noNeed: '업데이트 할 필요 없음',
    noNeedDesc: '현재 최신 릴리스를 사용하고 있습니다.',
    fail: '업데이트 체크 실패',
    goGetIt: '받겠습니다!',
    newVersion: '새 버전이 감지됨',
    upgrade: '업그레이드',
    upgrading: '업그레이드중',
    skipThisVersion: '이 버전 건너뛰기',
    moreChangeLog: '더 많은 변경사항'
  },

  // setting
  setting: {
    new: '새로 만들기',
    settings: '설정',
    common: '일반',
    hotkeyNotOk: '이 단축키는 사용할 수 없습니다. 다른 키를 사용해주세요.',
    saved: '저장됨',
    saveLang: '저장됨, 재시작 시 적용됩니다.',
    restartNow: '지금 재시작',
    hotkeyDesc: '시스템 단축키(창을 앞으로 모두 가져오기)',
    timeoutDesc: 'SSH/SFTP 타임아웃(밀리초)',
    scrollBackDesc: '스크롤 버퍼 라인 수',
    language: '언어',
    copyWhenSelect: '선택한 텍스트를 자동으로 복사',
    rightClickSelectsWord: '마우스 오른쪽 버튼 클릭으로 단어 자동 선택',
    pasteWhenContextMenu: '마우스 오른쪽 버튼 클릭 시 붙여넣기',
    fontSize: '글꼴 크기',
    fontFamily: '글꼴',
    opacity: '투명도',
    global: '전역',
    disableSshHistory: 'SSH 히스토리 비활성화',
    disableTransferHistory: 'SFTP 전송 히스토리 비활성화',
    resetAllToDefault: '기본값으로 모든 설정값 되돌리기',
    terminalBackgroundImage: '터미널 배경 이미지',
    chooseFile: '파일 선택',
    rendererType: '렌더러 종류',
    defaultTerminalType: '기본 터미널 종류',
    ctrlOrMetaOpenTerminalLink: '터미널 링크를 열 때 Ctrl 또는 Meta(macOS) 키를 누르면서 클릭해야 합니다.',
    noTerminalBg: '배경 이미지 없음',
    saveTerminalLogToFile: '터미널 로그를 파일로 저장',
    checkUpdateOnStart: '앱을 시작할 때 업데이트 체크',
    encrypt: '암호화',
    cursorBlink: '커서 깜박임',
    openAll: '이 카테고리의 모든 북마크 열기',
    useSystemTitleBar: '시스템 제목 표시줄 사용',
    useSystemTitleBarTip: '앱을 재시작해야 적용됩니다. 시스템 제목 표시줄을 사용할 경우, 투명화는 동작하지 않습니다.',
    onStartBookmarks: '시작 시 북마크 열기',
    pleaseSelect: '선택해주세요.',
    keepaliveIntervalDesc: 'KeepAlive 주기',
    editorTip: '에디터의 커맨드 및 경로',
    cursorStyle: '커서 모양',
    confirmBeforeExit: '종료하기 전에 확인',
    initDefaultTabOnStart: '앱을 시작할 때 기본 탭 열기'
  },

  // sftp
  sftp: {
    cancel: '취소',
    skip: '건너뛰기',
    merge: '병합하기',
    overwrite: '덮어쓰기',
    rename: '이름 바꾸기',
    renameAll: '모두 이름 바꾸기',
    mergeDesc: '남아있는 충돌 폴더를 병합하기',
    overwriteDesc: '남아있는 충돌 파일을 덮어쓰기',
    mergeAll: '모두 병합',
    overwriteAll: '모두 덮어쓰기',
    renameDesc: '남은 파일/폴더 이름 바꾸기',
    folder: '폴더',
    file: '파일',
    fileConflict: '파일 충돌',
    submit: '제출',
    edit: '편집',
    open: '열기',
    permission: '권한',
    name: '이름',
    mode: '모드',
    path: '경로',
    fullPath: '전체 경로',
    size: '크기',
    accessTime: '액세스한 날짜',
    modifyTime: '수정된 날짜',
    attributes: '속성',
    enter: '입력',
    deleteAll: '전체 삭제',
    selected: '선택됨',
    newFile: '새 파일',
    newFolder: '새 폴더',
    selectAll: '전체 선택',
    refresh: '새로고침',
    editPermission: '권한 편집',
    info: '정보',
    filesAndFolders: '파일/폴더',
    files: '파일',
    delTip: '확실합니까? 이 항목을 삭제합니다.',
    delTip1: '그리고 모든 파일/폴더도 포함됩니다.',
    goParent: '상위 폴더로 이동',
    hide: '숨기기',
    show: '보기',
    hfd: '숨김 파일 및 폴더',
    remote: '원격',
    local: '로컬',
    fileTransfers: '파일 전송',
    cancelAll: '모두 취소',
    upload: '업로드',
    download: '다운로드',
    resume: '재개',
    pause: '일시정지',
    reset: '초기화',
    showInDefaultFileMananger: '파일 관리자에서 보기',
    compressAndDownload: '압축 및 다운로드',
    compressAndUpload: '압축 및 업로드',
    editWithSystemEditor: '시스템 편집기에서 편집'
  },

  permission: {
    read: '읽기',
    write: '쓰기',
    exec: '실행',
    owner: '소유자',
    group: '그룹',
    other: '다른 사용자'
  },

  // ssh form
  form: {
    password: '암호',
    privateKey: '개인 키',
    privateKeyDesc: '개인 키 문자열',
    importFromFile: '파일에서 가져오기',
    passphrase: '암호',
    passphraseDesc: '개인 키용 암호',
    host: '호스트',
    username: '사용자명',
    port: '포트',
    title: '제목',
    saveAndConnect: '저장하고 연결하기',
    saveAndCreateNew: '저장하고 새로 만들기',
    save: '저장',
    loginScript: '스크립트 실행',
    loginScriptDelay: '실행 스크립트 지연시간',
    loginScriptTip: '로그인 이후 실행 스크립트',
    connect: '연결',
    testConnection: '테스트 연결',
    required: '필수',
    proxyIp: '프록시 IP',
    proxyPort: '프록시 포트',
    proxyType: '프록시 종류',
    proxyIpPlaceholder: '프록시 IP 주소',
    selectProxy: '프록시 선택',
    auth: '인증',
    proxy: '프록시',
    use: '사용',
    encode: '인코딩',
    terminalType: '터미널 종류',
    startDirectory: '시작 폴더',
    ignoreKeyboardInteractive: '키보드 인터렉티브 무시',
    description: '설명'
  },

  // ssh terminal
  ssh: {
    clear: '지우기',
    selectAll: '전체 선택',
    savePassword: '암호 저장',
    search: '검색',
    terminal: '터미널',
    nextMatch: '다음 검색',
    prevMatch: '이전 검색',
    split: '분리',
    fileManager: '파일 관리자',
    changeDirection: '방향 바꾸기',
    batchInput: '배치 입력',
    runInAllTerminals: '모든 터미널에서 실행',
    matchCase: '대/소문자 구분',
    matchWholeWord: '모든 단어 일치',
    useRegExp: '정규표현식 사용',
    socketCloseTip: '터미널 연결 끊김'
  },

  // terminal themes
  terminalThemes: {
    terminalThemes: '터미널 테마',
    export: '내보내기',
    themeName: '테마 이름',
    saveAndApply: '저장 및 적용',
    apply: '적용',
    default: '기본',
    newTheme: '새 테마',
    themeConfig: '테마 설정',
    updated: '수정됨',
    uiThemes: '인터페이스 테마'
  },

  // quick commands
  quickCommands: {
    quickCommand: '빠른 명령',
    quickCommands: '빠른 명령',
    quickCommandName: '빠른 명령 이름',
    addQuickCommands: '빠른 명령 추가',
    newQuickCommand: '새 빠른 명령',
    inputOnly: '입력만 가능',
    labels: '라벨'
  },

  // setting sync
  settingSync: {
    settingSync: '설정 동기화',
    sync: '동기화',
    syncing: '동기화중',
    syncSettings: '동기화 설정',
    uploadSettings: '업로드 설정',
    downloadSettings: '다운로드 설정',
    synced: '동기화됨',
    syncDesc: '북마크 / 기록 / GitHub 비공개 Gist 설정을 동기화',
    autoSync: '자동 동기화',
    lastSyncTime: '마지막 동기화 시간',
    useExistingGistId: '기존으로 사용'
  }
}

export default {
  lang,
  name: '한국어',
  match: 'ko|ko(-|_)kr',
  flag: '🇰🇷'
}
