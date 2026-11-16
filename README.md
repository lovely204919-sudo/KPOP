# K-POP SOUND DB × LEAD STUDIO

> 2026년 11월 13일(KST) 편집 스냅샷 · 기존 `kpop-github.zip` 기반 기능 유지형 업그레이드

이 패키지는 실제 실행 가능한 **정적 웹앱 소스**입니다. 프론트엔드는 HTML/CSS/바닐라 JavaScript이며 GitHub Pages와 같은 HTTPS 정적 호스팅을 대상으로 합니다. 원본 데이터베이스와 대부분의 원래 화면을 보존하고 `LEAD STUDIO`, `2026 NOW` 화면을 추가했습니다. **서버/유료 API 계정 없이 작동하는 기능과 별도 API 승인이 필요한 기능은 구분**합니다.

## 1. 실행 방법

1. 압축을 풀고 `index.html`, `lead-hub.js`, `midi-studio.js`, `market-update.js`, `upgrade.css`, `sw.js`, `manifest.json`, `icon-192.png`, `icon-512.png`를 **같은 폴더에 둡니다**.
2. 간단한 디자인 확인은 `index.html`을 브라우저에서 열어 가능합니다. 다만 PWA 설치·Spotify OAuth 및 일부 브라우저 보안 기능은 `file://`에서 작동하지 않습니다.
3. GitHub 저장소 루트(또는 Pages 배포 폴더)에 파일들을 올리고 **Settings → Pages → Deploy from a branch**를 선택하세요. HTTPS 배포 주소에서 앱을 실행합니다.
4. 로컬 개발은 해당 폴더에서 `python -m http.server 8000` 실행 후 `http://127.0.0.1:8000`으로 접속하세요.
5. 처음에는 **LEAD STUDIO**가 보입니다. 샘플 원문은 `DEMO_LEAD.txt`를 붙여넣어 사용하세요. 실제 기획사 발주가 아닌 테스트 자료임을 명시했습니다.

> 브라우저 캐시가 새 코드를 표시하지 않으면 일반 새로고침 대신 캐시 새로고침을 사용하거나 이전 앱의 서비스 워커를 해제하세요. **원본 앱에서 저장한 데이터는 브라우저 로컬스토리지를 초기화하면 없어질 수 있습니다.** 기존 앱의 캐시 초기화 버튼을 누르기 전에 반드시 자료를 백업하세요.

## 2. LEAD STUDIO 사용

**원문 수집:** PDF(텍스트 포함), DOCX, TXT/MD/CSV/JSON/EML, HTML, PNG/JPG/WEBP 등을 선택/드래그하거나 줄글을 붙여넣습니다. 파일 크기는 최대 20MB입니다. PDF는 최대 80페이지까지 텍스트를 추출합니다. 스캔 PDF/이미지는 별도 `스캔 PDF / 이미지 OCR (AI 사용)` 버튼을 눌러 Claude Vision을 사용합니다. 스캔 PDF OCR은 첫 5페이지만 처리합니다. PDF.js와 mammoth는 외부 CDN에서 불러오므로 문서 파싱에 네트워크가 필요합니다.

**마감 관리:** 텍스트에서 마감일 후보를 탐색합니다. 발매일 등 다른 날짜와 혼동될 수 있으므로 날짜/시간을 **직접 확인 후 수정**하세요. 리드를 저장하면 월간 캘린더에 표시됩니다. `전체 일정 .ics` 버튼으로 Apple/Google/Outlook 등 캘린더에 가져올 수 있는 파일을 받거나, 각 리드의 `Google 캘린더` 버튼으로 일정 입력 화면을 엽니다. **Google 계정에 승인 없이 직접 자동 등록하지는 않습니다.** 모든 일정 시간은 KST 기준입니다.

**AI 분석:** 상단 `API Key`에 **사용자의 Claude API 키**를 현재 탭에 입력한 뒤 리드 상세의 `✦ 전체 자동 분석`을 누릅니다. 원문을 바탕으로 요구사항·금지요소·레퍼런스·장르·BPM/Key 제안·8마디 코드·드럼·베이스·믹싱·탑라인·보컬 디렉션·송폼·영어 Suno 프롬프트 800자 이내·Splice 검색어를 한 번에 생성합니다. 리드에 명시하지 않은 레퍼런스, 검증되지 않은 BPM/Key는 확정 정보로 취급하지 않도록 설계했습니다. **음원 파형을 직접 분석하는 기능이 아니며, AI 제안은 음악적 실측 결과가 아닙니다.**

