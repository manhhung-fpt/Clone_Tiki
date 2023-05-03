var heading__user = document.querySelector(".heading__user");
var heading__cart = document.querySelector(".heading__cart");
var modal = document.querySelector(".modal");
var loginAndRegister__modal = document.querySelector(
  ".loginAndRegister__modal"
);
var loginAndRegister__close = document.querySelector(
  ".loginAndRegister__close"
);
heading__user.addEventListener("click", function () {
  modal.classList.remove("hide");
  loginAndRegister__modal.classList.remove("hide");
});
heading__cart.addEventListener("click", function () {
  modal.classList.remove("hide");
  loginAndRegister__modal.classList.remove("hide");
});
loginAndRegister__modal.addEventListener("click", function (a) {
  if (a.target == a.currentTarget) {
    modal.classList.add("hide");
    loginAndRegister__modal.classList.add("hide");
  }
});
loginAndRegister__close.addEventListener("click", function (a) {
  modal.classList.add("hide");
  loginAndRegister__modal.classList.add("hide");
});

//  list product
var listProduct_right = document.querySelector(".list__product--right ");
var listProduct_left = document.querySelector(".list__product--left ");

listProduct_right.addEventListener("click", function () {
  listProduct_left.classList.remove("hide");
  listProduct_right.classList.add("hide");
  document.getElementById("productChange").style.marginLeft = "-868px";
});
listProduct_left.addEventListener("click", function () {
  listProduct_right.classList.remove("hide");
  listProduct_left.classList.add("hide");
  document.getElementById("productChange").style.marginLeft = "0px";
});

//  ------------ convert1  -------------------

var container1_img = document.querySelectorAll(".webimg1__convert img");

var iconRight1 = document.querySelector(".webimg1__left .icon-right");
var iconLeft1 = document.querySelector(".webimg1__left .icon-left");
var img1 = document.querySelector(".webimg1__convert .img1");
var container1_imgSize =
  document.getElementsByClassName("webimg1__size")[0].clientWidth;

var container1_imgLength = document.querySelectorAll(".webimg1__size").length;

var container1_max = container1_imgSize * container1_imgLength;

var Arr_quantity1 = document.querySelectorAll(
  ".webimg1__left .quantity_img li"
);
var Max_quantity1 = Arr_quantity1.length;

var quantity_stt = 0;
function right_quantity(index) {
  Arr_quantity1[index - 1].classList.remove("color");
  if (index == Max_quantity1) {
    quantity_stt = 0;
  }
  if (index == 0) {
    quantity_stt = Max_quantity1 - 1;
  }
  Arr_quantity1[quantity_stt].classList.add("color");
}
function left_quantity(index) {
  Arr_quantity1[index + 1].classList.remove("color");
  if (index == Max_quantity1) {
    quantity_stt = 0;
  }
  if (index < 0) {
    quantity_stt = Max_quantity1;
  }
  Arr_quantity1[quantity_stt].classList.add("color");
}

var container1_Margin = 0;
function convert_Img1(index) {
  if (index < -(container1_max - container1_imgSize)) {
    container1_Margin = 0;
  }
  console.log("container1_max", container1_max);
  if (index > 0) {
    container1_Margin = -container1_max + container1_imgSize;
  }
  document.getElementById("container1_convert").style.transform =
    "translateX(" + container1_Margin + "px)";
}
iconRight1.addEventListener("click", function () {
  container1_Margin -= container1_imgSize;
  quantity_stt++;
  convert_Img1(container1_Margin);
  right_quantity(quantity_stt);
});
iconLeft1.addEventListener("click", function () {
  container1_Margin += container1_imgSize;
  quantity_stt--;
  convert_Img1(container1_Margin);
  left_quantity(quantity_stt);
});
function auto_convertImg1() {
  container1_Margin -= container1_imgSize;
  quantity_stt++;
  convert_Img1(container1_Margin);
  right_quantity(quantity_stt);
  setTimeout("auto_convertImg1()", 2000);
}
auto_convertImg1();

//  ----------- convert2 ------------
var Size_container2 =
  document.getElementsByClassName("container2__index")[0].clientWidth;
var Max_container2 =
  document.getElementsByClassName("container2__list")[0].clientWidth;

