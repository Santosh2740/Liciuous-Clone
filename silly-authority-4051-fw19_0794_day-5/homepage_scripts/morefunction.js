
let homeappend=(data,container)=>{
    data.forEach(({img,title})=>{
        let div=document.createElement("div");
        div.addEventListener("click",()=>{
            onhome2();
        })

        let onhome2=()=>{
            if(title=="Today's Deal"){
                window.location.href="../../silly-authority-4051-Fw18_0291-Day-5/vk1_todays_deal.html"
            }else if(title=="Chicken"){
                window.location.href="../../silly-authority-4051-fw18_1115_day-5/vk2_chicken.html"
            }else if(title=="Fish & Seafood"){
                window.location.href="../../silly-authority-4051-fw18_1115_day-5/vk3_fish.html"
            }else if(title=="Mutton"){
                window.location.href="../../silly-authority-4051-fw18_1115_day-5/vk4_mutton.html"
            }else if(title=="Ready to Cook"){
                window.location.href="../../silly-authority-4051-fw18_1115_day-5/vk5_ready_to_cook.html"
            }else if(title=="Prawns"){
                window.location.href="../../silly-authority-4051-fw18_1115_day-5/vk6_prawn.html"
            }else if(title=="Cold Cuts"){
                window.location.href="../../silly-authority-4051-fw18_1115_day-5/vk7_cold_cuts.html"
            }else if(title=="Spreads"){
                window.location.href="../../silly-authority-4051-fw18_1115_day-5/vk8_spreads.html"
            }else if(title=="Eggs"){
                window.location.href="../../silly-authority-4051-fw18_1115_day-5/vk9_eggs.html"
            }else if(title=="Biryani & Kebab"){
                window.location.href="../../silly-authority-4051-fw18_1115_day-5/vk10_biryani_kabab.html"
            }else if(title=="Combos"){
                window.location.href="../../silly-authority-4051-fw18_1115_day-5/vk11_combos.html"
            }else if(title=="Featured Collections"){
                window.location.href="../../silly-authority-4051-fw18_1115_day-5/vk12_featured_clctn.html"
            }
        }

        let image=document.createElement("img");
        image.src=img;
        let h2=document.createElement("p");
        h2.innerText=title;
        div.append(image,h2);
        container.append(div)
        // console.log(data)
    });
}

export default homeappend;