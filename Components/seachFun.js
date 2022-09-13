let searchfun = () =>{

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
       window.location.href="./silly-authority-4051-fw19_0794_day-5/searchdata.html"
   }

}

export{searchfun}