var Right_icon2 = document.querySelector(
  ".container2__index .icon2__bgr--right"
);
var Left_icon2 = document.querySelector(
  ".container2__index .icon2__bgr--left "
);
var number2 = 0;

function Convert_container2(index) {
  if (index > Max_container2 - Size_container2) {
    Right_icon2.classList.add("hide");
    Left_icon2.classList.remove("hide");
  }
  if (index == 0) {
    Right_icon2.classList.remove("hide");
    Left_icon2.classList.add("hide");
  }

  document.getElementById("container2").style.marginLeft = "-" + number2 + "px";
}
Right_icon2.addEventListener("click", function () {
  number2 += Size_container2;
  Convert_container2(number2);
});
Left_icon2.addEventListener("click", function () {
  number2 -= Size_container2;
  Convert_container2(number2);
});

// --------------------------
var hours = 12;
var minute = 10;
var second = 5;

function autoCountDown() {
  second--;
  if (second == -1) {
    minute--;
    second = 59;
  }
  if (minute == -1) {
    hours--;
    minute = 59;
  }
  if (hours == -1) {
    hours = 12;
  }
  if (minute < 10) {
    minute *= 1;
    minute = "0" + minute;
  }
  if (second < 10) {
    second *= 1;
    second = "0" + second;
  }
  if (hours < 10) {
    hours *= 1;
    hours = "0" + hours;
  }
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("second").innerHTML = second;
  setTimeout("autoCountDown()", 1000);
}
autoCountDown();
// --------------------------- mobile ---------------------------
var Flash = 0;

function transformFlash(index) {
  if (index == 2) {
    Flash = 0;
  }
  if (index % 2 == 0) {
    document.querySelector(".style__Flash").classList.add("event__flash");
  } else {
    document.querySelector(".style__Flash").classList.remove("event__flash");
  }
}
function autoFlash() {
  Flash++;
  transformFlash(Flash);
  setTimeout("autoFlash()", 350);
}
autoFlash();

var size__convertRight =
  document.getElementsByClassName("webimg__right2")[0].clientWidth;
var number2_right = 0;
var quantity2 = 0;
var Array_ConvertRight2 = document.querySelectorAll(
  ".webimg__right2 .quantity_img .quantity-item"
);
var length_ConvertRight2 = document.querySelectorAll(
  ".webimg__right2 .quantity_img .quantity-item"
).length;

function ConvertRight2_quantity(index) {
  Array_ConvertRight2[index - 1].classList.remove("color");
  if (index == length_ConvertRight2) {
    quantity2 = 0;
  }
  Array_ConvertRight2[quantity2].classList.add("color");
}
function ConvertRight2(index) {
  if (index > size__convertRight) {
    number2_right = 0;
  }
  document.querySelector(".webimg__right2--list").style.transform =
    "translateX(-" + number2_right + "px)";
}
function autoConvertRight() {
  number2_right += size__convertRight;
  quantity2++;
  ConvertRight2(number2_right);
  ConvertRight2_quantity(quantity2);
  setTimeout("autoConvertRight()", 4000);
}
autoConvertRight();
// ------------- mobile --------------------

var m_size__convertRight =
  document.getElementsByClassName("m_webimg__right2")[0].clientWidth;
var m_number2_right = 0;
var m_quantity2 = 0;
var m_Array_ConvertRight2 = document.querySelectorAll(
  ".m_webimg__right2 .quantity_img .quantity-item"
);
var m_length_ConvertRight2 = document.querySelectorAll(
  ".webimg__right2 .quantity_img .quantity-item"
).length;
function m_ConvertRight2_quantity(index) {
  m_Array_ConvertRight2[index - 1].classList.remove("color");
  if (index == m_length_ConvertRight2) {
    m_quantity2 = 0;
  }
  m_Array_ConvertRight2[m_quantity2].classList.add("color");
}
function m_ConvertRight2(index) {
  if (index > m_size__convertRight) {
    m_number2_right = 0;
  }
  document.querySelector(".m_webimg__right2--list").style.transform =
    "translateX(-" + m_number2_right + "px)";
}
function m_autoConvertRight() {
  m_number2_right += m_size__convertRight;
  m_quantity2++;
  m_ConvertRight2(m_number2_right);
  m_ConvertRight2_quantity(m_quantity2);
  setTimeout("m_autoConvertRight()", 4000);
}
m_autoConvertRight();

