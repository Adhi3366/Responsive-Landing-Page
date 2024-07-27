const subhead1 = document.getElementById("subhead1");
const subhead2 = document.getElementById("subhead2");
const subhead3 = document.getElementById("subhead3");
const subhead4 = document.getElementById("subhead4");
const subhead5 = document.getElementById("subhead5");
const dropdown = document.getElementById("dropdowncontent");
const dropdown2 = document.getElementById("dropdowncontent2");
const dropdown3 = document.getElementById("dropdowncontent3");
const dropdown4 = document.getElementById("dropdowncontent4");
const dropdown5 = document.getElementById("dropdowncontent5");
const mianintro = document.querySelector(".main-intro")
subhead1.addEventListener("mouseenter",()=>{
    dropdown.style.opacity = "1";
    dropdown.style.animation = "ease in-out .3s";
    mianintro.style.filter = "blur(5px)";

});
subhead1.addEventListener("mouseleave",()=>{
    dropdown.style.opacity = "0";
    dropdown.style.animation = " ease in-out .3s";
    mianintro.style.filter = "blur(0px)";
});
subhead2.addEventListener("mouseenter",()=>{
    dropdown2.style.opacity = "1";
    dropdown2.style.animation = "ease in-out .3s";
    mianintro.style.filter = "blur(5px)";
});
subhead2.addEventListener("mouseleave",()=>{
    dropdown2.style.opacity = "0";
    dropdown2.style.animation = " ease in-out .3s";
    mianintro.style.filter = "blur(0px)"
});
subhead3.addEventListener("mouseenter",()=>{
    dropdown3.style.opacity = "1";
    dropdown3.style.animation = "ease in-out .3s";
    mianintro.style.filter = "blur(5px)";
});
subhead3.addEventListener("mouseleave",()=>{
    dropdown3.style.opacity = "0";
    dropdown3.style.animation = " ease in-out .3s";
    mianintro.style.filter = "blur(0px)";
});
subhead4.addEventListener("mouseenter",()=>{
    dropdown4.style.opacity = "1";
    dropdown4.style.animation = "ease in-out .3s";
    mianintro.style.filter = "blur(5px)";
});
subhead4.addEventListener("mouseleave",()=>{
    dropdown4.style.opacity = "0";
    dropdown4.style.animation = " ease in-out .3s";
    mianintro.style.filter = "blur(0px)"
});
subhead5.addEventListener("mouseenter",()=>{
    dropdown5.style.opacity = "1";
    dropdown5.style.animation = "ease in-out .3s";
    mianintro.style.filter = "blur(5px)";
});
subhead5.addEventListener("mouseleave",()=>{
    dropdown5.style.opacity = "0";
    dropdown5.style.animation = " ease in-out .3s";
    mianintro.style.filter = "blur(0px)";
});
document.addEventListener("DOMContentLoaded",function(){
    setInterval(switchvisibility,3000)
})
function switchvisibility(){
    var visibleh5 = document.getElementById("slide1");
    var invisibleh5 = document.getElementById("slide2");
    if(visibleh5.style.display ==="block"){
        visibleh5.style.display ="none";
        invisibleh5.style.display = "block";
    } 
    else{
        visibleh5.style.display ="block";
        invisibleh5.style.display = "none";
    }
}
const carosel = document.querySelector(".slider");

 let isDragstart = false, prevpageX, prevscrollLeft;

const dragstrat = (e) =>{
    isDragstart = true;
    prevpageX = e.pageX;
    prevscrollLeft = carosel.scrollLeft;
    e.preventDefault();
    console.log("mouse down");
}

const dragging = (e)=>{
    if(! isDragstart) return;
    let positiondif = e.pageX - prevpageX;
    carosel.scrollLeft = prevscrollLeft - positiondif;
    console.log("mouse move");
}
const dragstop = () =>{
    isDragstart = false;
    console.log("mouse up");
}

carosel.addEventListener("mousemove",dragging);
carosel.addEventListener("mousedown",dragstrat);
carosel.addEventListener("mouseup",dragstop);

const leftarrow = document.getElementById("leftarrow");
const rightarrow = document.getElementById("rightarrow");

let imageindex = 0;

rightarrow.addEventListener("click",()=>{
    imageindex = (imageindex+1) % carosel.children.length;
    updatecarousel();
    console.log(imageindex);
})
leftarrow.addEventListener("click",()=>{
    imageindex = (imageindex-1+carosel.children.length) % carosel.children.length;
    updatecarousel();
})
function updatecarousel(){
    const slidewidth = carosel.children[0].offsetWidth;
    const offset = imageindex * slidewidth;
    carosel.scrollLeft = offset;
    if (imageindex>=1){
        leftarrow.style.display = "flex";
    }
    else{
        leftarrow.style.display = "none";
    }
    
}
const carousel = document.querySelector(".images");
carousel.addEventListener("click",()=>{
    console.log("clicked");
})
const dragstrat1 = (e) =>{
    isDragstart = true;
    prevpageX = e.pageX;
    prevscrollLeft = carousel.scrollLeft;
    e.preventDefault();
}

const dragging1 = (e)=>{
    if(! isDragstart) return;
    let positiondif = e.pageX - prevpageX;
    carousel.scrollLeft = prevscrollLeft - positiondif;
}
const dragstop1 = () =>{
    isDragstart = false;
}

carousel.addEventListener("mousemove",dragging1);
carousel.addEventListener("mousedown",dragstrat1);
carousel.addEventListener("mouseup",dragstop1);



const left1 = document.getElementById("left2");
const right1 = document.getElementById("right2");

let index = 0;

right1.addEventListener("click",()=>{
    index = (index+1) % carousel.children.length;
    updatecarousel1();
    console.log(index);
})
left1.addEventListener("click",()=>{
    index = (index-1+carousel.children.length) % carousel.children.length;
    updatecarousel1();
})
function updatecarousel1(){
    const width = carousel.children[0].offsetWidth;
    const offset1 = index * width;
    carousel.scrollLeft = offset1;
}

const accordion = document.getElementsByClassName("contentbox")
for(i=0;i<accordion.length;i++){
    accordion[i].addEventListener("click",function(){
        this.classList.toggle('active');
    })
    
}
