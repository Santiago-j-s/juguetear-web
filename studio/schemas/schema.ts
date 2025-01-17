/// <reference types="@sanity/types/parts" />
// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import about from "./about";
import accessibilityDeclaration from "./accessibility-declaration";
import block from "./block";
import characteristics from "./characteristics";
import characteristics_list from "./characteristics_list";
import document from "./document";
import documents from "./documents";
import faq from "./faq";
import homePage from "./home-page";
import image from "./image";
import link from "./link";
import member from "./member";
import toy from "./toy";
import video from "./video";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    about,
    block,
    characteristics_list,
    characteristics,
    document,
    documents,
    faq,
    homePage,
    image,
    link,
    member,
    toy,
    accessibilityDeclaration,
    video,
  ]),
});