// ------------- convert container6 ---------------
var quantity_webImg6 = 0;
var Array_quantity6 = document.querySelectorAll(
  ".container6__body .quantity_img .container6__quantity"
);
var max_quantity6 = Array_quantity6.length;

function right_quantity6(index) {
  Array_quantity6[index - 1].classList.remove("color2");
  if (index == max_quantity6) {
    quantity_webImg6 = 0;
  }

  Array_quantity6[quantity_webImg6].classList.add("color2");
}
function left_quantity6(index) {
  Array_quantity6[index + 1].classList.remove("color2");
  if (index < 0) {
    quantity_webImg6 = max_quantity6 - 1;
  }

  Array_quantity6[quantity_webImg6].classList.add("color2");
}
var max_webImg6 = document.getElementsByClassName("container6__body--img")[0]
  .clientWidth;
var iconRight_webImg6 = document.querySelector(
  ".container6__body .icon__right"
);
var iconLeft_webImg6 = document.querySelector(".container6__body .icon__left");
var size_webImg6 =
  document.getElementsByClassName("container6__body")[0].clientWidth;

var marginLeft6 = 0;
function marginLeft_webImg6(index) {
  if (index > max_webImg6 - size_webImg6) {
    marginLeft6 = 0;
  }
  if (index < 0) {
    marginLeft6 = max_webImg6 - size_webImg6;
  }
  document.getElementById("container6__convertIMg").style.marginLeft =
    "-" + marginLeft6 + "px";
}

iconRight_webImg6.addEventListener("click", function () {
  marginLeft6 += size_webImg6;
  quantity_webImg6++;
  right_quantity6(quantity_webImg6);
  marginLeft_webImg6(marginLeft6);
});
iconLeft_webImg6.addEventListener("click", function () {
  marginLeft6 -= size_webImg6;
  quantity_webImg6--;
  left_quantity6(quantity_webImg6);
  marginLeft_webImg6(marginLeft6);
});

function auto_webImg6() {
  marginLeft6 += size_webImg6;
  quantity_webImg6++;
  right_quantity6(quantity_webImg6);
  marginLeft_webImg6(marginLeft6);
  setTimeout("auto_webImg6()", 4000);
}
auto_webImg6();

// --------- container6 ----------
var max_container6 =
  document.getElementsByClassName("webimg6__list")[0].clientWidth;
var size_container6 = document.getElementsByClassName("webimg6")[0].clientWidth;
var marginLeft_container6 = 0;
var iconRight_container6 = document.querySelector(
  ".webimg6 .webimg6_iconRight"
);
var iconLeft_container6 = document.querySelector(".webimg6 .webimg6_iconLeft");

function convert_container6(index) {
  if (index > max_container6 - size_container6) {
    iconLeft_container6.classList.remove("hide");
    iconRight_container6.classList.add("hide");
  }
  if (index == 0) {
    iconLeft_container6.classList.add("hide");
    iconRight_container6.classList.remove("hide");
  }
  document.querySelector(".webimg6__list").style.marginLeft =
    "-" + marginLeft_container6 + "px";
}

iconRight_container6.addEventListener("click", function () {
  marginLeft_container6 += size_container6;
  convert_container6(marginLeft_container6);
});
iconLeft_container6.addEventListener("click", function () {
  marginLeft_container6 -= size_container6;
  convert_container6(marginLeft_container6);
});

// ------------ footer --------------

var seeMore9 = document.querySelector(".seeMore9");
var concise9 = document.querySelector(".concise9");
var footer9 = document.querySelector(".footer9");

seeMore9.addEventListener("click", function () {
  document.querySelector(".product9__row").classList.add("change9");
  seeMore9.classList.add("hide");
  concise9.classList.remove("hide");
});
concise9.addEventListener("click", function () {
  document.querySelector(".product9__row").classList.remove("change9");
  seeMore9.classList.remove("hide");
  concise9.classList.add("hide");
});

