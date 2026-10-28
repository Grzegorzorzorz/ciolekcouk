import { default as AlertComp } from "../alert";

export default function Prose({ blok }: any) {
  return <AlertComp severity={blok.severity}>{blok.text}</AlertComp>;
}
