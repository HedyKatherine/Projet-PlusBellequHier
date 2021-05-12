let button = $(".ajout");
var totalPrice = 0;

button.click(function () {
  num = $(this).data("count");
  if ($(this).data("count") > 0) {
    num = localStorage.getItem(`${$(this).attr("id")}Number`)
  }
    num +
  
   console.log($(this).data("count"));
  totalPrice += $(this).data("price");
  console.log(totalPrice + "$");
  localStorage.setItem(`${$(this).attr("id")}Name`, $(this).data("name"));
  localStorage.setItem(`${$(this).attr("id")}Price`, $(this).data("price"));
  localStorage.setItem(`${$(this).attr("id")}Cat`, $(this).data("cat"));
  localStorage.setItem(`${$(this).attr("id")}Number`, $(this).data("count"));
  localStorage.setItem("totalPrice", totalPrice);
});

function viewShopping() {
  let produit1Name = localStorage.getItem("produit1Name");
  let produit2Name = localStorage.getItem("produit2Name");
  let produit1Number = localStorage.getItem("produit1Number");
  let produit2Number = localStorage.getItem("produit2Number");
  let prix = localStorage.getItem("totalPrice");
  $("#panier").append(
    produit1Number +
      produit1Name +
      " et " +
      produit2Number +
      produit2Name +
      " pour un prix de " +
      prix
  );
}

// function clickCount() {
//   var count = 0;
//   button.click(function () {
//     count += 1;
//     console.log(count);
//   });
// }
// clickCount();
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

//test clara
// button.click(function storeShopping() {
//   let item = {
faut qu'on pense à push 
Louiza Achiche12:28
moi aussi je vois du js sur le live
//     name: $(this).data("name"),
//     price: $(this).data("price"),
//     cat: $(this).data("cat"),
//   };
//   localStorage.setItem(`name-${$(this).attr("id")}`, item);
//   totalPrice += `${$(this).data("price")}`;
//   console.log(item);
// });
