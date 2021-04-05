function showContents(e) {
  const allItems = document.getElementsByClassName("all-items")[0];
  const mostRecent = document.getElementsByClassName("most-recent")[0];
  const firstOption = document.getElementsByClassName("option1")[0];
  const secondOption = document.getElementsByClassName("option2")[0];
  console.log(allItems);
  if (
    window.getComputedStyle(mostRecent).display != "none" &&
    window.getComputedStyle(allItems).display === "none" &&
    e.target.className === "option2"
  ) {
    allItems.style.display = "flex";
    mostRecent.style.display = "none";
    e.target.style.borderWidth = "0.5px 0.5px 0 0";
    firstOption.style.borderWidth = "0.5px 0.5px 0.5px 0.5px";
  }
  if (
    window.getComputedStyle(mostRecent).display === "none" &&
    window.getComputedStyle(allItems).display != "none" &&
    e.target.className === "option1"
  ) {
    mostRecent.style.display = "flex";
    allItems.style.display = "none";
    e.target.style.borderWidth = "0.5px 0.5px 0 0.5px";
    secondOption.style.borderWidth = "0.5px 0.5px 0.5px 0";
  }
}
