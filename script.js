// Get Background Color of Parent
function get_bg_color(getchild){
    const elem = getchild.parentElement;
    // get parent bg color
    bgcolor = getComputedStyle(elem).backgroundColor;
    // return color of block
    return bgcolor;
}
  
// simple random func to get random int number
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Random Notice Popup Copied Title 
function randomtitle(){
    // titles list
    const title = ["PASTE ME!","GOT IT!","COPIED!","RIGHT ONE!","WILL DO!","IT'LL ROCK!"];
    // get length of title list
    let length = title.length;
    // get random number from 0 to length of title list
    let random = getRandomInt(length);
    // return of random title 
    return title[random];
}

// Notice Popup Copied
function color_popup(color){
    // element of popup div style
    const pelem =  document.getElementById("notice-copied").style;
    // change popup bg color
    pelem.backgroundColor = color;
    // change popup title (random)
    document.getElementById('notice-copied-title').innerHTML = randomtitle();
    // show popup
    pelem.display = "block";
    // hide popup after 1s
    setTimeout(function(){
        pelem.display = "none";
    }, 1000);
}



// what is the color format ?? to defult is hex with #
let witf = "hhex";


// get format color
function getcolorf(format){
    
    // all color format in obj
    const foramtlist = {
        hhex:{
            title:"HEX ( #3498db )",
            type:"hhex"
        },
        hex:{
            title:"HEX ( 3498db )",
            type:"hex"
        },
        rgb:{
            title:"RGB ( rgb(52, 152, 219) )",
            type:"rgb"
        },
        rgba:{
            title:"RGBA ( rgba(52, 152, 219,1.0) )",
            type:"rgba"
        },
    };
    // switch color formats
    let choiceforamt;
    switch(format) {
        case "hhex":
            choiceforamt = foramtlist.hhex;
            break;
        case "hex":
            choiceforamt = foramtlist.hex;
            break;
        case "rgb":
            choiceforamt = foramtlist.rgb;
            break;
        case "rgba":
            choiceforamt = foramtlist.rgba;
            break;
    
        default:
            choiceforamt = foramtlist.hhex;
      }
    // change text of btn
    document.getElementById("colorformattext").innerHTML =choiceforamt.title;
   // return color format
    return witf = choiceforamt.type;

} 



// convert 255 format to ff format
function componentToHex(code) {
    var hex = code.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}
  
// convert rgb to hex
function rgbtoHex(color) {
    let rgb,r,g,b;
    // rgb(r,g,b) to r,g,b
    rgb = color.replace("rgb(","").replace(")","");
    // spliting r,g,b to r g b
    rgb = rgb.split(",");

    r = parseInt(rgb[0]);
    g = parseInt(rgb[1]);
    b = parseInt(rgb[2]);
    return componentToHex(r) + componentToHex(g) + componentToHex(b);
}
// Copy to Clipboard
function toclipboard(colorname){

    // switch color formats
    let text;
    switch(witf) {
        
        case "hhex":
            text = "#" + rgbtoHex(colorname);
            break;
        case "hex":
            text = rgbtoHex(colorname);
            break;
        case "rgb":
            text = colorname;
            break;
        case "rgba":
            text = colorname.replace("rgb(","rgba(").replace(")",", 1)");
            break;
    
        default:
            text = "#" + rgbtoHex(colorname);
      }

    navigator.clipboard.writeText(text);
}

// get color format  
document.addEventListener('click', function handleClickOutsideBox(event) {
    // select ul of option
    const ul = document.querySelector('header div:nth-child(2) ul');
    // select btn of color format menu
    const box = document.querySelector('header div:nth-child(2) .color-format');
    // if click on color format btn
    if (box.contains(event.target)) {
        // if twice click in btn
        if (ul.style.visibility == 'visible'){
            ul.style.visibility = 'hidden';
        }else{ // show color format menu
            ul.style.visibility = 'visible';
        }
    }
    // if click in outside of menu; the menu is hidden 
    else if (!box.contains(event.target) && !ul.contains(event.target)){
        ul.style.visibility = 'hidden';
    }

   }
  
);

function func(getchild){

    // copy to clipboard
    toclipboard(get_bg_color(getchild))
    // Show Notice Popup
    color_popup(get_bg_color(getchild));

}




