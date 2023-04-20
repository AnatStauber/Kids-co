const lightBox_init = function () {
    createLightBoxHtml();
    createImgList();
    declareEvents();
  }

  let imgList;

  const createLightBoxHtml = function () {
    document.body.innerHTML += `
    <div id="light_box" class="light_box">
    <div class="inside_box">
      <img src="images/baby1.jpg" >
      <p> </p>
      <button>close</button>
    </div>
    </div>
    `
  }

  const createImgList=function(){
    imgList = document.querySelectorAll(".lb_img");
    document.addEventListener("DOMNodeInserted",function(){
        imgList= document.querySelectorAll(".lb_img");
        
        if (imgList.length==pics_ar.length){
          imgList.forEach(function (itemElem) {           
            itemElem.addEventListener("click", function () {
            let light_box = document.querySelector("#light_box");
            light_box.style.display = "flex"
            light_box.querySelector("img").src = itemElem.src;
            light_box.querySelector("p").innerHTML = itemElem.alt;
        })
      })
    }
      
        // console.log(imgList);
  });
  };


  const declareEvents = function () {
    let close_light_btn = document.querySelector("#light_box button");
    close_light_btn.addEventListener("click", function () {
      document.querySelector("#light_box").style.display = "none"
    })
    };
    
  
  lightBox_init();