import React from "react";

import { Tag } from "../components/common/section";
import { TagIamge } from "../components/common/index";
import tags from "../data/index";

// trimArticle using substring
export function trimArticle(article, max) {
  const trimedArticle = article.substr(0, max);
  return trimedArticle + "....";
}

// tell whether it's or not
export function day() {
  const now = new Date();
  const hour = now.getHours();
  if (hour > 4 && hour < 18) {
    return true;
  }
  return false;
}

/**
A function that return the type of tag to use.
@param {String} langugae - the name of the language
@param {String || Boolean} type - the type of tag to return 
*/

export function tagSelector(language, type) {
  if (type === "img") {
    const tag = tags.filter(tag => {
      return tag.name === language;
    });
    return <Tag {...tag} />;
  }
}
