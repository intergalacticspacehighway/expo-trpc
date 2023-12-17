import { ExpoRequest, ExpoResponse } from "expo-router/server";
import { fetchRequestHandler } from "@trpc/server/adapters/fetch";
import { appRouter } from "@repo/trpc-server/routers/_app";

export async function GET(req: ExpoRequest) {
  const res = await fetchRequestHandler({
    endpoint: "/api/trpc",
    req: req as unknown as Request,
    router: appRouter,
    createContext: () => ({}),
  });

  // TODO: convert this to ExpoResponse.
  return res;
}
