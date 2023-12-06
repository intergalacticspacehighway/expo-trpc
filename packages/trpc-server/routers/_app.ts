import { z } from 'zod';
import { procedure, router } from '../trpc';
import * as trpcNext from '@trpc/server/adapters/next';

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      }),
    )
    .query((opts) => {
      return {
        greeting: `hello ${opts.input.text}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
export { trpcNext };