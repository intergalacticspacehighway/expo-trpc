import { createTRPCReact } from '@trpc/react-query';
import type { AppRouter } from '@repo/trpc-config/server/routers/_app';
 
export const trpc = createTRPCReact<AppRouter>();