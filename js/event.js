// 背景ID配列
var bgArray = ['#sky', '#night', '#city', '#beach', '#sea', '#yozora'];
// インデックス
var index = 0
var indexOld = 0

// ドア注視点イベント
var doorObj = document.getElementById("door");
doorObj.addEventListener('click', function(){

    // 0~4のランダム変数(前回と同じ背景にしない)
    while(index == indexOld){
        index = Math.floor( Math.random() * bgArray.length );
    }

    // a-sky情報取得
    var sky = document.getElementById("background");
    // フェードアウトアニメーション実行
    sky.emit('fade');
    // 背景変更
    sky.setAttribute('material', 'src', bgArray[index]);

    // 使用したindexは前回インデックスに格納
    indexOld = index;
}, false);

/*
// タルト注視点イベント
var tarteObj = document.getElementById("tarte");
tarteObj.addEventListener('click', function(){
    var link = this.getAttribute('data-link');
    // リンク先に移動
    location.href = link;
}, false);
*/


// 懐中電灯注視点イベント
var flashlightObj = document.getElementById("flashlight");
flashlightObj.addEventListener('click', function(){
    
    // 円柱オブジェクト取得
    var cylinderEl = document.getElementById("cylinder");

    // 前回のアニメーションの削除
    var oldAnims = cylinderEl.querySelectorAll('a-animation');
    for(var i=0; i<oldAnims.length  ; i++){
        cylinderEl.removeChild(oldAnims[i]);
    }

    // scaleの取得
    var scale = cylinderEl.getAttribute('scale');
    var scaleX = scale.x * 1.2;
    var scaleY = scale.y * 1.2;
    var scaleZ = scale.z * 1.2;
    var newScale = scaleX +' '+ scaleY +' '+ scaleZ;

    // positionの取得
    var position = cylinderEl.getAttribute('position');
    var newPosition = position.x +' '+ (scaleY/2) +' '+ position.z

    // アニメーション追加
    var scaleAnim = document.createElement('a-animation');
    scaleAnim.setAttribute('attribute','scale');
    scaleAnim.setAttribute('to',newScale);
    cylinderEl.appendChild(scaleAnim);

    var positionAnim = document.createElement('a-animation');
    positionAnim.setAttribute('attribute','position');
    positionAnim.setAttribute('to',newPosition);
    cylinderEl.appendChild(positionAnim);

}, false);
