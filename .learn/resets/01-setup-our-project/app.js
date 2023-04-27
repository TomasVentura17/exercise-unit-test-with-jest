function sum(a, b) {
    return a + b;
  }
  

const fromDollarToYen = function(valorEnDolar){
    let valorEnYen = valorEnDolar * 133.52;
    
    return valorEnYen;
}

const fromEuroToDollar = function(valorEnEuro){
    let valorEnDolar = valorEnEuro * 0.91;
    
    return valorEnDolar;
}

const fromYenToPound = function(valorEnYen){
    let valorEnLibra = valorEnYen * 0.0060;
    
    return valorEnLibra;
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};