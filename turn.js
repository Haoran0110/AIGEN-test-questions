/**
 * Created by wenhaoran1 on 2019/3/6.
 */
var items = document.getElementsByClassName('item');//图片
var points = document.getElementsByClassName('point');//点

var goPreBtn = document.getElementById('goPre');
var goNextBtn = document.getElementById('goNext');

var index = 0;//index表示第几张图片(第几个点)在展示，第index张图片有active这个类名

var clearActive = function(){
    for(var i = 0;i < items.length;i++){
        items[i].className = 'item';//全部不能有active这个类名
    }
    for(var i = 0;i < points.length;i++){
        points[i].className = 'point';//全部不能有active这个类名
    }
}
var goIndex = function () {
    clearActive();
    points[index].className = 'point active';
    items[index].className = 'item active';
    console.log(index);
}
var goNext = function(){
    if(index < 3){
        index++;
    }
    else {
        index = 0;
    }
    goIndex();
}
var goPre = function(){
    if(index == 0){
        index = 3;
    }
    else {
        index--;
    }
    goIndex();
}
goNextBtn.addEventListener('click',function(){
    goNext();
})
goPreBtn.addEventListener('click',function(){
    goPre();
})
for(var i = 0;i<points.length;i++){
    points[i].addEventListener('click',function(){
        var pointIndex = this.getAttribute('data-index');
        console.log(pointIndex);
        index = pointIndex;
        goIndex();
    })
}

setInterval(function () {
    goNext();
},5000);
