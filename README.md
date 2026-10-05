# 작룡투 PWA

폴더 전체를 HTTPS 주소로 올리면 휴대폰 홈 화면에 앱처럼 설치할 수 있습니다.

- index.html: 게임 본체
- manifest.webmanifest: 앱 이름, 아이콘, 전체 화면 실행 설정
- sw.js: 오프라인 실행용 서비스 워커
- icons/: 192, 512, 마스커블 아이콘
- assets/: 말, 보드, 잡은 말 영역 그림(PNG)과 sprites.json. 그림 교체 방법은 assets/README.md 를 보세요.

## 올리는 곳 예시
GitHub Pages, Netlify, Cloudflare Pages처럼 정적 파일을 HTTPS로 제공하는 곳이면 됩니다.

## 설치 방법
- 안드로이드 Chrome: 메뉴에서 "홈 화면에 추가" 또는 "앱 설치"
- 아이폰 Safari: 공유 버튼에서 "홈 화면에 추가"

## 참고
- file:// 로 직접 열면 서비스 워커와 설치가 동작하지 않습니다. HTTPS 또는 localhost가 필요합니다.
- 파일을 고친 뒤에는 sw.js의 VERSION 값을 올려야 기존 사용자에게 새 버전이 반영됩니다.
- 글꼴은 Google Fonts에서 불러오며, 처음 한 번 열어 둔 뒤에는 캐시됩니다.
