import { GlobalState } from "./State";

export interface GlobalStateProps {
  globalState: GlobalState;
  // setGlobalState: Function;
  setGlobalState: (globalState: GlobalState) => void;
}
