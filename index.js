var container = document.getElementById('container');
var num=2;
var color=[];
var check=[];
var score=0;

var arr=[ "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine", "Azure", "Beige", "Bisque", "Black", "BlanchedAlmond", "Blue", "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse", "Chocolate", "Coral", "CornflowerBlue", "Cornsilk", "Crimson", "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray", "DarkGrey", "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange", "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue", "DarkSlateGray", "DarkSlateGrey", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue", "DimGray", "DimGrey", "DodgerBlue", "FireBrick", "FloralWhite", "ForestGreen", "Fuchsia", "Gainsboro", "GhostWhite", "Gold", "GoldenRod", "Gray", "Grey", "Green", "GreenYellow", "HoneyDew", "HotPink", "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LavenderBlush", "LawnGreen", "LemonChiffon", "LightBlue", "LightCoral", "LightCyan", "LightGoldenRodYellow", "LightGray", "LightGrey", "LightGreen", "LightPink", "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSlateGrey", "LightSteelBlue", "LightYellow", "Lime", "LimeGreen", "Linen", "Magenta", "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple", "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed", "MidnightBlue", "MintCream", "MistyRose", "Moccasin", "NavajoWhite", "Navy", "OldLace", "Olive", "OliveDrab", "Orange", "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise", "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink", "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red", "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown", "SeaGreen", "SeaShell", "Sienna", "Silver", "SkyBlue", "SlateBlue", "SlateGray", "SlateGrey", "Snow", "SpringGreen", "SteelBlue", "Tan", "Teal", "Thistle", "Tomato", "Turquoise", "Violet", "Wheat", "White", "WhiteSmoke", "Yellow", "YellowGreen",];



    // <-------------------------Square--------------------->
function block(color) {
    return '<div class="'+color+'"id="div3" onclick="box(this)" style="background:'+color+'"></div>';
}


    // <-------------------------Reset Button--------------------->
function reset(){
    container.innerHTML = "";
    num=2;
    color=[];
    check=[];
    score=0;
}




function repeat(){

    // <-------------------------for Check Validation of number--------------------->
    var num=document.getElementById("number").value;
    if(num=="null" || num==0 || num==1 ){
        num=2;
    }
    else if(num%2!=0){
        num++;
    }
    



    // <-------------------------for Color Selector--------------------->
    for (var i = 0; i < num/2; i++) {
        color.push(arr[Math.floor((Math.random() * 149) + 1)])
    }    
    color=color.concat(color);




    // <-------------------------Add Squares--------------------->
    for (var i = 0; i < num; i++) {
        container.innerHTML += block(color[i]);
    }    
}






    // <-------------------------To Check Which Box is Clicked-------------------->
function box(ele){
    var id = $(ele).attr("class");
    check.push(id);
    ele.classList.add("border");// Add border on clicked box



    // <-------------------------When User Click On Two Box--------------------->
    if(check.length==2){
        // check the Two box
        if(check[0]==check[1]){ //Color Same
            var name=check[0];


            $("."+name).addClass("invi"); // Display none of clicked box
            
            
            score++; //score plus

            color.pop(check[1]);color.pop(check[0]); //color popes from Color array
            
            
            
// <-------------------------To Check The Highest Score-------------------->
            
            if($(".score").html()<score){
                $(".score").html(score);
            }
            check=[]; // Set the Check to Empty
            if(color.length<=0){
                score=0;
                container.innerHTML = "";
                alert("Game Over")

            }
        }
    else{ // Color Not same
        alert("Don't Match")
        $("."+check[0]).removeClass("border");// Remove Border
        $("."+check[1]).removeClass("border");// Remove Border
        check=[];// Set the Check to Empty

    }
    }
}



