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
