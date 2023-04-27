const {sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require ('./app.js');

test('adds 14 + 9 to equal 23', ()=>{
    let total = sum(14,9);

    expect(total).toBe(23);
});

test("Un dolar debe ser igual a 133.5 yenes",function(){
    expect(fromDollarToYen(1)).toBe(133.5);
});

test("Un euro debe ser igual a 1.1 euros",function(){
    expect(fromEuroToDollar(1)).toBe(1.1);
});
test("Un yen debe ser igual a 0.006libras",function(){
    expect(fromYenToPound(1)).toBe(0.006);
});
