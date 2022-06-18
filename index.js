var container = document.getElementById('container');
var num=2;
var arr=[  "AliceBlue",
"AntiqueWhite",
"Aqua",
"Aquamarine",
"Azure",
"Beige",
"Bisque",
"Black",
"BlanchedAlmond",
"Blue",
"BlueViolet",
"Brown",
"BurlyWood",
"CadetBlue",
"Chartreuse",
"Chocolate",
"Coral",
"CornflowerBlue",
"Cornsilk",
"Crimson",
"Cyan",
"DarkBlue",
"DarkCyan",
"DarkGoldenRod",
"DarkGray",
"DarkGrey",
"DarkGreen",
"DarkKhaki",
"DarkMagenta",
"DarkOliveGreen",
"DarkOrange",
"DarkOrchid",
"DarkRed",
"DarkSalmon",
"DarkSeaGreen",
"DarkSlateBlue",
"DarkSlateGray",
"DarkSlateGrey",
"DarkTurquoise",
"DarkViolet",
"DeepPink",
"DeepSkyBlue",
"DimGray",
"DimGrey",
"DodgerBlue",
"FireBrick",
"FloralWhite",
"ForestGreen",
"Fuchsia",
"Gainsboro",
"GhostWhite",
"Gold",
"GoldenRod",
"Gray",
"Grey",
"Green",
"GreenYellow",
"HoneyDew",
"HotPink",
"IndianRed",
"Indigo",
"Ivory",
"Khaki",
"Lavender",
"LavenderBlush",
"LawnGreen",
"LemonChiffon",
"LightBlue",
"LightCoral",
"LightCyan",
"LightGoldenRodYellow",
"LightGray",
"LightGrey",
"LightGreen",
"LightPink",
"LightSalmon",
"LightSeaGreen",
"LightSkyBlue",
"LightSlateGray",
"LightSlateGrey",
"LightSteelBlue",
"LightYellow",
"Lime",
"LimeGreen",
"Linen",
"Magenta",
"Maroon",
"MediumAquaMarine",
"MediumBlue",
"MediumOrchid",
"MediumPurple",
"MediumSeaGreen",
"MediumSlateBlue",
"MediumSpringGreen",
"MediumTurquoise",
"MediumVioletRed",
"MidnightBlue",
"MintCream",
"MistyRose",
"Moccasin",
"NavajoWhite",
"Navy",
"OldLace",
"Olive",
"OliveDrab",
"Orange",
"OrangeRed",
"Orchid",
"PaleGoldenRod",
"PaleGreen",
"PaleTurquoise",
"PaleVioletRed",
"PapayaWhip",
"PeachPuff",
"Peru",
"Pink",
"Plum",
"PowderBlue",
"Purple",
"RebeccaPurple",
"Red",
"RosyBrown",
"RoyalBlue",
"SaddleBrown",
"Salmon",
"SandyBrown",
"SeaGreen",
"SeaShell",
"Sienna",
"Silver",
"SkyBlue",
"SlateBlue",
"SlateGray",
"SlateGrey",
"Snow",
"SpringGreen",
"SteelBlue",
"Tan",
"Teal",
"Thistle",
"Tomato",
"Turquoise",
"Violet",
"Wheat",
"White",
"WhiteSmoke",
"Yellow",
"YellowGreen",];

function block(color) {
    return '<div class="'+color+'"id="div3" onclick="box(this)" style="background:'+color+'"></div>';
}

function reset(){
    container.innerHTML = "";
}

var color=[];


function repeat(){
    var num=document.getElementById("number").value;
    if(num=="null" || num==0){
        num=2;
    }
    for (var i = 0; i < num/2; i++) {
        color.push(arr[Math.floor((Math.random() * 149) + 1)])
    }    
    color=color.concat(color);
    // alert(color);
    for (var i = 0; i < num; i++) {
        container.innerHTML += block(color[i]);
    }    
}



var check=[];
var score=0;




function box(ele){
    var id = $(ele).attr("class");
    check.push(id);
    ele.classList.add("border");

    if(check.length==2){
        // alert(check)
        if(check[0]==check[1]){
            var name=check[0];
            // document.getElementsByClassName(name).classList.add("invi");
            $("."+name).addClass("invi");
            score++;
            color.pop(check[1]);
            color.pop(check[0]);
            if($(".score").html()<score){
                $(".score").html(score);
            }
            $("."+check[0]).removeClass("border");
            $("."+check[1]).removeClass("border");
            check=[];
            if(color.length<=0){
                container.innerHTML = "";
                alert("Game Over")
            }
        }
    else{
        alert("Don't Match")
        $("."+check[0]).removeClass("border");
        $("."+check[1]).removeClass("border");
        check=[];

    }
    }
}



