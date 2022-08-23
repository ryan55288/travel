//綁定DOM元素
var seletBtn = document.querySelector(".seletBtn");
var middleName = document.querySelector(".middleName");

var seletvalue = document.getElementById("seletvalue");


//監聽改變時的動作
seletvalue.addEventListener("change", seletchange, false);


//打API取值整理資料
var xhr = new XMLHttpRequest();
xhr.open("get", "https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.send(null);
xhr.onload = function () {
    var data = JSON.parse(xhr.response);
    newdata = data.result.records;
    var ZoneArr = [];
    ZoneArr = newdata.map(function (item) {
        return item.Zone;
    });
    var onlyZoneArr = ZoneArr.filter(function (item, index, array) {
        return array.indexOf(item) == index;
    });
    onlyZoneArr.unshift("--請選擇行政區--");
    // console.log(onlyZoneArr)
    var str = "";
    for (let i = 0; i < onlyZoneArr.length; i++) {
        str += `<option value="${onlyZoneArr[i]}" >${onlyZoneArr[i]}</option>`;
        seletchange()
    }
    seletBtn.innerHTML = str;
};

//點選時做判斷分類
function seletchange(e) {
    var selet = e.target.value;
     
}
