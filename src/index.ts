import { webRun } from "mykomap/index";
import { config } from "./config";
import { config2 } from "./config2";

// This puts the core Mykomap functions into the scope of a web page.
// A work around - as mykomap not currently built by webpack as a EJS library
// which can be imported into scripts.
// @ts-ignore
window.mykomapExports = { webRun, config, config2 };
