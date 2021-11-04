'use strict';

// 定数を使いすべての画像を取得
// 現在表示している画像が何番目なのかインデックスを変数で保持 今はすべて０

{
  // 次の画像も表示させたい 処理を関数にして再帰的に呼び出す
  // ページが読み込まれたらplay()が実行される
  // 切り替えた後にまたplay()とすることで処理が繰り返される
  function play() {
    // setTimeoutを使い画像を切り替える
    //  remove出はずしaddで加える
    // currentIndex++で1加える
    setTimeout(() => {
      images[currentIndex].classList.remove('current');
      currentIndex++;
      // スライドが終わると画面が白くなるのでifを使い画像を繰り返す処理
      if (currentIndex > images.length - 1){
        currentIndex = 0;
      }
      images[currentIndex].classList.add('current');
      play();
    }, 5000);
  }

  const images = document.querySelectorAll('.hero img');
  let currentIndex = 0;

  play();
}
