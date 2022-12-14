const scrool = document.getElementById("scrool");
const topArticleSection = articles.offsetTop;

scrool.addEventListener("click", scroolToIdOnClick);

function getScroolTopByHref(element) {
  const id = element.getAttribute("href");
  return document.querySelector(id).offsetTop;
}

function scroolToPosition(to) {
  window.scroll({ top: to, behavior: "smooth" });
}

function scroolToIdOnClick(event) {
  event.preventDefault();
  const element = event.target;
  const to = getScroolTopByHref(element);

  scroolToPosition(to);
}
