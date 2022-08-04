function play_video() {
    document.getElementById('modal-video').style.display = "block";
    document.getElementById('body').style.overflowY = "hidden";
}

function close_video() {
    document.getElementById('modal-video').style.display = "none";
    document.getElementById('body').style.overflowY = "auto";
}

window.onclick = function (event) {
    if (event.target == document.getElementById('modal-video')) {
        document.getElementById('modal-video').style.display = "none";
        document.getElementById('body').style.overflowY = "auto";
    }
}

function update_formation() {
    document.getElementById('button').style.display = "none";
    document.getElementById('update-info').style.display = "block";
    document.getElementById('cancal').style.display = "block";
}

function cancal() {
    document.getElementById('button').style.display = "block";
    document.getElementById('update-info').style.display = "none";
    document.getElementById('cancal').style.display = "none";
}


// function searching() {
//     document.getElementById('input-search').style.display = 'block';
// }

// const inputSearch = document.querySelector(".input-search");
// const autoBox = document.querySelector(".autobox");
// inputSearch.onkeyup = (e) => {
//     let checkData = e.target.value;
//     let dataArray = [];
//     if (checkData) {
//         dataArray = recomentList.filter((data) => {
//             return data.toLocaleLowerCase().startsWith(checkData.toLocaleLowerCase())
//         });
//         dataArray = dataArray.map((data) => {
//             return data = '<li>' + data + '</li > '
//         });
//         autoBox.classList.add('active');
//         showAdress(dataArray);
//         let liItem = autoBox.querySelectorAll("li");
//         for (let i = 0; i < liItem.length; i++) {
//             liItem[i].addEventListener("click", function () {
//                 inputSearch.value = liItem[i].innerHTML;
//                 autoBox.classList.remove('active');
//             })
//         }
//     } else {
//         autoBox.classList.remove('active');
//     }
// }

// function showAdress(list) {
//     let listData;
//     if (!list.length) {
//         listData = '<li>' + inputSearch.value + '</li>';
//     } else {
//         listData = list.join('');
//     }
//     autoBox.innerHTML = listData;
// }

// const deleteText = document.querySelector(".delete");
// deleteText.addEventListener("click", function () {
//     data = "";
//     inputSearch.value = data;
//     autoBox.classList.remove('active');
// })
// let recomentList = [
//     "An Giang",
//     "Bà rịa – Vũng tàu",
//     "Bắc Giang",
//     "Bắc Kạn",
//     "Bạc Liêu",
//     "Bắc Ninh",
//     "Bến Tre",
//     "Bình Định",
//     "Bình Dương",
//     "Bình Phước",
//     "Bình Thuận",
//     "Cà Mau",
//     "Cần Thơ",
//     "Cao Bằng",
//     "Đà Nẵng",
//     "Đắk Lắk",
//     "Đắk Nông",
//     "Điện Biên",
//     "Đồng Nai",
//     "Đồng Tháp",
//     "Gia Lai",
//     "Hà Giang",
//     "Hà Nam",
//     "Hà Nội",
//     "Hà Tĩnh",
//     "Hải Dương",
//     "Hải Phòng",
//     "Hậu Giang",
//     "Hòa Bình",
//     "Hưng Yên",
//     "Khánh Hòa",
//     "Kiên Giang",
//     "Kon Tum",
//     "Lai Châu",
//     "Lâm Đồng",
//     "Lạng Sơn",
//     "Lào Cai",
//     "Long An",
//     "Nam Định",
//     "Nghệ An",
//     "Ninh Bình",
//     "Ninh Thuận",
//     "Phú Thọ",
//     "Phú Yên",
//     "Quảng Bình",
//     "Quảng Nam",
//     "Quảng Ngãi",
//     "Quảng Ninh",
//     "Quảng Trị",
//     "Sóc Trăng",
//     "Sơn La",
//     "Tây Ninh",
//     "Thái Bình",
//     "Thái Nguyên",
//     "Thanh Hóa",
//     "Thừa Thiên Huế",
//     "Tiền Giang",
//     "Thành phố Hồ Chí Minh",
//     "Trà Vinh", "Tuyên Quang",
//     "Vĩnh Long",
//     "Vĩnh Phúc",
//     "Vĩnh Phúc"
// ];