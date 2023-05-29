let x = 30, y = 30, fillX = 0, fillY = 0, allow = 0, allow2 = 0, allow3 = 0, red = null, green = null, blue = null, n = 0, rireki = "rgb(" + red + "," + green + "," + blue + ")", log, missLock = 1, fillMode = 0, canvas;


function setup() {
  canvas = createCanvas(600, 600);
  canvas.parent("display");
  log = "/*Processingドット絵作成ツールを使って頂きありがとうございます！*/\n/*実行後にSキーを押すことでPNGファイルとして保存できます*/\n/*Processing pixel art maker 2023 (ersion 1.27)*/\n\nfloat dotWidth = 10; //１ドットの横幅\nfloat dotHeight = 10; //１ドットの縦幅\n\nvoid setup(){\n  size(300, 300); //表示サイズ\n  background(255); //背景色\n  noStroke(); //ドット枠線なし\n}\n\nvoid draw(){\n\n/*ここからドット絵のデータです*/\n";
  document.getElementById("code").value = log + '\n/*ここまでドット絵のデータです*/\n\n}\n\n/*ここから画像の保存に関するコードです*/\n\nvoid keyPressed(){\n  if(keyCode == 83){\n    save("untitled.png"); //画像のファイル名\n  }\n}';
  document.getElementById("name").value = "untitled";
  document.getElementById("red").value = "0";
  document.getElementById("green").value = "0";
  document.getElementById("blue").value = "0";
}


function draw() {
  for(let i = 0; i <= 30; i ++){
    stroke(30);
    line(0, i * 20, 600, i * 20);
  }
  for(let i = 0; i <= 30; i ++){
    stroke(30);
    line(i * 20, 0, i * 20, 600);
  }
  if(allow == 1){
    allow = 0;
    rect(x * 20, y * 20, 20, 20);
  }
  if(allow2 == 1){
    allow2 = 0;
    stroke(255, 0, 0);
    fill(255);
    rect(x * 20, y * 20, 20, 20);
    line(x * 20, y * 20, (x * 20) + 20, (y * 20) + 20);
    line(x * 20, (y * 20) + 20, (x * 20) + 20, y * 20);
    noStroke();
    log += " //ミスタッチ";
    document.getElementById("code").value = log;
    x = 30;
    y = 30;
  }
  if(allow3 == 1){
    allow3 = 0;
    rect(x * 20, y * 20, 20 * (fillX - x + 1), 20 * (fillY - y + 1));
    x = 30;
    y = 30;
  }
  if(keyIsPressed){
    red = document.getElementById("red").value;
    green = document.getElementById("green").value;
    blue = document.getElementById("blue").value;
    if((red == "") || (red <= 0)){
      red = 0;
    }
    else if((red > 0) && (red < 255)){}
    else if((red >= 255)){
      red = 255;
    }
    else{
      red = 0;
    }
    if((green == "") || (green <= 0)){
      green = 0;
    }
    else if((green > 0) && (green < 255)){}
    else if((green >= 255)){
      green = 255;
    }
    else{
      green = 0;
    }
    if((blue == "") || (blue <= 0)){
      blue = 0;
    }
    else if((blue > 0) && (blue < 255)){}
    else if((blue >= 255)){
      blue = 255;
    }
    else{
      blue = 0;
    }
    document.getElementById("color").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
  }
}


