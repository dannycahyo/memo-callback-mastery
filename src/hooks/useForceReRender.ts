import { useReducer } from "react";

export function useForceReRender() {
  const [, forceReRender] = useReducer((x) => x + 1, 0);

  return forceReRender;
}
