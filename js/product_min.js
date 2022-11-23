$(document).ready(function() {
    const btn64 = document.getElementById('64');
    const btn128 = document.getElementById('128');
    const btn500 = document.getElementById('500');
    const product = document.getElementById('productbtn');


    btn64.addEventListener('click', function handleClick() {
        product.innerHTML = `<span>$500.00</span> <a href="#" class="cart-btn">Add to your cart</a>`;
      });
    btn128.addEventListener('click', function handleClick() {
        product.innerHTML = `<span>$600.00</span> <a href="#" class="cart-btn">Add to your cart</a>`;
      });
    btn500.addEventListener('click', function handleClick() {
        product.innerHTML = `<span>$800.00</span> <a href="#" class="cart-btn">Add to your cart</a>`;
      });


      $('.color-choose input').on('click', function() {
        var productColor = $(this).attr('data-image');
  
        $('.active').removeClass('active');
        $('.left-column img[data-image = ' + productColor + ']').addClass('active');
        $(this).addClass('active');
    });
});
