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

function insertAfter(newElement,targetElement){
    var parent = targetElement.parentNode;
    if(parent.lastNode == targetElement){
        parent.appendChild(newElement);
    }else{
        parent.insertBefore(newElement,targetElement.nextSibling);
    }
}

function slideshow(){
    var introele = document.getElementById("intro");
    var picbox =document.createElement("div");
    var picgroup = document.createElement("img");
    var picframe = document.createElement("img");
    picbox.appendChild(picgroup);
    picbox.appendChild(picframe);
    insertAfter(picbox,introele);
    picbox.id = "picboxid";
    picgroup.id = "picgroupid";
    picframe.id = "picframeid";
    picgroup.src = "images/nav/nav-图片集合.gif";
    picframe.src = "images/frame.png";
    var links = introele.getElementsByTagName("a");
    for(var i=0,j=links.length;i<j;i++){
        (function(i){
            links[i].onmouseover = function(){
                var distence = -(i+1)*150;
                picgroup.style.left = distence + "px";
            }
        })(i)
    };
}
addLoadEvent(slideshow);