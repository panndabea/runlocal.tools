import { TOOL_REGISTRY, jsonResponse } from "../../_shared/tools.js";

export async function onRequestGet() {
  return jsonResponse(TOOL_REGISTRY);
}
