
const suma = (a,b) =>{
    return a+b;
}

module.exports = {suma};

function palindromo(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase();
    const strReversed = newStr.split("").reverse().join("");

    return newStr === strReversed ? "true" : "false";
    }

    module.exports = {palindromo};