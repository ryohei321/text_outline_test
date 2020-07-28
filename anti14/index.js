// DOM
const button = document.getElementById("addBtn");
const liText = document.getElementById("text");

const d = 4; //重ねる数

//1重目
const a1 = 20; //配置する角度の間隔
const r1 = 3; //配置する半径（太さ）
const b1 = 1; //ぼかし
const ox1 = 0; //オフセットx
const oy1 = 0; //オフセットy
const c1 = "#e95098"; //色


//2重目
const a2 = 24; //配置する角度の間隔
const r2 = 4; //配置する半径（太さ）
const b2 = 2; //ぼかし
const ox2 = 0; //オフセットx
const oy2 = 0; //オフセットy
const c2 = "rgb(233, 80, 152,0.5)"; //色

//3重目
const a3 = 15; //配置する角度の間隔
const r3 = 5; //配置する半径（太さ）
const b3 = 2; //ぼかし
const ox3 = 0; //オフセットx
const oy3 = 0; //オフセットy
const c3 = "#fff"; //色

//4重目
const a4 = 20; //配置する角度の間隔
const r4 = 6; //配置する半径（太さ）
const b4 = 1; //ぼかし
const ox4 = 0; //オフセットx
const oy4 = 0; //オフセットy
const c4 = "rgb(255, 255, 255,0.5)"; //色

//5重目
const a5 = 24; //配置する角度の間隔
const r5 = 6; //配置する半径（太さ）
const b5 = 1; //ぼかし
const ox5 = 0; //オフセットx
const oy5 = 0; //オフセットy
const c5 = "rgb(255, 255, 255,0.5)"; //色


const num1 = 360 / a1
const num2 = 360 / a2
const num3 = 360 / a3
const num4 = 360 / a4
const num5 = 360 / a5

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
        if (j == 3) {
            var a = a4;
            var r = r4;
            var ox = ox4;
            var oy = oy4;
            var c = c4;
            var b = b4;
            var num = num4;
            
        };
        if (j == 4) {
            var a = a5;
            var r = r5;
            var ox = ox5;
            var oy = oy5;
            var c = c5;
            var b = b5;
            var num = num5;
            
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



