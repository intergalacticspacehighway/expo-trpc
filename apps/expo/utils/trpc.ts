import { createTRPCReact } from "@trpc/react-query";
import type { AppRouter } from "@repo/trpc-server/routers/_app";

export const trpc = createTRPCReact<AppRouter>();
