export function trimArticle(article, max) {
  const trimedArticle = article.substr(0, max);
  return trimedArticle + "....";
}
