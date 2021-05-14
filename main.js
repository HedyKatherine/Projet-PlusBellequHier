//appel les bouttons avec la classe .add
let button = $(".add");

//function qui se declenche quand un boutton avec la class .add est cliqué
button.click(function () {
  //num vaut au dernier nombre de click sur le bouton enregister dans le local storage
  let num = parseFloat(localStorage.getItem(`${$(this).attr("id")}Number`));
  // prevPrice vaut au dernier total du prix associer a ce bouton enregister dans le local storage
  let prevPrice = parseFloat(
    localStorage.getItem(`${$(this).attr("id")}TotalPrice`)
  );

  //lorsque le boutton est cliqué on ajoute 1 au compte des clicks
  $(this).data("count", (num += 1));
  //si le prix precedent = 0 alors le total des prix est = au prix de l'article
  if (prevPrice == 0) {
    $(this).data("totalprice", $(this).data("price"));
  }
  //sinon, le total du prix est le total precedement enregistrer dans le local storage + le prix du produit (attention le total du prix ne vaut pas le total du prix de tout les produit mais la somme du prix d'un produit par exemple 4x le prix de la creme hydratante et pas 4x creme hydratant + 2x shampoo)
  else {
    $(this).data("totalprice", prevPrice + $(this).data("price"));
  }
  //on store dans le local storage toutes les donnees recolter (nom du produit ajouter, category, prix, total  du prix du produit, nombre de produit chaque donner est accessible par la clé associer (exemple `${$(this).attr("id")}TotalPrice`) est la cle pour avoir le prix total)
  localStorage.setItem(`${$(this).attr("id")}Name`, $(this).data("name"));
  localStorage.setItem(`${$(this).attr("id")}Price`, $(this).data("price"));
  //localStorage.setItem(`${$(this).attr("id")}Cat`, $(this).data("cat"));
  localStorage.setItem(`${$(this).attr("id")}Number`, $(this).data("count")); // (key, valeur) (produit1Number, 1)
  localStorage.setItem(
    `${$(this).attr("id")}TotalPrice`,
    $(this).data("totalprice")
  );
  console.log($(this).data("totalprice"));
});

//function pour vider le pannier /  remettre a 0 les compteur
$(".empty").click(function () {
  //on remet le nombre de click du boutton ajoute au panier a 0
  localStorage.setItem(`${$(this).data("name")}Number`, "0");
  //on remet le nombre de click du boutton ajoute au panier a 0
  $(this).data("count", "0");
  //on remet le prix total a 0
  localStorage.setItem(`${$(this).data("name")}TotalPrice`, "0");
  //on remet le prix total a 0
  $(this).data("totalprice", "0");
});

// let produit1Name = localStorage.getItem("produit1Name");
// let produit2Name = localStorage.getItem("produit2Name");
// let produit1Number  = localStorage.getItem("produit1Number");
// let produit2Number = localStorage.getItem("produit2Number");
// localStorage.getItem("test",)
// let prix = localStorage.getItem("totalPrice");
let itemsNames = [];

function viewShopping() {
  //avec la boucle on obtient les 21 cles possible et donc les produits associer a ces cle
  for (i = 1; i < 21; i++) {
    itemName = `${"produit" + i + "Name"}`;
    itemTotalPrice = `${"produit" + i + "TotalPrice"}`;
    itemPrice = `${"produit" + i + "Price"}`;
    itemNumber = `${"produit" + i + "Number"}`;

    itemNameValue = localStorage.getItem(itemName);
    itemTotalPriceValue = localStorage.getItem(itemTotalPrice);
    itemPriceValue = localStorage.getItem(itemPrice);
    itemNumber = localStorage.getItem(itemNumber);

    if (itemNameValue !== null) {
      itemsNames.push(itemNameValue);
    }
    console.log(itemNameValue);
  }
  for (i = 0; i < itemsNames.length; i++) {
    $("#cart").append(itemsNames[i]);
    //console.log(itemsNames[i]);
  }
}

viewShopping();


//SCROLL
document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      document.getElementById("navbar_top").classList.add("fixed-top");
      // add padding top to show content behind navbar
      navbar_height = document.querySelector(".navbar").offsetHeight;
      document.body.style.paddingTop = navbar_height + "px";
    } else {
      document.getElementById("navbar_top").classList.remove("fixed-top");
      // remove padding top from body
      document.body.style.paddingTop = "0";
    }
  });
});