var parent = document.querySelector(".styles__Left");
var span = parent.querySelector(".massage");
var input = document.querySelector(".input input");

function Error(message) {
  span.innerHTML = message;
  input.classList.add("error");
}
function Success() {
  input.classList.remove("error");
  span.innerHTML = "";
}

var login = document.querySelector(".styles__Left--btn");

function checkSTD(input) {
  input.value = input.value.trim();
  if (input.value == "") {
    Error("Số điện thoại không được để trống");
  } else {
    Success();
  }
}
var inputs = document.querySelector("#sdt");
login.addEventListener("click", function (a) {
  a.preventDefault();
  checkSTD(inputs);
});

inputs.addEventListener("keydown", function (a) {
  if (a.key == "Enter") {
    checkSTD(inputs);
  }
});

var size_mHot = document.getElementsByClassName("m_hot-left")[0].clientWidth;
var max_mHot =
  document.getElementsByClassName("m_hot-left--img")[0].clientWidth - size_mHot;
var Arr_mHot = document.getElementsByClassName("m_hot-img_size ");

var wight_mHot = 0;
var number_mHot = 1;
function convertRight__mHot(index) {
  if (index > max_mHot - size_mHot * 2) {
    wight_mHot = 0;
  }
  document.getElementById("m_hot-convert").style.transform =
    "transLateX(-" + wight_mHot + "px)";
}
var title_mHot = [
  " Deal Du Lịch Hấp Dẫn - Giảm Sốc Đón Hè",
  "Deal Sắm Bách Hóa - Deal Hời Giá Sốc",
  "Deal Làm Đẹp - Deal Xịn Giá Hời",
  "Thời Trang Trendy - Vũ Trụ Hàng Hiệu Giảm Sốc",
  "Deal Du Lịch Hấp Dẫn - Giảm Sốc Đón Hè",
];
function convertRight__mHotImg(index) {
  if (index > Arr_mHot.length - 2) {
    number_mHot = 1;
  }
  Arr_mHot[number_mHot + 1].style.transform = "scale(0.7) translateX(-21.3%)";
  Arr_mHot[number_mHot].style.transform = "scale(1)";
  Arr_mHot[number_mHot - 1].style.transform = "scale(0.7) translateX(21.3%)";
  document.querySelector(".m_hot--notifi").innerHTML = title_mHot[number_mHot];
}

function auto_mHot() {
  wight_mHot += size_mHot;
  convertRight__mHot(wight_mHot);
  number_mHot++;
  convertRight__mHotImg(number_mHot);

  setTimeout("auto_mHot()", 3000);
}
auto_mHot();

document.getElementById("homePage").addEventListener("click", function () {
  document.querySelector("#homePage .m_footer-img").src =
    "https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/active-home.png";
  document.querySelector("#category .m_footer-img").src =
    "https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/cate.png";
  document.querySelector("#homePage .m_footer-title").classList.add("m_color");
  document
    .querySelector("#category .m_footer-title")
    .classList.remove("m_color");
});

document.getElementById("category").addEventListener("click", function (a) {
  document.querySelector("#category .m_footer-img").src =
    "https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/active-cate.png";
  document.querySelector("#homePage .m_footer-img").src =
    "https://frontend.tikicdn.com/_mobile-next/static/img/home/navigation/home.png";
  document.querySelector("#category .m_footer-title").classList.add("m_color");
  document
    .querySelector("#homePage .m_footer-title")
    .classList.remove("m_color");
});

document.getElementById("individual").addEventListener("click", function (a) {
  document
    .querySelector("#individual .m_footer-title")
    .classList.toggle("m_color");
});

var number = 0;
function auto_background() {
  number++;
  if (number == 1) {
    document.querySelector(".header-background img").src =
      "https://salt.tikicdn.com/ts/banner/0f/65/5a/cc78315d8fe4d78ac876e8f9005a5cbb.png";
  } else {
    document.querySelector(".header-background img").src =
      "https://salt.tikicdn.com/ts/banner/28/36/00/abb87951a2eae5110f522e47ef56e89c.png";
  }
  if (number > 1) {
    number = 0;
  }
  setTimeout("auto_background()", 4000);
}
auto_background();
