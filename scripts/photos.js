function addLoadEvent(func){
    var oldonload = window.onload;
    if(typeof window.onload != "function"){
        window.onload = func;
    }else{
        window.onload = function(){
            oldonload();
            func();
        }
    }
}

function showimagegallery(){
    var iamgegalleryele = document.getElementById("p_imagegallery");
    var links = iamgegalleryele.getElementsByTagName("a");
    var placeholder = document.createElement("img");
    placeholder.setAttribute("src","images/photos/photo1-海贼王.gif");
    var parentelement = document.getElementsByTagName("article")[0];
    parentelement.insertBefore(placeholder,iamgegalleryele.nextSibling);
    for(var i=0,j=links.length;i<j;i++){
        (function(i){
            links[i].onclick = function(){
                placeholder.src = this.getAttribute("href");
                return false;
            }
        })(i)
    };
}
addLoadEvent(showimagegallery);