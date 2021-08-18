const phone = 1219;
const casePrice = 59;
function updatecase(product, price, isAdd) {
    const productInput = document.getElementById(product + '-number');
    let productNumber = productInput.value;
    if (isAdd == true) {
        productNumber = parseInt(productNumber) + 1;
    }
    else if (productNumber > 0) {
        productNumber = parseInt(productNumber) - 1;
    }
    productInput.value = productNumber;
    const productPrice = document.getElementById(product + '-price');
    productPrice.innerText = productNumber * price;

    calculateTotal();
}
function getInputValue(product) {
    const productInput = document.getElementById(product + '-number');
    const productNumber = productInput.value;
    return productNumber;
}
function calculateTotal() {
    const phoneTotal = getInputValue('phone') * 1219;
    const caseTotal = getInputValue('case') * 59;
    const subtotal = phoneTotal + caseTotal;
    const tax = subtotal / 10;
    document.getElementById('sub-total').innerText = subtotal;
    document.getElementById('tax').innerText = tax;
    const total = subtotal + tax;
    document.getElementById('total').innerText = total;

}

// handle phone incriment decriment 
document.getElementById('phone-plus').addEventListener('click', function () {
    updatecase('phone', phone, true);
})
document.getElementById('phone-minus').addEventListener('click', function () {
    updatecase('phone', phone, false)
})

// handle case incriment decriment 
document.getElementById('case-plus').addEventListener('click', function () {
    updatecase('case', casePrice, true);
})
document.getElementById('case-minus').addEventListener('click', function () {
    updatecase('case', casePrice, false)
})