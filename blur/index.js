// DOM
const button = document.getElementById("addBtn");
const liText = document.getElementById("text");

const d = 3; //重ねる数

//1重目
const a1 = 10; //配置する角度の間隔
const r1 = 8; //配置する半径（太さ）
const b1 = 2; //ぼかし
const ox1 = 2; //オフセットx
const oy1 = 2; //オフセットy
const c1 = "#e95098"; //色


//2重目
const a2 = 7; //配置する角度の間隔
const r2 = 13; //配置する半径（太さ）
const b2 = 3; //ぼかし
const ox2 = 2; //オフセットx
const oy2 = 2; //オフセットy
const c2 = "#fff"; //色

//3重目
const a3 = 20; //配置する角度の間隔
const r3 = 20; //配置する半径（太さ）
const b3 = 10; //ぼかし
const ox3 = 6; //オフセットx
const oy3 = 6; //オフセットy
const c3 = "#000"; //色

const num1 = 360 / a1
const num2 = 360 / a2
const num3 = 360 / a3

// 小数nで四捨五入
function orgRound(value, base) {
    return Math.round(value * base) / base;
}

let str = '';
function listCircles() {
    
    for (var j = 0; j < d; j++) {

        if (j == 0) {
            var a = a1;
            var r = r1;
            var ox = ox1;
            var oy = oy1;
            var c = c1;
            var b = b1;
            var num = num1;
            
        };
        if (j == 1) {
            var a = a2;
            var r = r2;
            var ox = ox2;
            var oy = oy2;
            var c = c2;
            var b = b2;
            var num = num2;
            
        };
        if (j == 2) {
            var a = a3;
            var r = r3;
            var ox = ox3;
            var oy = oy3;
            var c = c3;
            var b = b3;
            var num = num3;
            
        };

        console.log("J" + j);

        for (var i = 0; i < num; i++) {
            
            const x =ox + r * Math.cos(a * i * (Math.PI / 180));
            const y =oy + r * Math.sin(a * i * (Math.PI / 180));

            str += orgRound(x, 100) + "px " +  orgRound(y, 100) + "px " + b + "px " + c + ", ";
            //console.log(str);
        };
        console.log("d");
    };

    let strSlice = str.slice(0, -2);
    liText.style.textShadow = strSlice;
};

button.addEventListener("click", listCircles);



