




// This is required for the test to function properly  
module.exports = { calculateTax, convertToUpperCase, findMaximum, isPalindrome, calculateDiscountedPrice };


function calculateTax(amount) {
    tax = amount * 0.10
    return tax
}

function convertToUpperCase(text) {
    text = text.toUpperCase()
    return text
}

function findMaximum(num1, num2){
    return Math.max(num1, num2)
}

function isPalindrome(text){
    if (text === text.split("").reverse().join("")) {
        return true
    }

    else {
        return false
    }

}


function calculateDiscountedPrice(originalPrice, discountPercentage){
    price = originalPrice * (discountPercentage / 100)
    return price
}