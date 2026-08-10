function calculateDiscount(price, discountPercent) {
  return (price * discountPercent) / 100;
}

function calculateTax(priceAfterDiscount, taxPercent) {
  return (priceAfterDiscount * taxPercent) / 100;
}

function createPriceSummary(price, discountPercent, taxPercent) {
  const discount = calculateDiscount(price, discountPercent);
  const priceAfterDiscount = price - discount;
  const tax = calculateTax(priceAfterDiscount, taxPercent);
  const finalPrice = calculateFinalPrice(price, discountPercent, taxPercent);
  return {
    price,
    discount,
    tax,
    finalPrice,
  };
}
console.log(createPriceSummary(100, 20, 10));
console.log(createPriceSummary(200, 25, 5));
console.log(createPriceSummary(50, 0, 10));


const form = document.getElementById("calculatorForm");
const errorBox = document.getElementById("errorBox");

form.addEventListener("submit", function(event) {
  event.preventDefault();


  errorBox.style.display = "none";
  errorBox.textContent = "";


  const price = parseFloat(document.getElementById("price").value);
  const discountPercent = parseFloat(document.getElementById("discount").value);
  const taxPercent = parseFloat(document.getElementById("tax").value);


  if (isNaN(price) || isNaN(discountPercent) || isNaN(taxPercent)) {
    showError("Semua bidang input harus diisi dengan angka!");
    return;
  }

  if (price < 0) {
    showError("Harga tidak boleh bernilai negatif!");
    return;
  }

  if (discountPercent < 0 || discountPercent > 100) {
    showError("Persentase diskon harus berada di rentang 0 - 100%!");
    return;
  }

  if (taxPercent < 0 || taxPercent > 100) {
    showError("Persentase pajak harus berada di rentang 0 - 100%!");
    return;
  }


  const discount = calculateDiscount(price, discountPercent);
  const priceAfterDiscount = price - discount;
  const tax = calculateTax(priceAfterDiscount, taxPercent);
  const finalPrice = priceAfterDiscount + tax;


  document.getElementById("discountResult").textContent = discount.toLocaleString("id-ID");
  document.getElementById("taxResult").textContent = tax.toLocaleString("id-ID");
  document.getElementById("finalPriceResult").textContent = finalPrice.toLocaleString("id-ID");
});


function showError(message) {
  errorBox.textContent = message;
  errorBox.style.display = "block";
}