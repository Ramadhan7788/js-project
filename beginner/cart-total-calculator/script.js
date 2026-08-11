function formatNumber(value) {
    const cleanValue = value.toString().replace(/\D/g, '');
    if (!cleanValue) return '0';
    return parseInt(cleanValue, 10).toLocaleString('id-ID');
}


function parseFormattedNumber(value) {
    const cleanValue = value.toString().replace(/\D/g, '');
    return parseFloat(cleanValue) || 0;
}


function formatAndCalculate(inputElement) {

    const unformattedValue = parseFormattedNumber(inputElement.value);
    inputElement.value = formatNumber(unformattedValue);


    updateInvoiceCalculations();
}


function calculateSubtotal(items) {
    let subtotal = 0;
    for (const item of items) {
        subtotal += item.price * item.quantity;
    }
    return subtotal;
}

function calculateDiscount(subtotal, discountPercent) {
    return (subtotal * discountPercent) / 100;
}

function calculateTax(amountAfterDiscount, taxPercent) {
    return (amountAfterDiscount * taxPercent) / 100;
}

function createCartSummary(items, discountPercent, taxPercent) {
    const subtotal = calculateSubtotal(items);
    const discount = calculateDiscount(subtotal, discountPercent);
    const amountAfterDiscount = subtotal - discount;
    const tax = calculateTax(amountAfterDiscount, taxPercent);
    const total = amountAfterDiscount + tax;

    return { subtotal, discount, tax, total };
}

function updateInvoiceCalculations() {
    const rows = document.querySelectorAll('#invoice-form tbody tr');

    let totalQty = 0;
    let totalHargaAwal = 0;
    let totalPotongan = 0;
    let totalPajak = 0;
    let totalAkhir = 0;

    rows.forEach((row, index) => {
        const i = index + 1;

        const qty = parseFormattedNumber(document.getElementById(`qty-${i}`).value);
        const price = parseFormattedNumber(document.getElementById(`price-${i}`).value);
        const discountPercent = parseFormattedNumber(document.getElementById(`discount-${i}`).value);
        const taxPercent = parseFormattedNumber(document.getElementById(`tax-${i}`).value);

        const itemArray = [{ price, quantity: qty }];
        const summary = createCartSummary(itemArray, discountPercent, taxPercent);

        document.getElementById(`subtotal-${i}`).value = formatNumber(Math.round(summary.total));

        totalQty += qty;
        totalHargaAwal += summary.subtotal;
        totalPotongan += summary.discount;
        totalPajak += summary.tax;
        totalAkhir += summary.total;
    });

    document.getElementById('total-quantity').textContent = formatNumber(totalQty);
    document.getElementById('total-price').textContent = formatNumber(Math.round(totalHargaAwal));
    document.getElementById('total-discount').textContent = formatNumber(Math.round(totalPotongan));
    document.getElementById('total-tax').textContent = formatNumber(Math.round(totalPajak));
    document.getElementById('grand-total').textContent = formatNumber(Math.round(totalAkhir));
}

document.getElementById('invoice-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Form berhasil di-submit!');
});