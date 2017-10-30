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

function hiddensection(){
    var sectionlists =  document.getElementsByTagName("section");
    for(var s=0,l=sectionlists.length;s<l;s++){
        sectionlists[s].style.display = "none";
    }
}

function showSection(){
    var aboutarticle = document.getElementsByTagName("article")[0];
    var articlenav = aboutarticle.getElementsByTagName("nav")[0];
    var links = articlenav.getElementsByTagName("a");
    hiddensection();
    for(var i=0,j=links.length;i<j;i++){
        (function(i){
                    links[i].onclick=function(){
                        hiddensection();
                        var ahref = links[i].getAttribute("href").split("#")[1];
                        document.getElementById(ahref).style.display = "block";
                }
        })(i)
    };
}
addLoadEvent(showSection);