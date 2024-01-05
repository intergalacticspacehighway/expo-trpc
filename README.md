# Universal Expo tRPC

- `apps/expo` - Universal frontend app with `@tanstack/react-query`, tRPC and expo-router.
- `apps/expo/app/api/trpc/[trpc]+api.ts` - Expo API route with tRPC route handlers.
- `packages/trpc-server` - tRPC routers and procedures.

### Installation

- Go to the root directory and run `yarn` to install dependencies.

### Run web app

```bash
cd apps/expo
yarn web
```

### Run iOS app

```bash
cd apps/expo
yarn ios
```

### Run android app

```bash
cd apps/expo
yarn android
```
