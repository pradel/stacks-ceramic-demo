import { ComposeClient } from "@composedb/client";
import runtimeComposite from "../../ceramic/runtime-composite.json";

export const composeClient = new ComposeClient({
  ceramic: "http://localhost:7007",
  definition: runtimeComposite as any,
});