**데이터 저장/이동:** 입력된 리드 원문과 생성된 결과는 해당 브라우저의 `localStorage`에 저장됩니다. `JSON 백업`과 `JSON 복원` 버튼으로 컴퓨터/브라우저 간 이동할 수 있습니다. 백업 파일에는 **리드 전문 등 민감한 자료**가 담기므로 안전하게 보관하세요.

## 3. Spotify 플레이리스트 — 실제 계정 승인이 필요

이 버전은 단순 링크가 아니라 Spotify Web API 공식 OAuth PKCE 인증 흐름을 구현했습니다.

1. Spotify Premium 이용자 계정으로 [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)에 로그인 후 Web API 앱을 생성합니다. Spotify **2026 Development Mode**는 앱 소유자 Premium 구독과 소수 승인 사용자 제한이 있습니다.
2. 앱 설정의 **Redirect URI**에 배포 주소를 정확히 등록합니다. 예시: `https://example.github.io/kpop-sound-db/` (마지막 `/` 포함 여부까지 동일해야 함). 개발 환경에서는 `http://127.0.0.1:8000/` 등 등록 가능한 로컬 루프백 URL을 사용하세요. `file://` 주소에서는 불가합니다.
3. LEAD STUDIO 하단에 Spotify 앱의 **Client ID**를 입력한 뒤 `Spotify 계정 연결`을 눌러 본인이 승인합니다. **Client Secret은 절대 입력하지 않습니다.**
4. 리드 전체 AI 분석 후 `Spotify 플레이리스트 만들기` → 이름·아티스트 실제 일치 검색 → 매칭 결과 확인 → 비공개 플레이리스트 생성 → 해당 리드에 링크 저장합니다. 검색 결과가 없거나 일치하지 않으면 해당 트랙은 제외합니다.
5. 로그인 상태는 열린 탭의 메모리에만 보관되므로 새로고침하거나 돌아오면 다시 승인할 수 있습니다. 실제 Spotify API 호출은 **사용자의 실계정 없이 테스트할 수 없으므로 배포 후 E2E 점검이 필요**합니다.

