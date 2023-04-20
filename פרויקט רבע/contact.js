window.onload=function(){
    declareEvents();
    createHeader();
    createFooter();
    declareBtns();
}



function declareEvents(){
let form = document.querySelector("#id_form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    let name= document.querySelector("#id_name").value;
    let mail = document.querySelector("#id_email").value;
    alert("thanks, "+name + ". Our response will be sent to you to your e-mail address: " + mail + " within 3-5 days.");
    form.reset();
    return;
});
}

