var loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", loginOpen);
function loginOpen() {
  var cLogin = document.querySelector("#closeloginbtna");
  var loginArea = document.querySelector("#MainContentLogin");
  loginArea.classList.add("DisplayTheactivness");
  // var cLogin = document.querySelector("#clogin")
  cLogin.style.display = "block";
}
var cLogin = document.querySelector("#closeloginbtna");
cLogin.addEventListener("click", loginClose);
function loginClose() {
  var loginArea = document.querySelector("#MainContentLogin");
  loginArea.classList.remove("DisplayTheactivness");
  cLogin.style.display = "none";
}

// --------------------------CA--R--T-----P--A---A-G---E--------------------------------------------------------------

var CartloginBtn = document.querySelector("#CartPage");
CartloginBtn.addEventListener("click", cartpageopne);
function cartpageopne() {
  var CloseCartBtn = document.querySelector("#CloseCartBtn");
  var CartPartArea = document.querySelector("#mainCartContantPagr");
  CartPartArea.classList.add("DisplayTheactivnessFrocart");
  // var CloseCartBtn = document.querySelector("#clogin")
  CloseCartBtn.style.display = "block";
}
var CloseCartBtn = document.querySelector("#CloseCartBtn");
CloseCartBtn.addEventListener("click", CartPartClose);
function CartPartClose() {
  var CartPartArea = document.querySelector("#mainCartContantPagr");
  CartPartArea.classList.remove("DisplayTheactivnessFrocart");
  CloseCartBtn.style.display = "none";
}

let searchquery = document.querySelector("#OneTimePassword");

searchquery.addEventListener("keypress", () => {
  if (event.key == "Enter") {
    getMobileNo();
  }
});

let getMobileNo = () => {
  let query = document.querySelector("#OneTimePassword").value;
  console.log(query);
  if (query == "123456") {
        alert("Sucessfully log in ");
        window.location.reload(); 
        // document.querySelector("#logintext").innerHTML="Profile"
        document.getElementById("confirmLogin").addEventListener("click", function(e) {
          alert("sucessfully logges in")
          // window.location.href = "../index.html"
          window.location.reload();
        })
       
      } else {
        alert("Please!! Enter a Valid Mobile 📱 Number");
      }
  
};

let otpseachquery = document.querySelector("#MobleNoInput");

otpseachquery.addEventListener("keypress", () => {
  if (event.key == "Enter") {
    getOtpNumbervaild();
  }
});

let getOtpNumbervaild = () => {
  let q2 = document.querySelector("#MobleNoInput").value;
  console.log(q2);
  if (q2.length == 10) {
    alert("123456 is the OTP ");
  } else if (q2.length > 10) {
    alert("Please!! Enter a Valid Mobile 📱 Number");
  }
};

// Cart-------------COMPLETED---------------------------itrm-------------------------

var cartLic = JSON.parse(localStorage.getItem("CartDetails")) || [];

var cont = document.querySelector("#lef");
var total = document.querySelector("#total");
var tItem = document.querySelector("#tItem");
var promo = document.querySelector("#promo");
var form = document.querySelector("#apply");
var checkout = document.querySelector("#dd");

var sum = 0;
var n = cartLic.length;
var c = 0;

displayDate(cartLic);

function displayDate(data) {
  data.forEach(function (el, index) {
    var count = 1;

    var candy = document.createElement("div");
    candy.setAttribute("id", "candy");
    candy.id = "candy";

    var imgDiv = document.createElement("div");
    var about = document.createElement("div");
    about.id = "about";

    var img = document.createElement("img");
    img.id = "pic";
    img.src = el.imgUrl;
    imgDiv.append(img);

    var brand = document.createElement("p");
    brand.innerText = el.name;

    var des = document.createElement("p");
    des.innerText = el.des;

    var price = document.createElement("p");
    price.innerText = "₹" + el.price;
    sum += +el.price;
    price.id = "price";

    about.append(brand, price);

    var remove = document.createElement("button");
    remove.innerText = "REMOVE";
    remove.id = "remove";
    remove.addEventListener("click", function () {
      event.target.parentNode.remove();
      data.splice(index, 1);
      sum -= +el.price;
      localStorage.setItem("CartDetails", JSON.stringify(cartLic));
      //  window.location.reload();
    });

    var inc = document.createElement("button");
    inc.innerText = "+";
    inc.id = "inc";
    inc.addEventListener("click", function () {
      n++;
      count++;
      sum += +el.price;
      tItem.innerText = n;
      qty.innerText = count;
      total.innerText = sum;
    });

    var qty = document.createElement("div");
    qty.innerText = count;
    qty.id = "count";

    var dec = document.createElement("button");
    dec.innerText = "-";
    dec.id = "dec";
    dec.addEventListener("click", function () {
      if (count > 1) {
        n--;
        count--;
        sum -= +el.price;
        tItem.innerText = n;
        qty.innerText = count;
        total.innerText = sum;
      }
    });

    total.innerText = `₹${sum}`;
    tItem.innerText = n;

    candy.append(imgDiv, about, inc, qty, dec, remove);
    cont.append(candy);
  });
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  c++;
  if (promo.value == "santosh" && c == 1) {
    sum -= sum * 0.3;
    total.innerText = sum;
  }
});

dd.onclick = function () {
  window.location.href = "../silly-authority-4051/Pages/paymentPage.html";
};