개발자 참고: 2026-02 이후 변경된 `POST /me/playlists`, `POST /playlists/{playlist_id}/items`를 사용합니다. 공식 자료: [Spotify 2026 Migration Guide](https://developer.spotify.com/documentation/web-api/tutorials/february-2026-migration-guide), [Create Playlist](https://developer.spotify.com/documentation/web-api/reference/create-playlist), [Add Items](https://developer.spotify.com/documentation/web-api/reference/add-items-to-playlist).

## 4. Splice — 실제 팩과 검색 제안 구분

앱은 리드의 장르·사운드를 바탕으로 Splice 검색어를 AI로 제시합니다. 추가로 아래 **Splice 공식 페이지에서 존재가 확인된 큐레이션 팩** 7종 가운데 관련도가 높은 4종을 보여줍니다.

- [Monotree Presents the G-High K-Pop Sample Pack](https://splice.com/sounds/packs/splice/monotree-presents-g-high-pack/samples) — K-pop 드럼/키/신스
- [Wildcardz feat. Lydia Paek – Sounds of K-Pop](https://splice.com/sounds/packs/splice/wildcardz-feat-lydia-paek-sounds-of-k-pop/samples) — K-pop 보컬/신스/퍼커션
- [Seoul Dreams – K R&B Melodies](https://splice.com/sounds/packs/soundsmiths/seoul-dreams-k-randb-melodies/samples) — 한국형 R&B
- [Y2K Drummer – RnB Pop Drums](https://splice.com/sounds/packs/that-sound/y2k-drummer-rnb-pop-drums/samples) — Y2K R&B 드럼
- [Early 2000s Vibes](https://splice.com/sounds/packs/audentity/early-2000s-vibes/samples) — 2000년대 신스/드럼/보컬 찹
- [Kastle’s Garage and 2-Step Pack](https://splice.com/sounds/packs/splice/kastle-garage-pack/samples) — UKG/2-step
- [The 2000’s](https://splice.com/sounds/packs/one-stop-shop/the-2000s/samples) — 2000년대 힙합·R&B

**중요:** 검색어는 실제 샘플 검색 결과가 아니며, 큐레이션 팩은 정적으로 검증한 목록입니다. 개별 샘플 실시간 검색·청음·Splice 계정 내 다운로드 및 전체 카탈로그 기반 자동 추천은 통합되지 않았습니다. 이를 완전 자동화하려면 Splice에서 제공하는 OAuth 인증이 가능한 서버/공식 통합이 추가로 필요합니다.

## 5. 2026 NOW — 시장 데이터의 의미

- **정보 기준일:** 2026년 11월 13일 (KST)
- **발매 이벤트:** 출처 URL이 연결된 편집 선별 **36건** (전 아티스트의 모든 발매를 망라한 수치는 아님)
- **신인:** 2026 데뷔 일부 **14팀** (전체 전수조사가 아님, 검증 재확인 필요 항목은 UI에 명시)
- **기존 DB:** 원본 268 그룹을 유지하고 일부 신규팀 추가 후 총 약 272개 항목 표시
- **트렌드 카드:** 6개 프로덕션 방향성 **기획 제안**, 통계적 시장점유율 또는 차트 순위가 아님
- `market-update.js` 파일에서 발표 일정/신인/출처를 직접 업데이트할 수 있습니다. **자동 실시간 동기화는 아직 없음**.

출처는 2026 NOW 하단의 Sources에도 표시합니다: [K-pop Today](https://k-poptoday.com/en/), [Kpopgo](https://kpopgo.com/comebacks), [kpopping Debut 2026](https://kpopping.com/categories/debut/2026), [YG BLACKPINK](https://ygfamily.com/ko/artists/blackpink/discography/1652), [연합뉴스 TUIDE](https://en.yna.co.kr/view/AEN20260824010400315).

## 6. 보안 / 개인정보 / 현재 제한

- **서버가 없는 프런트엔드 앱**입니다. Claude API 키는 입력 후 자바스크립트 메모리에서 사용하며, 기존 원본 앱 방식대로 브라우저에서 Claude API로 직접 보냅니다. 개인 실험에는 쓸 수 있지만 불특정 다수가 접근하는 서비스로 운영하려면 **서버 프록시, 인증, 요청량 제한, 비밀키 보호**가 필요합니다. 민감한 리드 원문을 보내기 전 권리·보안 조건을 확인하세요.
- 리드와 AI 결과는 브라우저 로컬스토리지에 평문 보관됩니다. 공유 컴퓨터 사용 시 주의하고 정기 백업하세요. 외부로 전송되는 시점은 사용자의 **AI 분석/OCR/Spotify OAuth·재생목록 생성** 실행 시입니다.
- 원본 기능 일부는 AI가 텍스트·URL을 바탕으로 서술하는 *추정*입니다. **실제 음향 분석, 실제 BPM 자동 검출, 실측 Key 추출과는 다릅니다.**
- iOS Safari의 ‘홈 화면에 추가’와 설치 프롬프트는 브라우저별 동작이 다르며, PWA 오프라인에서 외부 Spotify/Splice/AI/PDF CDN 기능은 사용할 수 없습니다.

## 7. 구성 파일

| 파일 | 기능 |
|---|---|
| `index.html` | 기존 10개 기능, 새 탭 마크업, API 설정 |
| `upgrade.css` | 신규 프리미엄 UI, 데스크톱/모바일 반응형 |
| `lead-hub.js` | A&R 리드 수집/추출/AI/캘린더/Spotify/Splice |
| `midi-studio.js` | 네트워크 불필요한 코드·베이스·드럼 Standard MIDI File 생성 엔진 |
| `market-update.js` | 2026-11-13 K-pop 소스 연동 편집 스냅샷 |
| `manifest.json`, `sw.js`, `icon-192.png`, `icon-512.png` | PWA/홈 화면 아이콘/캐시 |
| `FUNCTION_AUDIT.md` | 기능별 실사 및 남은 위험/테스트 결과 |
| `DEMO_LEAD.txt` | **실제 브리프가 아닌** 테스트 입력 예제 |

**테스트 범위:** Chromium headless에서 초기화·탭·그룹카운트·마켓 렌더·리드 생성/날짜 추출/상세/캘린더·모바일 390px 가로 오버플로를 점검했습니다. 외부 Claude/Spotify 실서비스 토큰, 실제 퍼블릭 GitHub Pages 운영, 모든 제조사 브라우저 기기에서의 검증은 하지 않았습니다.

## 8. NEW — Cubase MIDI Engine (2026-11-13 v3)

리드 선택 → 상세 하단 **06 / CUBASE MIDI ENGINE** → BPM, Key, Groove, 길이(8/16/24/32마디), 코드 진행 조정 → **Cubase MIDI 팩 ZIP** 클릭. **AI API 없이도** 리드 원문에서 BPM/Key/코드를 찾고 미기재 시 임의 기본 제안(110 BPM, C major, I-V-vi-IV)을 명시합니다. 선택한 조성/템포/코드는 리드에 저장됩니다.

ZIP 구조: `프로젝트_ALL_TRACKS.mid`(type 1, 템포트랙+코드+베이스+드럼), `프로젝트_CHORDS.mid`, `프로젝트_BASS.mid`, `프로젝트_DRUMS.mid`, `CUBASE_IMPORT_GUIDE.txt`. MIDI는 480 PPQ / 4분의 4박자, GM 드럼 채널 10(채널 인덱스 9), 드럼 노트 Kick 36, Snare 38, Clap 39, HiHat 42, OpenHat 46입니다. 하모니 트랙은 EP, 베이스 트랙은 Synth Bass로 GM 프로그램 지정합니다.

Cubase 14 Windows: ZIP 압축 풀기 → Cubase 프로젝트 열기 → **File → Import → MIDI File** → `ALL_TRACKS.mid` 선택 → 프로젝트 템포를 **생성 BPM과 맞추거나 MIDI 템포 가져오기**. 악기 연결이 없으면 프로젝트에 가상악기(예: Kontakt / Serum / Groove Agent)를 지정해야 소리가 납니다. 개별 파일은 MIDI 트랙에 드래그해도 됩니다.

현재는 코드별 근접 인버전 보이싱·장르별 드럼/베이스 템플릿을 반복하는 **데모 스케치 엔진**입니다. 악곡 원본을 청취해 채보하는 기능이 아니고, 자동으로 믹스된 완성곡도 아닙니다. 원문에 없는 템포·코드는 추정치이므로 제출 전 사람이 수정하세요.

## 9. GitHub Pages 배포 및 Spotify 개발자 설정 — 실사용 단계

**GitHub 앱의 저장소 설치 접근이 확인되지 않아 이 버전을 사용자 계정에 푸시하거나 GitHub Pages를 켰다고 주장하지 않습니다.** ZIP 파일의 내용을 배포용 공개 저장소(예: `kpop-sound-db`) 루트에 업로드하면 됩니다. 기존 저장소가 있다면 백업하고 같은 파일명을 교체하세요. 보안상 **실제 기획사 리드 문서, JSON 백업, API 키/Client Secret, `.env`는 절대 커밋하지 마세요.**

추천 자동 배포 경로: ① GitHub 저장소 생성 또는 기존 프로젝트 선택 ② 루트에 패키지 파일을 업로드하고 커밋 ③ Settings → Pages → Build and deployment → Source `GitHub Actions` ④ `.github/workflows/pages.yml` 워크플로 실행 및 Pages 주소 확인. 대안: Source `Deploy from a branch`, Branch `main`, 폴더 `/(root)` 설정. 두 배포 소스는 동시에 고를 필요 없습니다. GitHub Pages는 공개 사이트입니다.

Spotify 설정은 실제 배포 주소가 생긴 후 진행합니다. ① [Spotify Developer Dashboard](https://developer.spotify.com/dashboard)에서 개발자 앱 생성 ② 앱 설정 Redirect URIs에 **배포된 전체 주소**(예시 `https://YOUR_USER.github.io/kpop-sound-db/`)를 마지막 슬래시까지 정확히 등록 ③ `LEAD STUDIO`의 Spotify Redirect URI 표시값과 문자 하나까지 같은지 확인 ④ Client ID만 복사해 입력(Secret 입력/커밋 금지) ⑤ Spotify 연결 및 권한 승인 ⑥ AI 리드 분석 후 플레이리스트 생성 버튼 사용.

**Spotify의 2026 Development Mode 기준:** 앱 소유자는 활성 Premium이어야 하고 새 앱은 최대 5명의 등록 사용자만 허용합니다. 사용자를 올바르게 추가/승인해야 합니다. 사용하는 API는 PKCE + `playlist-modify-private`, `POST /me/playlists` + `POST /playlists/{id}/items`입니다. Spotify에 실계정으로 로그인한 뒤 검색·플레이리스트 생성에 대한 E2E 테스트가 필요합니다. 새로고침하면 다시 OAuth 승인이 필요할 수 있습니다.

공식 안내: [GitHub Pages 배포](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site), [Spotify 2026 변경사항](https://developer.spotify.com/documentation/web-api/tutorials/february-2026-migration-guide), [Spotify Redirect URI](https://developer.spotify.com/documentation/web-api/concepts/redirect_uri), [Spotify PKCE 인증](https://developer.spotify.com/documentation/web-api/tutorials/code-pkce-flow).
