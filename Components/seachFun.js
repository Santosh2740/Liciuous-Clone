let searchfun = () => {
  let searchquery = document.querySelector("#search_bar");

  searchquery.addEventListener("keypress", () => {
    if (event.key == "Enter") {
      pressing();
    }
  });

  let pressing = async () => {
    let query = document.querySelector("#search_bar").value;
    query.toLowerCase();
    let res = await fetch(`https://safe-eyrie-39519.herokuapp.com/licious/${query}`);
    let data = await res.json();
    console.log(data);
    localStorage.setItem("searchresult", JSON.stringify(data));
    console.log(query);
    window.location.href =
      "./HomePage/searchdata.html";
  };
};

export { searchfun };
