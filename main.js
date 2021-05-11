let listeAchat = [];
let button = $(".ajout");
var totalPrice = 0;

button.click(function () {
  totalPrice += $(this).data("price");
  console.log(totalPrice + "$");
  localStorage.setItem(`${$(this).attr("id")}Name`, $(this).data("name"));
  localStorage.setItem(`${$(this).attr("id")}Price`, $(this).data("price"));
  localStorage.setItem(`${$(this).attr("id")}Cat`, $(this).data("cat"));
  localStorage.setItem("totalPrice", totalPrice);
});

//test clara
// button.click(function storeShopping() {
//   let item = {
//     name: $(this).data("name"),
//     price: $(this).data("price"),
//     cat: $(this).data("cat"),
//   };
//   localStorage.setItem(`name-${$(this).attr("id")}`, item);
//   totalPrice += `${$(this).data("price")}`;
//   console.log(item);
// });

function viewShopping() {
  let produit1Name = localStorage.getItem("produit1Name");
  let produit2Name = localStorage.getItem("produit2Name");
  let prix = localStorage.getItem("totalPrice");
  $("#panier").append(
    produit1Name + " et " + produit2Name + " pour un prix de " + prix
  );
}

viewShopping();
//OfObjects = [];
// var a = ["car", "bike", "scooter"];
// a.forEach(function(entry) {
//     var singleObj = {}
//     singleObj['type'] = 'vehicle';
//     singleObj['value'] = entry;
//     listOfObjects.push(singleObj);
// });

// console.log(listOfObjects);

// 0: {type: "vehicle", value: "car"}
// 1: {type: "vehicle", value: "bike"}
// 2: {type: "vehicle", value: "scooter"}
// length: 3
// __proto__: Array(0)

// button.click(function () {
//     var item = {};
//     item["name"] = $(this).data("name");
//     item["price"] = $(this).data("price");
//     item["cat"] = $(this).data("cat");
//     listeAchat.push(item);
//     totalPrice += $(this).data("price");
//     console.log(listeAchat);
//     console.log(totalPrice + "$");
//   });
