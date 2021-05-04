var modal = document.getElementById("myModal");

function showModal() {
  modal.style.display = "block";
}

function closeModal() {
  modal.style.display = "none";
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
function showContents(e) {
  const allItems = document.getElementsByClassName("all-items")[0];
  const mostRecent = document.getElementsByClassName("most-recent")[0];
  const firstOption = document.getElementsByClassName("option1")[0];
  const secondOption = document.getElementsByClassName("option2")[0];
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

//var isImageLoaded = 0;
/* document.querySelector("#item-img").addEventListener("change", function () {
  //isImageLoaded = 1;
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    localStorage.setItem("recent-image", reader.result);
  });
  reader.readAsDataURL(this.files[0]);
}); */

function itemTemplate(brand, size, price) {
  const section = document.createElement("section");
  const itemImg = document.createElement("img");
  itemImg.alt = "clothing item";
  //itemImg.src = imgSource;
  console.log(itemImg);
  const itemDetails = document.createElement("ul");
  section.className = "item";
  itemImg.className = "product";
  itemDetails.className = "item-details";

  const itemBrand = document.createElement("li");
  itemBrand.innerHTML = brand;
  itemDetails.appendChild(itemBrand);

  const itemSize = document.createElement("li");
  itemSize.innerHTML = size;
  itemDetails.appendChild(itemSize);

  const itemPrice = document.createElement("li");
  itemPrice.innerHTML = price;
  itemDetails.appendChild(itemPrice);

  section.appendChild(itemImg);
  section.appendChild(itemDetails);
  return section;
}

function addItem() {
  var myItem = new Object();
  myItem.brand = document.getElementById("item-name").value;
  myItem.size = document.getElementById("item-size").value;
  myItem.price = document.getElementById("item-price").value;
  const mostRecent = document.querySelector(".most-recent");
  const allItems = document.querySelector(".all-items");
  if (myItem.brand != "" && myItem.size != "" && myItem.price != "") {
    /* var imageDataUrl;
    document.addEventListener("DOMContentLoaded", () => {
      imageDataUrl = localStorage.getItem("recent-image");
    }); */
    const item1 = itemTemplate(myItem.brand, myItem.size, myItem.price);
    const item2 = itemTemplate(myItem.brand, myItem.size, myItem.price);
    mostRecent.insertBefore(item1, mostRecent.firstChild);
    mostRecent.removeChild(mostRecent.lastElementChild);
    allItems.appendChild(item2);
  }
}
