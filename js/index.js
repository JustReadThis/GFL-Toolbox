const mediaQueryList = window.matchMedia('(max-width: 640px)');
var img_file = document.getElementsByTagName('img');
for (var i = 0, max = img_file.length; i < max; i++) {
var img_file_i = img_file[i]
if(mediaQueryList.matches) {
       
    var img_H= ((img_file_i.clientHeight) ) +"px"
    var img_W= ((img_file_i.clientWidth) * 2) +"px"
 
    img_file_i.style["background-size"] = img_W + " " + img_H;
}
else {
   
img_file_i.style["width"] = "20px";
img_file_i.style["height"] = "20px";
};

}
var iiimg_H=(img_file.width * -1) +"px"


function Sprite_MouseOut(tdollimg) {
    tdollimg.style.backgroundPosition = "0px 0px";
};

function Sprite_MouseOver(tdollimg) {
    console.log("asdf"+tdollimg.clientWidth)
    var tdollimg_W = (tdollimg.clientWidth  * -1) + "px"
    tdollimg.style.backgroundPosition = tdollimg_W+ " " + "0px";
};