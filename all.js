var Lingyalist = document.querySelector(".LingyaBtn");
Lingyalist.addEventListener("click", LingyaChangelist, false);

function LingyaChangelist() {
    var xhr = new XMLHttpRequest();
    xhr.open("post", "https://raw.githubusercontent.com/hexschool/KCGTravel/master/datastore_search.json");
    xhr.setRequestHeader("content-type", "application/json");
    var data = JSON.stringify(xhr);
    xhr.send(data);
    xhr.onload = function () {
        var callbackData = JSON.parse(xhr.responseText);
        console.log(callbackData);

        // if (callbackData == "苓雅區") {
        // }
    };
}

// function changelist(){
//     var select = e.target.value;
//     var str = "";
//     for (var i = 0; i < counlen; i++) {
//         if (select == country[i].place) {
//             str += "<li>" + country[i].farmer + "</li>";
//         }
//     }
//     list.innerHTML = str;
// }
