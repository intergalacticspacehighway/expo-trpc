import { z } from "zod";
import { procedure, router } from "../trpc";
import * as trpcNext from "@trpc/server/adapters/next";

export const appRouter = router({
  hello: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .query((opts) => {
      return {
        greeting: `Hello ${opts.input.text}`,
      };
    }),
  echo: procedure
    .input(
      z.object({
        text: z.string(),
      })
    )
    .mutation((opts) => {
      return {
        greeting: `echo: ${opts.input.text}`,
      };
    }),
});

// export type definition of API
export type AppRouter = typeof appRouter;
export { trpcNext };
