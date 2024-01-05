import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import React, { useState } from "react";
import { trpc } from "../utils/trpc";
import { Button, Text } from "react-native";

function App() {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: "http://localhost:8081/api/trpc",

          // You can pass any HTTP headers you wish here
          async headers() {
            return {
              // authorization: getAuthCookie(),
            };
          },
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        <TestComp />
      </QueryClientProvider>
    </trpc.Provider>
  );
}

const TestComp = () => {
  const userQuery = trpc.hello.useQuery({
    text: "world",
  });
  const echoMutate = trpc.echo.useMutation();

  return (
    <>
      <Text>{userQuery.data?.greeting}</Text>
      <Button
        title="Test mutation"
        onPress={async () => {
          const greeting = await echoMutate.mutateAsync({
            text: "hello anyone there?",
          });
          alert(greeting.greeting);
        }}
      />
    </>
  );
};
export default App;
