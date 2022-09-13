
import navbar from "../../Components/navbar.js";
// console.log(navbar());
document.getElementById("navbar").innerHTML = navbar();

  
let searchquery=document.querySelector("#search_bar")
   
   searchquery.addEventListener("keypress",()=>{
       if(event.key=="Enter"){
       pressing();
       }
   })
   
   
   let pressing=async()=>{
       let query=document.querySelector("#search_bar").value;
       query.toLowerCase()
       let res = await fetch(`http://localhost:3000/api/${query}`);
       let data = await res.json();
       console.log(data);
       localStorage.setItem("searchresult",JSON.stringify(data))
       console.log(query)
    //    window.location.href=".././searchdata.html"
   }




   let data=JSON.parse(localStorage.getItem("searchresult"));
   console.log(data)


   // function appendsearchvalue(value) {
   let searchcontainer = document.getElementById("searchcontainer");
   searchcontainer.innerHTML = null;
   data.forEach( (val) => {
     
     let name = document.createElement("p");
     name.innerHTML = val.name;
     name.setAttribute("id","searchtitle")

     let image = document.createElement("img");
     image.src = val.imgUrl;
     image.setAttribute("id","searchimage")

     let price = document.createElement("p");
     price.innerHTML = "₹" + val.price;
     price.setAttribute("id","searchprice")

       let but=document.createElement("button")
       but.innerText="ADD TO CART"
       but.setAttribute("id","searchbut")

       let box1=document.createElement("div")
       box1.append(image)
       box1.setAttribute("id","box1s")

       let box2=document.createElement("div")
       box2.append(name,price)
       box2.setAttribute("id","box2s")

       let box3=document.createElement("div")
       box3.append(but)
       box3.setAttribute("id","box3s")

       let bigbox = document.createElement("div");
       bigbox.setAttribute("id","bigboxs")

       bigbox.append(box1,box2,box3)
       bigbox.addEventListener("click",()=>{
           window.location.href=""
       })
       searchcontainer.append(bigbox)
   //   div.append(image, name, price, rating);

    //  box.append(div);
   });