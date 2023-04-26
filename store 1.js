// body.style.backgroundColor="red"


// ==========================================================
// Dark mood
// ==========================================================

{// Dark mood
  const mybody = document.getElementById("body");
  const myheader = document.getElementsByTagName("header")[0];
  const mydark = document.querySelector(".icon-contrast");
  const mysections = document.querySelectorAll("section");
  const thetitle = document.querySelector(".title");
  const myfavbutton1 = document.querySelectorAll(".myfavbutton1");

  mydark.addEventListener("click", (eo) => {
    eo.target.classList.toggle("mytargetdark");
    mybody.classList.toggle("darkbody");
    myheader.classList.toggle("darkheader");
    thetitle.classList.toggle("thetitle");

    mysections.forEach((item) => {
      item.classList.toggle("sectionsdark");
    }); 0
    myfavbutton1.forEach((item) => {
      item.classList.toggle("myfavbutton1dark");
    });
  });
}
// ====================================================================
//         show and hide ul
// ====================================================================

{// show and hide ul
  const ulhed = document.getElementById("ulhed");
  const changecolor = document.getElementById("changecolor");

  changecolor.addEventListener("mousemove", (eo) => {
    // eo.target.style.display="block"
    ulhed.classList.add("myblock");
  });

  changecolor.addEventListener("mouseleave", (eo) => {
    // eo.target.style.display="block"
    ulhed.classList.remove("myblock");
  });
}

// ========================================================================
// ==================== when click buy ================================
// ========================================================================

// when click buy 

const btnprimary = document.querySelectorAll(".btn-primary")
// const congratulation=document.querySelector("#congratulation")
const parentcards = document.querySelector(".parentcards")
const showproducts = document.createElement("div")


btnprimary.forEach(item => {

  item.addEventListener("click", (eo) => {
    item.setAttribute("disabled", "")
    item.classList.add("colorbuy");
    item.innerHTML = "Done &#x2705;"

    const popup = document.createElement("div")
    body.prepend(popup)
    popup.classList.add("congratulation")
    popup.innerHTML = "congratulation &#129505;"



    setTimeout(() => {
      popup.style.transform = "translateX(-1500px)"
    }, 1000);
    setTimeout(() => {
      popup.remove()
    }, 2000);

    body.prepend(showproducts)
    showproducts.classList.add("showproducts")
    showproducts.innerHTML = "Show Products"


    const ourproduct = `<div class="product">

<button type="button" id="remove" class="remove">remove</button>
<span id="plackprice" class="plackprice">${eo.target.parentElement.getElementsByTagName("span")[0].innerHTML}</span>
<div class="Quantity">
  <h4>Quantity</h4>
  <input type="number" min="1" value="1" class="inputvalue">
</div>
<div class="thepro">
  <p class="nameproduct">${eo.target.parentElement.parentElement.getElementsByTagName("h4")[0].innerHTML}</p>
  <img src="${eo.target.parentElement.parentElement.parentElement.getElementsByTagName("img")[0].src}" alt="product" width:"120px">

</div>
  </div>`;
    const allproduct = document.querySelector(".allproduct")

    allproduct.innerHTML += ourproduct

    information()
    eo.preventDefault()

  })

});

const blackscreen = document.querySelector(".blackscreen")
const cross = document.querySelector(".cross")

cross.addEventListener("click", (eo) => {
  // blackscreen.remove()
  eo.target.parentElement.style.transform = " translateX(-200vh)"
})


showproducts.addEventListener("click", (eo) => {
  blackscreen.style.transform = "translateX(0)";
})



//===== this way correct when elements found in html file only ========
// const remove=document.querySelectorAll(".remove")

//   remove.forEach(item => {
//     item.addEventListener("click",(eo) => {
//       eo.target.parentElement.remove()
//     })
//   });


//===== this way correct when elements created by js file only ========

const allproduct = document.querySelector(".allproduct")
const remove = document.querySelectorAll(".remove")

allproduct.addEventListener("mouseup", (eo) => {

  // if (eo.target.classList == "remove") {
    if (eo.target.classList.contains("remove")) {

    eo.target.parentElement.remove()

    information()

    const card=document.querySelectorAll(".card")

    card.forEach(item => {
  
 const deletedproduct=eo.target.parentElement.getElementsByClassName("nameproduct")[0].innerText
 const ourcards= item.getElementsByClassName("card-title")[0].innerHTML

if (ourcards==deletedproduct) {
item.getElementsByClassName("btn")[0].removeAttribute("disabled")
item.getElementsByClassName("btn")[0].innerHTML="Buy"
item.getElementsByClassName("btn")[0].classList.remove("colorbuy")
}
  })
}
  })










// ====================== get sum total ===================
  const information = (eo) => {

    const allproductblack = document.querySelectorAll(".product")
    // const sum=document.querySelector("#sum")
    let total = 0

    allproductblack.forEach(item => {
      const plackprice = Number(item.querySelector(".plackprice").innerHTML.replace("$", ""))
      const quantity = Number(item.querySelector(".inputvalue").value)
      total = total + (plackprice * quantity)
    });
    document.querySelector("#sum").innerText = ` $ ${total} `

    }



    allproduct.addEventListener("change", (eo) => {
      information()
    })
 
