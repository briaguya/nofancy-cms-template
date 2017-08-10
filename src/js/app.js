// JS Goes here - ES6 supported
import CMS from "netlify-cms";

import { ExtendedMarkdownControl, ExtendedMarkdownPreview } from "../widgets/ExtendedMarkdown";

CMS.registerWidget("extendedmarkdown", ExtendedMarkdownControl, ExtendedMarkdownPreview);
