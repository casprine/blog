import React from "react";
import { TagImage } from "../components/common/index";
import { ViewTag } from "../components/section/index";
import tags from "../data/index";

// trimArticle using substring
export function trimArticle(article, max) {
  const trimedArticle = article.substr(0, max);
  return trimedArticle + "....";
}

// tell whether it's day or not
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
function checker(language) {
  const tag = tags.filter(tag => {
    return tag.name === language;
  });
  return tag;
}

export function tagSelector(language, type) {
  const serialized = language.toString();
  const tag = checker(serialized);
  if (type === "tag") {
    return <ViewTag {...tag} />;
  } else if (type === "img") {
    return <TagImage {...tag} />;
  }
}

export function slugify(str) {
  return str
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w\-]+/g, "")
    .replace(/\-\-+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}

export const env = {
  url: "https://casprine-blog.now.sh/"
};
