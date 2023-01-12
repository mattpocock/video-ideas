// client.ts

import type { RouteMap } from "./server";

export const fetchFromBackend = <
  TRoute extends keyof RouteMap
>(
  route: TRoute,
  input: Parameters<RouteMap[TRoute]>[0]
) => {
  return fetch(route, {
    method: "POST",
    body: JSON.stringify(input),
  }).then((res) => res.json()) as ReturnType<
    RouteMap[TRoute]
  >;
};
