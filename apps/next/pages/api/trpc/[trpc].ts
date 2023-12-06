import type { NextApiHandler, NextApiRequest, NextApiResponse } from 'next';
import { trpcNext } from '@repo/trpc-server/server';
import { appRouter } from '@repo/trpc-server/server';
import Cors from 'cors';
const cors = Cors();

function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: any) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }

      return resolve(result);
    });
  });
}

export function withCors(handler: NextApiHandler) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    await runMiddleware(req, res, cors);

    return await handler(req, res);
  };
}
// export API handler
// @see https://trpc.io/docs/server/adapters
export default withCors(trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}),
}));