function mouseClicked(){
  if((mouseX <= 600) && (mouseY <= 600) && (mouseX >= 0) && (mouseY >= 0) && (fillMode == 0)){
    if(mouseX >= 580){
      x = 29;
    }else if(mouseX >= 560){
      x = 28;
    }else if(mouseX >= 540){
      x = 27;
    }else if(mouseX >= 520){
      x = 26;
    }else if(mouseX >= 500){
      x = 25;
    }else if(mouseX >= 480){
      x = 24;
    }else if(mouseX >= 460){
      x = 23;
    }else if(mouseX >= 440){
      x = 22;
    }else if(mouseX >= 420){
      x = 21;
    }else if(mouseX >= 400){
      x = 20;
    }else if(mouseX >= 380){
      x = 19;
    }else if(mouseX >= 360){
      x = 18;
    }else if(mouseX >= 340){
      x = 17;
    }else if(mouseX >= 320){
      x = 16;
    }else if(mouseX >= 300){
      x = 15;
    }else if(mouseX >= 280){
      x = 14;
    }else if(mouseX >= 260){
      x = 13;
    }else if(mouseX >= 240){
      x = 12;
    }else if(mouseX >= 220){
      x = 11;
    }else if(mouseX >= 200){
      x = 10;
    }else if(mouseX >= 180){
      x = 9;
    }else if(mouseX >= 160){
      x = 8;
    }else if(mouseX >= 140){
      x = 7;
    }else if(mouseX >= 120){
      x = 6;
    }else if(mouseX >= 100){
      x = 5;
    }else if(mouseX >= 80){
      x = 4;
    }else if(mouseX >= 60){
      x = 3;
    }else if(mouseX >= 40){
      x = 2;
    }else if(mouseX >= 20){
      x = 1;
    }else{
      x = 0;
    }
    if(mouseY >= 580){
      y = 29;
    }else if(mouseY >= 560){
      y = 28;
    }else if(mouseY >= 540){
      y = 27;
    }else if(mouseY >= 520){
      y = 26;
    }else if(mouseY >= 500){
      y = 25;
    }else if(mouseY >= 480){
      y = 24;
    }else if(mouseY >= 460){
      y = 23;
    }else if(mouseY >= 440){
      y = 22;
    }else if(mouseY >= 420){
      y = 21;
    }else if(mouseY >= 400){
      y = 20;
    }else if(mouseY >= 380){
      y = 19;
    }else if(mouseY >= 360){
      y = 18;
    }else if(mouseY >= 340){
      y = 17;
    }else if(mouseY >= 320){
      y = 16;
    }else if(mouseY >= 300){
      y = 15;
    }else if(mouseY >= 280){
      y = 14;
    }else if(mouseY >= 260){
      y = 13;
    }else if(mouseY >= 240){
      y = 12;
    }else if(mouseY >= 220){
      y = 11;
    }else if(mouseY >= 200){
      y = 10;
    }else if(mouseY >= 180){
      y = 9;
    }else if(mouseY >= 160){
      y = 8;
    }else if(mouseY >= 140){
      y = 7;
    }else if(mouseY >= 120){
      y = 6;
    }else if(mouseY >= 100){
      y = 5;
    }else if(mouseY >= 80){
      y = 4;
    }else if(mouseY >= 60){
      y = 3;
    }else if(mouseY >= 40){
      y = 2;
    }else if(mouseY >= 20){
      y = 1;
    }else{
      y = 0;
    }
    red = document.getElementById("red").value;
    green = document.getElementById("green").value;
    blue = document.getElementById("blue").value;
    if((red == "") || (red <= 0)){
      red = 0;
      document.getElementById("red").value = 0;
    }
    else if((red > 0) && (red < 255)){
      document.getElementById("red").value = (red * 10) / 10;
    }
    else if((red >= 255)){
      red = 255;
      document.getElementById("red").value = 255;
    }
    else{
      red = 0;
      document.getElementById("red").value = 0;
    }
    if((green == "") || (green <= 0)){
      green = 0;
      document.getElementById("green").value = 0;
    }
    else if((green > 0) && (green < 255)){
      document.getElementById("green").value = (green * 10) / 10;
    }
    else if((green >= 255)){
      green = 255;
      document.getElementById("green").value = 255;
    }
    else{
      green = 0;
      document.getElementById("green").value = 0;
    }
    if((blue == "") || (blue <= 0)){
      blue = 0;
      document.getElementById("blue").value = 0;
    }
    else if((blue > 0) && (blue < 255)){
      document.getElementById("blue").value = (blue * 10) / 10;
    }
    else if((blue >= 255)){
      blue = 255;
      document.getElementById("blue").value = 255;
    }
    else{
      blue = 0;
      document.getElementById("blue").value = 0;
    }
    fill(red, green, blue);
    let newColor = "rgb(" + red + "," + green + "," + blue + ")";
    if(newColor != rireki){
      let element = document.querySelector("#a" + 0);
      n = n + 1;
      let createElement = document.createElement("div");
      createElement.setAttribute("id", "a" + n);
      createElement.innerHTML = "<center>履歴" + n + "<br>R:" + red + ", G:" + green + ", B:" + blue + "</center>";
      element.parentNode.insertBefore(createElement, element.nextSibling);
      document.getElementById("a" + n).style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
      rireki = "rgb(" + red + "," + green + "," + blue + ")";
      log += "\nfill(" + red + "," + green + "," + blue + ");";
    }
    log += "\nrect(" + x + " * dotWidth, " + y + " * dotHeight, dotWidth, dotHeight); //X軸:列" + (x + 1) + ", Y軸:列" + (y + 1);
    document.getElementById("code").value = log + '\n\n/*ここまでドット絵のデータです*/\n\n}\n\n/*ここから画像の保存に関するコードです*/\n\nvoid keyPressed(){\n  if(keyCode == 83){\n    save("untitled.png"); //画像のファイル名\n  }\n}';
    allow = 1;
  }
  else if((mouseX <= 600) && (mouseY <= 600) && (mouseX >= 0) && (mouseY >= 0) && (fillMode == 1)){
    if(mouseX >= 580){
      x = 29;
    }else if(mouseX >= 560){
      x = 28;
    }else if(mouseX >= 540){
      x = 27;
    }else if(mouseX >= 520){
      x = 26;
    }else if(mouseX >= 500){
      x = 25;
    }else if(mouseX >= 480){
      x = 24;
    }else if(mouseX >= 460){
      x = 23;
    }else if(mouseX >= 440){
      x = 22;
    }else if(mouseX >= 420){
      x = 21;
    }else if(mouseX >= 400){
      x = 20;
    }else if(mouseX >= 380){
      x = 19;
    }else if(mouseX >= 360){
      x = 18;
    }else if(mouseX >= 340){
      x = 17;
    }else if(mouseX >= 320){
      x = 16;
    }else if(mouseX >= 300){
      x = 15;
    }else if(mouseX >= 280){
      x = 14;
    }else if(mouseX >= 260){
      x = 13;
    }else if(mouseX >= 240){
      x = 12;
    }else if(mouseX >= 220){
      x = 11;
    }else if(mouseX >= 200){
      x = 10;
    }else if(mouseX >= 180){
      x = 9;
    }else if(mouseX >= 160){
      x = 8;
    }else if(mouseX >= 140){
      x = 7;
    }else if(mouseX >= 120){
      x = 6;
    }else if(mouseX >= 100){
      x = 5;
    }else if(mouseX >= 80){
      x = 4;
    }else if(mouseX >= 60){
      x = 3;
    }else if(mouseX >= 40){
      x = 2;
    }else if(mouseX >= 20){
      x = 1;
    }else{
      x = 0;
    }
    if(mouseY >= 580){
      y = 29;
    }else if(mouseY >= 560){
      y = 28;
    }else if(mouseY >= 540){
      y = 27;
    }else if(mouseY >= 520){
      y = 26;
    }else if(mouseY >= 500){
      y = 25;
    }else if(mouseY >= 480){
      y = 24;
    }else if(mouseY >= 460){
      y = 23;
    }else if(mouseY >= 440){
      y = 22;
    }else if(mouseY >= 420){
      y = 21;
    }else if(mouseY >= 400){
      y = 20;
    }else if(mouseY >= 380){
      y = 19;
    }else if(mouseY >= 360){
      y = 18;
    }else if(mouseY >= 340){
      y = 17;
    }else if(mouseY >= 320){
      y = 16;
    }else if(mouseY >= 300){
      y = 15;
    }else if(mouseY >= 280){
      y = 14;
    }else if(mouseY >= 260){
      y = 13;
    }else if(mouseY >= 240){
      y = 12;
    }else if(mouseY >= 220){
      y = 11;
    }else if(mouseY >= 200){
      y = 10;
    }else if(mouseY >= 180){
      y = 9;
    }else if(mouseY >= 160){
      y = 8;
    }else if(mouseY >= 140){
      y = 7;
    }else if(mouseY >= 120){
      y = 6;
    }else if(mouseY >= 100){
      y = 5;
    }else if(mouseY >= 80){
      y = 4;
    }else if(mouseY >= 60){
      y = 3;
    }else if(mouseY >= 40){
      y = 2;
    }else if(mouseY >= 20){
      y = 1;
    }else{
      y = 0;
    }
    document.getElementById("status").textContent = "範囲塗りつぶしモード:範囲の右下をクリックしてください(終了:Ctrl+Z)";
    fillMode = 2;
  }
  else if((mouseX <= 600) && (mouseY <= 600) && (mouseX >= 0) && (mouseY >= 0) && (fillMode == 2)){
    if(mouseX >= 580){
      fillX = 29;
    }else if(mouseX >= 560){
      fillX = 28;
    }else if(mouseX >= 540){
      fillX = 27;
    }else if(mouseX >= 520){
      fillX = 26;
    }else if(mouseX >= 500){
      fillX = 25;
    }else if(mouseX >= 480){
      fillX = 24;
    }else if(mouseX >= 460){
      fillX = 23;
    }else if(mouseX >= 440){
      fillX = 22;
    }else if(mouseX >= 420){
      fillX = 21;
    }else if(mouseX >= 400){
      fillX = 20;
    }else if(mouseX >= 380){
      fillX = 19;
    }else if(mouseX >= 360){
      fillX = 18;
    }else if(mouseX >= 340){
      fillX = 17;
    }else if(mouseX >= 320){
      fillX = 16;
    }else if(mouseX >= 300){
      fillX = 15;
    }else if(mouseX >= 280){
      fillX = 14;
    }else if(mouseX >= 260){
      fillX = 13;
    }else if(mouseX >= 240){
      fillX = 12;
    }else if(mouseX >= 220){
      fillX = 11;
    }else if(mouseX >= 200){
      fillX = 10;
    }else if(mouseX >= 180){
      fillX = 9;
    }else if(mouseX >= 160){
      fillX = 8;
    }else if(mouseX >= 140){
      fillX = 7;
    }else if(mouseX >= 120){
      fillX = 6;
    }else if(mouseX >= 100){
      fillX = 5;
    }else if(mouseX >= 80){
      fillX = 4;
    }else if(mouseX >= 60){
      fillX = 3;
    }else if(mouseX >= 40){
      fillX = 2;
    }else if(mouseX >= 20){
      fillX = 1;
    }else{
      fillX = 0;
    }
    if(mouseY >= 580){
      fillY = 29;
    }else if(mouseY >= 560){
      fillY = 28;
    }else if(mouseY >= 540){
      fillY = 27;
    }else if(mouseY >= 520){
      fillY = 26;
    }else if(mouseY >= 500){
      fillY = 25;
    }else if(mouseY >= 480){
      fillY = 24;
    }else if(mouseY >= 460){
      fillY = 23;
    }else if(mouseY >= 440){
      fillY = 22;
    }else if(mouseY >= 420){
      fillY = 21;
    }else if(mouseY >= 400){
      fillY = 20;
    }else if(mouseY >= 380){
      fillY = 19;
    }else if(mouseY >= 360){
      fillY = 18;
    }else if(mouseY >= 340){
      fillY = 17;
    }else if(mouseY >= 320){
      fillY = 16;
    }else if(mouseY >= 300){
      fillY = 15;
    }else if(mouseY >= 280){
      fillY = 14;
    }else if(mouseY >= 260){
      fillY = 13;
    }else if(mouseY >= 240){
      fillY = 12;
    }else if(mouseY >= 220){
      fillY = 11;
    }else if(mouseY >= 200){
      fillY = 10;
    }else if(mouseY >= 180){
      fillY = 9;
    }else if(mouseY >= 160){
      fillY = 8;
    }else if(mouseY >= 140){
      fillY = 7;
    }else if(mouseY >= 120){
      fillY = 6;
    }else if(mouseY >= 100){
      fillY = 5;
    }else if(mouseY >= 80){
      fillY = 4;
    }else if(mouseY >= 60){
      fillY = 3;
    }else if(mouseY >= 40){
      fillY = 2;
    }else if(mouseY >= 20){
      fillY = 1;
    }else{
      fillY = 0;
    }
    red = document.getElementById("red").value;
    green = document.getElementById("green").value;
    blue = document.getElementById("blue").value;
    if((red == "") || (red <= 0)){
      red = 0;
      document.getElementById("red").value = 0;
    }
    else if((red > 0) && (red < 255)){
      document.getElementById("red").value = (red * 10) / 10;
    }
    else if((red >= 255)){
      red = 255;
      document.getElementById("red").value = 255;
    }
    else{
      red = 0;
      document.getElementById("red").value = 0;
    }
    if((green == "") || (green <= 0)){
      green = 0;
      document.getElementById("green").value = 0;
    }
    else if((green > 0) && (green < 255)){
      document.getElementById("green").value = (green * 10) / 10;
    }
    else if((green >= 255)){
      green = 255;
      document.getElementById("green").value = 255;
    }
    else{
      green = 0;
      document.getElementById("green").value = 0;
    }
    if((blue == "") || (blue <= 0)){
      blue = 0;
      document.getElementById("blue").value = 0;
    }
    else if((blue > 0) && (blue < 255)){
      document.getElementById("blue").value = (blue * 10) / 10;
    }
    else if((blue >= 255)){
      blue = 255;
      document.getElementById("blue").value = 255;
    }
    else{
      blue = 0;
      document.getElementById("blue").value = 0;
    }
    let fillSucX = fillX - x;
    let fillSucY = fillY - y;
    if((fillSucX >= 0) && (fillSucY >= 0)){
      fill(red, green, blue);
      let newColor = "rgb(" + red + "," + green + "," + blue + ")";
      if(newColor != rireki){
        let element = document.querySelector("#a" + 0);
        n = n + 1;
        let createElement = document.createElement("div");
        createElement.setAttribute("id", "a" + n);
        createElement.innerHTML = "<center>履歴" + n + "<br>R:" + red + ", G:" + green + ", B:" + blue + "</center>";
        element.parentNode.insertBefore(createElement, element.nextSibling);
        document.getElementById("a" + n).style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
        rireki = "rgb(" + red + "," + green + "," + blue + ")";
        log += "\nfill(" + red + "," + green + "," + blue + ");";
      }
      log += "\nrect(" + x + " * dotWidth, " + y + " * dotHeight, dotWidth * " + (fillX - x + 1) + ", dotHeight * " + (fillY - y + 1) + "); //X軸:列" + (x + 1) + ", Y軸:列" + (y + 1) + ", 塗りつぶし";
      document.getElementById("code").value = log + '\n\n/*ここまでドット絵のデータです*/\n\n}\n\n/*ここから画像の保存に関するコードです*/\n\nvoid keyPressed(){\n  if(keyCode == 83){\n    save("untitled.png"); //画像のファイル名\n  }\n}';
      document.getElementById("status").textContent = "入力モード:クリックしてドットを入力してください";
      allow3 = 1;
      fillMode = 0;
    }
    else{
      alert("始点より右下の点を選択してください");
    }
  }
  else{}
  red = document.getElementById("red").value;
  green = document.getElementById("green").value;
  blue = document.getElementById("blue").value;
  if((red == "") || (red <= 0)){
    red = 0;
    document.getElementById("red").value = 0;
  }
  else if((red > 0) && (red < 255)){
    document.getElementById("red").value = (red * 10) / 10;
  }
  else if((red >= 255)){
    red = 255;
    document.getElementById("red").value = 255;
  }
  else{
    red = 0;
    document.getElementById("red").value = 0;
  }
  if((green == "") || (green <= 0)){
    green = 0;
    document.getElementById("green").value = 0;
  }
  else if((green > 0) && (green < 255)){
    document.getElementById("green").value = (green * 10) / 10;
  }
  else if((green >= 255)){
    green = 255;
    document.getElementById("green").value = 255;
  }
  else{
    green = 0;
    document.getElementById("green").value = 0;
  }
  if((blue == "") || (blue <= 0)){
    blue = 0;
    document.getElementById("blue").value = 0;
  }
  else if((blue > 0) && (blue < 255)){
    document.getElementById("blue").value = (blue * 10) / 10;
  }
  else if((blue >= 255)){
    blue = 255;
    document.getElementById("blue").value = 255;
  }
  else{
    blue = 0;
    document.getElementById("blue").value = 0;
  }
  document.getElementById("color").style.backgroundColor = "rgb(" + red + "," + green + "," + blue + ")";
}


function keyPressed(){
  if(key == "Control"){
    missLock = 0;
    document.getElementById("main").style.backgroundColor = "#000";
  }
  if(key == "x"){
    if((missLock == 0) && (x != 30) && (y != 30) && (fillMode == 0)){
      allow2 = 1;
    }
  }
  if(key == "Shift"){
    if((missLock == 0) && (fillMode == 0)){
      fillMode = 1;
      document.getElementById("status").textContent = "範囲塗りつぶしモード:範囲の左上をクリックしてください(終了:Ctrl+Z)";
    }
  }
  if(key == "z"){
    if((missLock == 0) && (fillMode != 0)){
      fillMode = 0;
      document.getElementById("status").textContent = "入力モード:クリックしてドットを入力してください";
      x = 30;
      y = 30;
    }
  }
}


function keyReleased(){
  if(key == "Control"){
    missLock = 1;
    document.getElementById("main").style.backgroundColor = "#fff";
  }
  if(key == "x"){
    if(missLock == 0){
      allow2 = 0;
    }
  }
}
