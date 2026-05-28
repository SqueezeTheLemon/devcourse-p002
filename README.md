# 스프링부트와 Next.js REST API 연동

수업: https://www.slog.gg/p/14175

Node.js 26.13.1 LTS, pnpm 12.21.0을 사용합니다.

```powershell
npm install -g pnpm@12.21.0
git clone https://github.com/jhs512/p-14175-3.git
cd p-14175-3
git checkout 001
pnpm install --frozen-lockfile
pnpm dev
```

강의 태그로 이동한 다음 항상 `pnpm install --frozen-lockfile`을 실행하세요. 최신 강의는 `051`입니다. 개발 서버는 http://localhost:3000 입니다.

백엔드는 https://github.com/jhs512/p-14172-2 의 `068` 태그를 Java 25로 실행합니다.
개발 DB: `jdbc:h2:./db_dev`, 테스트 DB: `jdbc:h2:mem:db_test`. API: http://localhost:8080.

검사: `pnpm lint --max-warnings 0`, `pnpm typecheck`, `pnpm build`.

Next.js 16의 최신 기본 구성인 Cache Components(`cacheComponents: true`)와 Partial Prefetching(`partialPrefetching: true`)을 켭니다. Tailwind CSS는 `postcss.config.mjs` 대신 `@tailwindcss/turbopack` 로더로 연결합니다. `useParams()`를 쓰는 `src/app/posts/[id]` 경로에는 016부터 `loading.tsx`를 두어 Suspense 경계를 만듭니다. 레이아웃은 Next.js가 생성하는 `LayoutProps<"/">` 타입을 사용하며, `pnpm typecheck`는 `next typegen`으로 route 타입을 만든 뒤 검사합니다.

TypeScript 7.0.2 네이티브 컴파일러는 `@typescript/native` alias로 설치하고, Next.js와 ESLint가 사용하는 compiler API는 `typescript` 이름에 연결한 `@typescript/typescript6@6.0.2`가 제공합니다. `pnpm typecheck`는 TypeScript 7을 사용합니다.
ESLint 10은 eslint-plugin-import/jsx-a11y/react의 peer 범위를 벗어나므로 9.39.5를 사용합니다.
설치 스크립트는 `pnpm-workspace.yaml`에서 sharp와 unrs-resolver에 대해 실행하지 않도록 명시했습니다. Windows용 사전 빌드 바이너리로 설치와 빌드를 검증합니다.

공식 근거: [Next.js](https://nextjs.org/docs/app/getting-started/installation), [TypeScript alias](https://devblogs.microsoft.com/typescript/announcing-typescript-7-0/), [pnpm 설정](https://pnpm.io/settings).
