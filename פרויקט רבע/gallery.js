let pics_ar = ["baby1.jpg","baby2.jpg","baby3.jpg","boys1.jpg","boys2.jpg","boys8.jpg","boys7.jpg","boys5.jpg","boys11.jpg","girls1.jpg","girls4.jpg","girls7.jpg","girls3.jpg","girls5.jpg","kids1.jpg"];

window.onload = function(){
    createGallery();
    createHeader();
    createFooter();
    declareBtns();
}

function createGallery(){
  for(let i = 0; i < pics_ar.length; i++){
    newimg = document.createElement("img");
    newimg.setAttribute("class", "lb_img");
    newimg.setAttribute("src", `images/${pics_ar[i]}`);
    newimg.setAttribute("height", "270");
    newimg.setAttribute("width", "200");
    newimg.setAttribute("alt", `${pics_ar[i]}`);
    document.querySelector(".gallery").append(newimg);
  }


}

