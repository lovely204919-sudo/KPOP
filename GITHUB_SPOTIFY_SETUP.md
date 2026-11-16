# GitHub Pages × Spotify 연결 체크리스트

## 0. 현재 상태

- 앱 ZIP/코드는 로컬에서 제작하고, 크롬 브라우저로 리드 등록 → MIDI ZIP 내보내기 동작을 검증했습니다.
- GitHub 연결 계정은 확인됐지만 GitHub 앱 설치에 허용된 저장소 목록이 비어 있습니다. 따라서 **GitHub 업로드·배포는 아직 이뤄지지 않았습니다.**
- Spotify 계정 권한·앱 Client ID가 없어 **실제 Spotify 인증 및 플레이리스트 생성은 아직 검증되지 않았습니다.**

## 1. GitHub Pages 업로드

1. [GitHub 새 저장소](https://github.com/new)에서 `kpop-sound-db` 같은 저장소를 만듭니다. **공개 웹앱임을 확인**하고 처음에는 Public을 선택하면 GitHub Free로도 Pages 배포가 가능합니다.
2. ZIP을 풀고 **압축 파일 그 자체가 아니라 내부 파일들**을 저장소 루트에 업로드하세요. `index.html`, `midi-studio.js`, `lead-hub.js`, `market-update.js`, `upgrade.css`, `sw.js`, 아이콘과 `manifest.json`, `.github/workflows/pages.yml`이 중요합니다.
3. Settings → Pages → Build and deployment → Source: **GitHub Actions**로 선택합니다. `main` 브랜치에 푸시하면 자동 배포 워크플로가 실행됩니다. Actions 탭에서 완료를 확인하세요.
4. 완성된 사이트 주소는 일반적으로 `https://<GitHub-ID>.github.io/<repository>/` 형태입니다. **실제 배포 URL을 확인한 뒤** Spotify에 등록하세요.
5. ChatGPT GitHub 연결 앱에 저장소 접근 권한을 부여하면 다음부터 저장소 작업을 여기에서 이어갈 수 있습니다. 현재는 해당 권한이 없는 상태입니다.

## 2. Spotify Developers

1. [Spotify for Developers 대시보드](https://developer.spotify.com/dashboard)에서 앱을 만들거나 기존 개발 앱을 사용합니다. 앱 소유자는 Spotify Premium 구독이 필요합니다(2026 Development Mode 조건).
2. 앱 설정에서 **Redirect URI**를 등록합니다. URL은 라이브 앱 LEAD STUDIO의 Spotify 영역에서 `주소 복사` 버튼을 눌러 그대로 복사할 수 있습니다. 주소 뒤의 `/`, 대소문자, 경로가 전부 일치해야 합니다.
3. 새 앱의 Client ID만 복사해 앱에 넣고 `Spotify 계정 연결하기`를 누릅니다. Client Secret, Spotify 비밀번호, refresh token은 절대 GitHub에 업로드하거나 채팅에 공유하지 마세요.
4. Spotify에서 승인하면 리드 상세의 `Spotify 플레이리스트 만들기` 버튼으로 실제 검색 → 일치 확인 → 비공개 플레이리스트를 생성합니다.
5. 로그인 중 `INVALID_CLIENT`, `INVALID_REDIRECT_URI`, `403` 등이 뜨면 Redirect URI 일치, Premium 상태, 개발 모드 승인 사용자, 스코프 `playlist-modify-private`를 확인합니다.
6. GitHub Pages 사용자 브라우저는 단순 공개 정적 웹앱이므로 Spotify 재연결이 필요할 수 있습니다. 프로덕션 다중 사용자 서비스라면 별도 서버 기반 인증 보강이 필요합니다.

## 3. Cubase 14 MIDI

1. LEAD STUDIO에서 리드를 등록/선택합니다.
2. `CUBASE MIDI ENGINE`에서 60~200 BPM·Key·코드 진행·장르 스타일·8/16/24/32 마디를 확인합니다.
3. `Cubase MIDI 팩 ZIP` → 압축 해제 → Cubase `File → Import → MIDI File` → `ALL_TRACKS.mid`를 선택합니다.
4. 트랙 1 Chords / 트랙 2 Bass / 트랙 3 Drums(GM 채널 10)로 구분하고 각 트랙의 가상악기 출력을 지정합니다. 원문에 코드/Key/BPM이 없으면 생성기의 기본값이 적용됩니다.

## 4. 안전하게 운영하기

- 리드 전문은 그 브라우저 `localStorage`에 저장됩니다. 앱은 자동 계정 동기화가 없으므로 **JSON 백업**을 정기적으로 생성하고 개인 공간에만 보관하세요.
- 실제 기획사 리드/녹음 파일·계약 자료·API 비밀키를 공개 GitHub 저장소에 올리지 마세요.
- 현재 Suno/Splice 분석은 AI 제안 및 공식 링크 기반의 큐레이션이며 Spotify는 별도 계정 승인 후 동작합니다.

## 공식 문서

- [GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)
- [Spotify Redirect URIs](https://developer.spotify.com/documentation/web-api/concepts/redirect_uri)
- [Spotify PKCE](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow)
- [2026 API migration](https://developer.spotify.com/documentation/web-api/tutorials/february-2026-migration-guide)
