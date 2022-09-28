//綁定DOM元素
var seletBtn = document.querySelector(".seletBtn");
var middlebody = document.getElementById("middlebody");
var seletvalue = document.getElementById("seletvalue");
//綁定熱門行政區DOM元素
var LingyaBtn = document.getElementById("LingyaBtn");
var Sanmin = document.getElementById("Sanmin");
var Jiaxian = document.getElementById("Jiaxian");
var Bigtree = document.getElementById("Bigtree");
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
    Sanmin.addEventListener("click", showSanmin, false);
    Jiaxian.addEventListener("click", showJiaxian, false);
    Bigtree.addEventListener("click", showBigtree, false);

    //渲染熱門行政區
    function showLingya() {
        // console.log(newdata);
        let LingyaData = newdata.filter(function (item, index, array) {
            return item.Zone === "苓雅區";
        });
        let Lingyastr = "";
        // console.log(selet);
        for (let i = 0; i < LingyaData.length; i++) {
            Lingyastr += `                    
                    <div class="col-6 my-2">
                    <div class="card card-high">
                        <div class="card">
                        <img src="${LingyaData[i].Picture1}" class="card-img-top img-fluid position-relative " alt="..." style="max-height: 275px"/>
                        <div class="position-absolute bottom-0 start-0 fw-bold ps-3 pb-2 text-white">${LingyaData[i].Zone}</div>
                    </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-1">
                                    <img src="./img/icons_clock.png" class="clock" alt="" />
                                    <img src="./img/icons_pin.png" alt="" />
                                    <img src="./img/icons_phone.png" alt="" class="phone" />
                                </div>
                                <div class="col-11">
                                    <div class="">開放時間:${LingyaData[i].Opentime}</div>
                                    <div class="">${LingyaData[i].Add}</div>
                                    <div class="">${LingyaData[i].Tel}</div>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <img src="./img/icons_tag.png" alt="" />
                                    <div class="">${LingyaData[i].Ticketinfo}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
        middlebody.innerHTML = Lingyastr;
    }
    function showSanmin() {
        // console.log(newdata);
        let SanminData = newdata.filter(function (item, index, array) {
            return item.Zone === "三民區";
        });
        let Sanminstr = "";
        // console.log(selet);
        for (let i = 0; i < SanminData.length; i++) {
            Sanminstr += `                    
                    <div class="col-6 my-2">
                    <div class="card card-high">
                        <div class="card">
                        <img src="${SanminData[i].Picture1}" class="card-img-top img-fluid position-relative " alt="..." style="max-height: 275px"/>
                        <div class="position-absolute bottom-0 start-0 fw-bold ps-3 pb-2 text-white">${SanminData[i].Zone}</div>
                    </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-1">
                                    <img src="./img/icons_clock.png" class="clock" alt="" />
                                    <img src="./img/icons_pin.png" alt="" />
                                    <img src="./img/icons_phone.png" alt="" class="phone" />
                                </div>
                                <div class="col-11">
                                    <div class="">開放時間:${SanminData[i].Opentime}</div>
                                    <div class="">${SanminData[i].Add}</div>
                                    <div class="">${SanminData[i].Tel}</div>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <img src="./img/icons_tag.png" alt="" />
                                    <div class="">${SanminData[i].Ticketinfo}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
        middlebody.innerHTML = Sanminstr;
    }
    function showJiaxian() {
        let JiaxianData = newdata.filter(function (item, index, array) {
            return item.Zone === "甲仙區";
        });
        let Jiaxianstr = "";
        // console.log(selet);
        for (let i = 0; i < JiaxianData.length; i++) {
            Jiaxianstr += `                    
                    <div class="col-6 my-2">
                    <div class="card card-high">
                        <div class="card">
                        <img src="${JiaxianData[i].Picture1}" class="card-img-top img-fluid position-relative " alt="..." style="max-height: 275px"/>
                        <div class="position-absolute bottom-0 start-0 fw-bold ps-3 pb-2 text-white">${JiaxianData[i].Zone}</div>
                    </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-1">
                                    <img src="./img/icons_clock.png" class="clock" alt="" />
                                    <img src="./img/icons_pin.png" alt="" />
                                    <img src="./img/icons_phone.png" alt="" class="phone" />
                                </div>
                                <div class="col-11">
                                    <div class="">開放時間:${JiaxianData[i].Opentime}</div>
                                    <div class="">${JiaxianData[i].Add}</div>
                                    <div class="">${JiaxianData[i].Tel}</div>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <img src="./img/icons_tag.png" alt="" />
                                    <div class="">${JiaxianData[i].Ticketinfo}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
        middlebody.innerHTML = Jiaxianstr;
    }
    function showBigtree() {
        let BigtreeData = newdata.filter(function (item, index, array) {
            return item.Zone === "大樹區";
        });
        let Bigtreestr = "";
        for (let i = 0; i < BigtreeData.length; i++) {
            Bigtreestr += `                    
                    <div class="col-6 my-2">
                    <div class="card card-high">
                        <div class="card">
                        <img src="${BigtreeData[i].Picture1}" class="card-img-top img-fluid position-relative " alt="..." style="max-height: 275px"/>
                        <div class="position-absolute bottom-0 start-0 fw-bold ps-3 pb-2 text-white">${BigtreeData[i].Zone}</div>
                    </div>
                        <div class="card-body">
                            <div class="row">
                                <div class="col-1">
                                    <img src="./img/icons_clock.png" class="clock" alt="" />
                                    <img src="./img/icons_pin.png" alt="" />
                                    <img src="./img/icons_phone.png" alt="" class="phone" />
                                </div>
                                <div class="col-11">
                                    <div class="">開放時間:${BigtreeData[i].Opentime}</div>
                                    <div class="">${BigtreeData[i].Add}</div>
                                    <div class="">${BigtreeData[i].Tel}</div>
                                </div>
                                <div class="d-flex justify-content-end">
                                    <img src="./img/icons_tag.png" alt="" />
                                    <div class="">${BigtreeData[i].Ticketinfo}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`;
        }
        middlebody.innerHTML = Bigtreestr;
    }
    //監聽行政區渲染
    function seletchange(e) {
        let selet = e.target.value;
        // console.log(newdata);
        // console.log(selet);
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
    selectCityFilter()
};
