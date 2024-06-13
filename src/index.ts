import { webRun } from "mykomap/index";
import { config } from "./config";
import { config2 } from "./config2";
import { config3 } from "./config3";
import { config4 } from "./config4";
import { config5 } from "./config5";
import { config6 } from "./config6";

// This puts the core Mykomap functions into the scope of a web page.
// A work around - as mykomap not currently built by webpack as a EJS library
// which can be imported into scripts.
// @ts-ignore
window.mykomapExports = { webRun, config, config2, config3, config4, config5, config6};
