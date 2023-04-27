function sum(a, b) {
    return a + b;
  }
  

const fromDollarToYen = function(valorEnDolar){
    let valorEnYen = valorEnDolar * 133.5;
    
    return valorEnYen;
}

const fromEuroToDollar = function(valorEnEuro){
    let valorEnDolar = valorEnEuro * 1.1;
    
    return valorEnDolar;
}

const fromYenToPound = function(valorEnYen){
    let valorEnLibra = valorEnYen * 0.006;
    
    return valorEnLibra;
}
module.exports = {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound};