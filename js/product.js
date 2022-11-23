$(document).ready(function() {

      $('.color-choose input').on('click', function() {
        var productColor = $(this).attr('data-image');
  
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + productColor + ']').addClass('active');
        $(this).addClass('active');
    });
});

const btn1TB = document.getElementById('1');
    const btn2TB = document.getElementById('2');
    const btn4TB = document.getElementById('4');
    const product2 = document.getElementById('productbtn2');

    btn1TB.addEventListener('click', function handleClick() {
        product2.innerHTML = `<span>$80.00</span> <a href="#" class="cart-btn">Add to your cart</a>`;
      });
    btn2TB.addEventListener('click', function handleClick() {
        product2.innerHTML = `<span>$125.00</span> <a href="#" class="cart-btn">Add to your cart</a>`;
      });
    btn4TB.addEventListener('click', function handleClick() {
        product2.innerHTML = `<span>$200.00</span> <a href="#" class="cart-btn">Add to your cart</a>`;
      });
