let text = "  donefezy@gmail.com  ";
let result = text.repeat (999);

document.getElementById("marquee").innerHTML = result;


var viewMode = getCookie("view-mode");
if(viewMode == "desktop"){
    viewport.setAttribute('content', 'width=1024');
}else if (viewMode == "mobile"){
    viewport.setAttribute('content', 'width=device-width,initial-scale=1.0,maximum-scale=1.0,user-scalable=no');
}
