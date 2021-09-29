// パララックスのターゲット取得
const target = document.getElementsByClassName("js-parallax");
// パララックスのターゲット取得
const target01 = document.getElementsByClassName("js-parallax01");
// パララックスのターゲット取得
const target02 = document.getElementsByClassName("js-parallax02");
// パララックスを行うエリア
const activeArea = document.getElementById("js-parallaxArea");
// ウィンドウの中心の取得
const xCenter = window.innerWidth / 2;
const yCenter = window.innerHeight / 2;
// パララックスで移動させる距離
const parallaxVal = 20; //中心からマウスの距離の10分１移動
const parallaxVal01 = 10; //中心からマウスの距離の10分１移動
const parallaxVal02 = 10; //中心からマウスの距離の10分１移動

// マウスがパララックスエリアに入った時のイベント
activeArea.addEventListener("mousemove", (e) => {
  // マウスの座標を取得して 中心からの距離取得、 そこからpararaxValで距離を調整
  const x = (xCenter - e.pageX) / parallaxVal;
  // マウスの座標を取得して 中心からの距離取得、 そこからpararaxValで距離を調整
  const x01 = (xCenter - e.pageX) / parallaxVal01;
  // マウスの座標を取得して 中心からの距離取得、 そこからpararaxValで距離を調整
  const x02 = (xCenter - e.pageX) / parallaxVal02;
  // const y = (yCenter - e.pageY) / parallaxVal;
  // パララックスさせる要素にstyleの指定
  for (var i = 0; i < target.length; i++) {
    //マウスの動きと逆の方向に移動する(-xにすると同じ方向)
    target[i].style.transform = `translate(${x}px, 0px)`;
  }
  for (var i = 0; i < target01.length; i++) {
    //マウスの動きと逆の方向に移動する(-xにすると同じ方向)
    target01[i].style.transform = `translate(${x01}px, 0px)`;
  }
  for (var i = 0; i < target02.length; i++) {
    //マウスの動きと逆の方向に移動する(-xにすると同じ方向)
    target02[i].style.transform = `translate(${-x02}px, 0px)`;
  }
});

// カーソル用のdivタグを取得してcursorに格納
var cursor = document.getElementById("cursor");

// カーソル用のdivタグをマウスに追従させる
document.addEventListener("mousemove", function (e) {
  cursor.style.transform =
    "translate(" + e.clientX + "px, " + e.clientY + "px)";
});

// リンクにホバーした時にクラス追加、離れたらクラス削除
var link = document.querySelectorAll("a");
for (var i = 0; i < link.length; i++) {
  link[i].addEventListener("mouseover", function (e) {
    cursor.classList.add("cursor--hover");
  });
  link[i].addEventListener("mouseout", function (e) {
    cursor.classList.remove("cursor--hover");
  });
}
