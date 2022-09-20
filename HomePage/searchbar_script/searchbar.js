import navbar from "../../Components/navbar.js";
// console.log(navbar());
document.getElementById("navbar").innerHTML = navbar();

import footerTal from "../../Components/footer.js";

document.getElementById("footer").innerHTML = footerTal();

let searchquery = document.querySelector("#search_bar");

searchquery.addEventListener("keypress", () => {
  if (event.key == "Enter") {
    pressing();
  }
});

let pressing = async () => {
  let query = document.querySelector("#search_bar").value;
  query.toLowerCase();
  let res = await fetch(
    `https://safe-eyrie-39519.herokuapp.com/licious/${query}`
  );
  let data = await res.json();
  console.log(data);
  localStorage.setItem("searchresult", JSON.stringify(data));
  console.log(query);
  window.location.href = "./searchdata.html";
};

let data = JSON.parse(localStorage.getItem("searchresult"));
console.log(data);
_eggdata(data);

function _eggdata(eggdata) {
  eggdata.map(function (elem) {
    var main = document.createElement("div");
    main.setAttribute("class", "main");
    var img = document.createElement("img");
    img.setAttribute("src", elem.imgUrl);
    img.setAttribute("class", "image");

    var name = document.createElement("h4");
    name.innerText = elem.name;
    var des = document.createElement("p");
    des.setAttribute("class", "des");
    des.innerText = elem.des;
    var wgt = document.createElement("div");
    wgt.setAttribute("class", "wgt");
    var net_tag = document.createElement("h6");
    net_tag.innerText = elem.net_tag;

    var net = document.createElement("h6");
    net.innerText = elem.net;
    var n_gm = document.createElement("h6");
    n_gm.innerText = elem.unit;

    var gross_tag = document.createElement("h6");
    gross_tag.innerText = elem.gross_tag;
    var gross = document.createElement("h6");
    gross.innerText = elem.gross;
    var g_gm = document.createElement("h6");
    g_gm.innerText = elem.unit;

    var hold = document.createElement("div");
    hold.setAttribute("class", "hold");

    var pri = document.createElement("div");
    pri.setAttribute("class", "pri");
    var price_tag = document.createElement("h5");
    price_tag.innerText = elem.price_tag;
    var currency = document.createElement("h5");
    currency.innerText = elem.currency;
    var price = document.createElement("h5");
    price.innerText = elem.price;
    var strikePrice = document.createElement("strike");
    strikePrice.innerText = `₹${elem.strikePrice}`;
    var btndiv = document.createElement("div");
    btndiv.setAttribute("class", "btndiv");
    var addCart = document.createElement("button");
    addCart.setAttribute("class", "addcartbtn");
    addCart.innerHTML = "Add to Cart";

    addCart.addEventListener("click", function () {
      window.location.href =
        "../silly-authority-4051-Fw18_0291-Day-5/Product_pages.html";
    });

    wgt.append(net_tag, net, n_gm, gross_tag, gross, g_gm);
    pri.append(price_tag, currency, price, strikePrice, addCart);
    // btndiv.append(addCart)

    main.append(img, name, des, wgt, pri);
    //   document.getElementById(searchcontainer).append(main)
    // main2.innerHTML = null;
    // let main2 = searchcontainer;

    searchcontainer.append(main);
  });
}
