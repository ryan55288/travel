//綁定DOM元素
var seletBtn = document.querySelector(".seletBtn");
var middlebody = document.getElementById("middlebody");
var seletvalue = document.getElementById("seletvalue");
var LingyaBtn = document.querySelector(".LingyaBtn");
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
    // console.log(onlyZoneArr)

    seletvalue.addEventListener("change", seletchange, false);
    LingyaBtn.addEventListener("click", showLingya, false);

    function showLingya(e) {
        let selet = e.target.value;
        let Lingyastr = "";
        if (selet == "苓雅區") {
            for (let i = 0; i < seletAllData.length; i++) {
                Lingyastr += `                    
                        <div class="col-6 my-2">
                        <div class="card card-high">
                            <div class="card">
                            <img src="${seletAllData[i].Picture1}" class="card-img-top img-fluid position-relative " alt="..." style="max-height: 275px"/>
                            <div class="position-absolute bottom-0 start-0 fw-bold ps-3 pb-2 text-white">${seletAllData[i].Zone}</div>
                        </div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-1">
                                        <img src="./img/icons_clock.png" class="clock" alt="" />
                                        <img src="./img/icons_pin.png" alt="" />
                                        <img src="./img/icons_phone.png" alt="" class="phone" />
                                    </div>
                                    <div class="col-11">
                                        <div class="">開放時間:${seletAllData[i].Opentime}</div>
                                        <div class="">${seletAllData[i].Add}</div>
                                        <div class="">${seletAllData[i].Tel}</div>
                                    </div>
                                    <div class="d-flex justify-content-end">
                                        <img src="./img/icons_tag.png" alt="" />
                                        <div class="">${seletAllData[i].Ticketinfo}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>`;
            }
            LingyaBtn.innerHTML = Lingyastr;
        }
    }
    //監聽行政區渲染
    function seletchange(e) {
        let selet = e.target.value;
        // console.log(newdata);
        // console.log(selet)
        let seletData = newdata.filter(function (item, index, array) {
            return item.Zone === selet;
        });
        //渲染所有區域
        let seletAllData = newdata;
        let allstr = "";
        for (let i = 0; i < seletAllData.length; i++) {
            allstr += `                    
                <div class="col-6 my-2">
                <div class="card card-high">
                    <div class="card">
                    <img src="${seletAllData[i].Picture1}" class="card-img-top img-fluid position-relative " alt="..." style="max-height: 275px"/>
                    <div class="position-absolute bottom-0 start-0 fw-bold ps-3 pb-2 text-white">${seletAllData[i].Zone}</div>
                </div>
                    <div class="card-body">
                        <div class="row">
                            <div class="col-1">
                                <img src="./img/icons_clock.png" class="clock" alt="" />
                                <img src="./img/icons_pin.png" alt="" />
                                <img src="./img/icons_phone.png" alt="" class="phone" />
                            </div>
                            <div class="col-11">
                                <div class="">開放時間:${seletAllData[i].Opentime}</div>
                                <div class="">${seletAllData[i].Add}</div>
                                <div class="">${seletAllData[i].Tel}</div>
                            </div>
                            <div class="d-flex justify-content-end">
                                <img src="./img/icons_tag.png" alt="" class="me-2" />
                                <div class="me-5">${seletAllData[i].Ticketinfo}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
            // console.log(container);
            // console.log(seletData);
            middlebody.innerHTML = allstr;
        }
        let str = "";
        for (let i = 0; i < seletData.length; i++) {
            str += `                    
                <div class="col-6 my-2">
                <div class="card card-high">
                    <div class="card">
                    <img src="${seletData[i].Picture1}" class="card-img-top img-fluid position-relative " alt="..." style="max-height: 275px"/>
                    <div class="position-absolute bottom-0 start-0 fw-bold ps-3 pb-2 text-white">${seletData[i].Zone}</div>
                </div>
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
                                <img src="./img/icons_tag.png" alt="" />
                                <div class="">${seletData[i].Ticketinfo}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;

            // console.log(container);
            // console.log(seletData);
            middlebody.innerHTML = str;
        }
    }
    // console.log(seletvalue)
    //選擇行政區選項
    function selectCityFilter() {
        let str = "";
        for (let i = 0; i < onlyZoneArr.length; i++) {
            str += `<option value="${onlyZoneArr[i]}" >${onlyZoneArr[i]}</option>`;
        }
        seletBtn.innerHTML = str;
    }
    selectCityFilter();
};
