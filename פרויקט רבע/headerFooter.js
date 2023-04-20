window.onload = function () {
    createHeader();
    createFooter();
    declareBtns();
    
}


function createHeader(){
    let div = document.createElement("div");
    div.className = "row justify-content-between";
    document.querySelector("#id_header").append(div);
    div.innerHTML = `
    <div class="logo col-6">
        <a href="index.html"><img src="images/logo1.png" width="150px"></a>
    </div>

    <nav id="nav_open" class="col-6 text-end align-self-center fw-bold">
        <a href="aboutUs.html">About Us</a>
        <a href="gallery.html"> Gallery </a>
        <a href="FAQ.html">FAQ </a>
        <a href="trivia.html">Trivia </a>
        <a href="contact.html">Contact Us </a>
    </nav>

    <div class="burger col d-md-none text-end">
        <i id="burger_btn" class="fa fa-bars" aria-hidden="true"></i>
    </div>
    </div>`;
}

function createFooter(){
    let div = document.createElement("div");
    div.className = "footer_box d-flex justify-content-between ";
    document.querySelector("#id_footer").append(div);
    div.innerHTML = 
    `<div class="d-flex copyright">
    <i class="fa fa-copyright py-2 px-1"></i>
    <p class="m-0 py-2"> Made by Anat Stauber, March 2023</p>
    </div>
    <div class="icons d-flex justify-content-around col-2 m-0 pt-2">
    <a
    <a class="m-0" href="https://www.youtube.com/" target="_blank"><i class="fa fa-youtube" style="color: #e44e55;"></i></a>
    <a class="m-0" href="https://www.facebook.com/" target="_blank"><i class="fa fa-facebook" style="color: #3161b4;"></i>
    <a class="m-0" href="https://www.instagram.com/" target="_blank"><i class="fa fa-instagram" style="color: #af468e;"></i></a>
    <a class="m-0" href="https://www.linkedin.com/" target="_blank" ><i class="fa fa-linkedin"></i></a>
    </div>`;
}