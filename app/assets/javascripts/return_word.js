function buildHTML(data, pageX, pageY){
  html = `<div class="term" style="position: absolute; z-index: 2147483647; left: ${pageX + 7}px; top: ${pageY + 8}px; background-color: white; width: 500px; border: #555 solid 1px; box-shadow: 0 2px 2px #d0d0d0; -webkit-border-radius: 5px;">
            <p style="margin: 0px 5px;">
              <span class="term__name" style="font-size: 15px; color: blue;">${data.name}</span>
              <span class="term__description" style="font-size: 13px;">${data.description}</span>
              <span class="term__description" style="font-size: 13px;"><a href="${data.url}" class="term_url" target="_blank" style="font-size: 13px;">LINKに飛ぶ</a></span>
            </p>
          </div>
  `
  return html
};

var flag = false
var selectedText = ""

function search_by_word(word){
  $.ajax({
    url: "/terms",
    type: "GET",
    data:
      {keyword: word },
    dataType: 'json',
    timeout: 1000
  })
  .done(function(data){
    debugger;
    $.each(data, function(i, datum){
      html = buildHTML(datum, pageX, pageY);
      $("body > div:last-child").after(html)
    })
    flag = true
  })
  .fail(function(a,b,c){
  })
}

function selectText(){
  var selText = window.getSelection().toString();
  if ((selText !== "")&&(selectedText != selText)){
    selectedText = selText
    debugger;
    search_by_word(selText);
  }
  return false;
}

function removeText(){
  debugger;
  $(".term").remove();
  selectedText = ""
  flag = false
}

$(function(){
  $( document ).on( 'click', function(e) {
    if (flag == true){
      if (e.target.className != ""){
        // クラス名がある。
        if (e.target.className.match("term") != null){
          // クラス名がtermではない
          // →removeする(1)
          removeText()
            // remove
            // もし、選択されているテキストが昔のテキストだったら、removeしない
            // 選択されているテキストが昔のテキストでなければ、remove
        }else {
          // クラス名がterm
          // →何もしない
        }
      } else{
        // クラス名がない場合
        // →removeする(1)
        removeText()
      }
    } else {
      // flag == false
      // → 検索をする
      pageX = e.pageX
      pageY = e.pageY
      selectText()
    }
  });
});
