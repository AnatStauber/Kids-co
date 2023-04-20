function onMore(){
    document.querySelector("#id_btn").style.display="none";
    document.querySelector("#id_more").style.display="block";
    document.querySelector("#id_more").innerHTML =`<p> Jane Elfers has been President & Chief Executive Officer since 2010. Jane quickly established four Strategic Growth Initiatives for the company to maximize our long-term potential: Superior Product, Business Transformation through Technology, Alternate Channels of Distribution and Fleet Optimization. In order to support our key strategic initiatives, Jane also established a best in class management team and a foundation of operational excellence. Our successful execution of these four Strategic Growth Initiatives have transformed Kids&co from what was a predominately Brick and Mortar North American retailer when Jane arrived, to the Global Best in Class Omni Channel Kids Specialty Retailer that we are today!</p>`
    document.querySelector("#id_more").innerHTML += `<button class="mt-2 btn btn-dark" onclick="onLess()">Close</button>`
}

function onLess(){
    document.querySelector("#id_more").style.display="none"
    document.querySelector("#id_btn").style.display="inline"
}