import { toolResponse } from "../../_shared/tools.js";

export async function onRequestGet() {
  return toolResponse("strip-metadata");
}
