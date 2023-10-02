$(document).ready(function () {
  showSlides();

});
let slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active-slide');
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex-1].classList.add('active-slide');
  
  setTimeout(showSlides, 2000);   //chuyển đổi tự động sau mỗi 2 giây
}

/******-------------back to top */
// Hiển thị nút khi cuộn xuống 20px tính từ đầu trang
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}

// Khi click vào nút, trang sẽ scroll về đầu trang
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/*----------------------chat box-----------------------*/
// Hiển thị Chatbox
var dem = 0;
$('.open-chatbox').click(function () {
  dem++;
  if (dem == 1) {
    $('.chatbox-container').fadeIn();
  } else {
    $('.chatbox-container').fadeOut();
    dem = 0;
  }
});

// Đóng Chatbox
$('.chatbox-close').click(function(){
  $('.chatbox-container').fadeOut();
});

// Gửi tin nhắn
$('.chatbox-input button').click(function(){
   var message = $('.chatbox-input input').val();
   $('.chatbox-message').append('<div>'+ message +'</div>');
   $('.chatbox-input input').val('');
});



/*---------------------------do bong menu bar --------------*/
function shadowMenu(){
  const stickyBox = document.querySelector('.menu-bar');
  let isSticky = false;
  
  window.addEventListener('scroll', () => {
    const boxPosition = stickyBox.getBoundingClientRect();
    const boxTop = boxPosition.top;
    
    if (boxTop <= 0) {
      stickyBox.classList.add('active');
      isSticky = true;
    } else if (isSticky) {
      stickyBox.classList.remove('active');
      isSticky = false;
    }
  }, 100);
}

      // Lấy tất cả các phần tử HTML cần sử dụng trong nhiều button
const qtyInputs = document.querySelectorAll('input[data-max_value][data-min_value][data-step]');
const qtyBtnUps = document.querySelectorAll('a.qty-btn.btn-up');
const qtyBtnDowns = document.querySelectorAll('a.qty-btn.btn-down');

// Lặp qua danh sách phần tử để đăng ký sự kiện
qtyInputs.forEach((qtyInput, index) => {
  const maxVal = parseInt(qtyInput.getAttribute('data-max_value'));
  const minVal = parseInt(qtyInput.getAttribute('data-min_value'));
  const stepVal = parseInt(qtyInput.getAttribute('data-step'));

  const qtyBtnUp = qtyBtnUps[index];
  qtyBtnUp.addEventListener('click', (event) => {
    event.preventDefault();
    let qtyValue = parseInt(qtyInput.value);
    qtyValue = qtyValue + stepVal > maxVal ? maxVal : qtyValue + stepVal;
    qtyInput.value = qtyValue;
  });

  const qtyBtnDown = qtyBtnDowns[index];
  qtyBtnDown.addEventListener('click', (event) => {
    event.preventDefault();
    let qtyValue = parseInt(qtyInput.value);
    qtyValue = qtyValue - stepVal < minVal ? minVal : qtyValue - stepVal;
    qtyInput.value = qtyValue;
  });

  qtyInput.addEventListener('change', () => {
    let qtyValue = parseInt(qtyInput.value);
    if (isNaN(qtyValue) || qtyValue > maxVal) {
      qtyValue = maxVal;
    } else if (qtyValue < minVal) {
      qtyValue = minVal;
    }
    qtyInput.value = qtyValue;
  });
});
/*--------------danh muc-----------------------------------*/
$(document).ready(function(){
  $('.danhmuc').click(function () {
    $('.menu2').slideToggle();
  });
})
$(document).ready(function(){
  $('.bshop').click(function () {
    $('.dshop').slideToggle();
  });
})
$(document).ready(function(){
  $('.bproducts').click(function () {
    $('.dproducts').slideToggle();
  });
})
$(document).ready(function(){
  $('.bblog').click(function () {
    $('.dblog').slideToggle();
  });
})

/******---------------------------------------------- */
shadowMenu();

/*---------------------tang giam san pham --------------------------*/

/*----------------------*/
function filterProducts(event) {
  event.preventDefault();
  const productName = document.getElementById('product-name').value.toLowerCase();
  const productCategory = document.getElementById('product-category').value;
  const productPrice = document.getElementById('product-price').value;
  const productBrand = document.getElementById('product-brand').value.toLowerCase();

  // Code để lọc sản phẩm dựa trên các tiêu chí đã chọn
  console.log(productName, productCategory, productPrice, productBrand);
}

const filterForm = document.querySelector('.product-filter form');
filterForm.addEventListener('submit', filterProducts);

function init() {
  var images = document.querySelectorAll("div.hinhcon img");
  var frame = document.querySelectorAll("div.hinhcon .frame-hc");
  var currImg;
  currImg = frame[0];
  currImg.style.border = "1px solid rgb(0, 255, 72)";
  for (var i = 0; i < images.length; i++) {
    images[i].onclick = function () {
      var hc = this.src;
      var img = document.getElementById("mainIMG")
      img.src = hc;
    }
    frame[i].onclick = function () {
      if (currImg == this) {
        this.style.border = "1px solid rgb(0, 255, 72)";
      } else {
        this.style.border = "1px solid rgb(0, 255, 72)";
        currImg.style.border = "1px solid #f0f0f0";
        currImg = this;
      }
    }
  }
}