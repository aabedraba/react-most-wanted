import { useContext } from "react";
import Context from "./Context";
export { default as withMessaging } from "./with";
export { default } from "./Provider";

export function useMessaging() {
  return useContext(Context);
}
