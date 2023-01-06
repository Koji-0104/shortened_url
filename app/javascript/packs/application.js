// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import 'bootstrap'
import '../stylesheets/application';
import "channels"

Rails.start()
Turbolinks.start()
ActiveStorage.start()



$(document).on('turbolinks:load', function() {
  // 右クリック禁止
  document.oncontextmenu = function () { return false; }

  //オリジナル コンテキストメニュー
  let con = document.getElementById('conmenu');

  //対象エリア
  let rightclick = document.getElementById('rightclick');

  //body部
  let body = document.body;

  //コンテキストメニューを表示する
  $(document).on('contextmenu', '.rightclick', function(e){

    //マウスの位置を使ってスタイルを設定する
    con.style.left = e.pageX + 'px';
    con.style.top = e.pageY + 'px';

    //メニューをblockで表示
    con.classList.add('show');

  });

  //左クリックで非表示に変更
  $(document).on('click', function (e) {

    if (con.classList.contains('show')) {
      //非表示に戻す
      con.classList.remove('show');
    }

  });
});