//綁定DOM元素
var seletBtn = document.querySelector(".seletBtn");
var middlebody = document.getElementById("middlebody");
var seletvalue = document.getElementById("seletvalue");
//監聽改變時的動作

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
    onlyZoneArr.unshift("全部行政區");
    onlyZoneArr.unshift("--請選擇行政區--");

    //監聽行政區渲染卡片
    function seletchange(e) {
        let selet = e.target.value;
        console.log(newdata);
        let seletData = newdata.filter(function (item, index, array) {
            return item.Zone === selet;
        });
        let str = "";
        for (let i = 0; i < seletData.length; i++) {
            str += `                    
            <div class="col-6 my-2">
            <div class="card card-high">
                <img src="${seletData[i].Picture1}" class="card-img-top img-fluid " alt="..." />
                <div class="card-body">
                    <div class="row">
                        <div class="col-1">
                            <img src="./img/icons_clock.png" class="clock" alt="" />
                            <img src="./img/icons_pin.png" alt="" />
                            <img src="./img/icons_phone.png" alt="" class="phone" />
                        </div>
                        <div class="col-11">
                            <div class="">開放時間:${seletData[i].Opentime}</div>
                            <div class="">${seletData[i].Add}</div>
                            <div class="">${seletData[i].Tel}</div>
                        </div>
                        <div class="d-flex justify-content-end">
                            <img src="./img/icons_tag.png" alt="" class="me-2" />
                            <div class="">${seletData[i].Ticketinfo}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
        }
        // console.log(container);
        // console.log(seletData);
        middlebody.innerHTML = str;
    }
    // console.log(seletvalue)
    seletvalue.addEventListener("change", seletchange, false);

    //行政區選項
    function selectCityFilter() {
        let str = "";
        for (let i = 0; i < onlyZoneArr.length; i++) {
            str += `<option value="${onlyZoneArr[i]}" >${onlyZoneArr[i]}</option>`;
        }
        seletBtn.innerHTML = str;
    }
    selectCityFilter();
};
