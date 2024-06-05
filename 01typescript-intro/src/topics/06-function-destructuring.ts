export interface Product{
    description:string;
    price: number;
}

const phone:Product={
    description:"Nokia a1",
    price:150.0
}

const tablet:Product={
description:"Ipad",
price:250.0
}


 interface TaxCalculationOptions{
    tax:number;
    products:Product[];
}


//function taxCalculation(options:TaxCalculationOptions):[number,number]{
    //function taxCalculation({tax,products}:TaxCalculationOptions):[number,number]{
        export function taxCalculation(options:TaxCalculationOptions):[number,number]{

let total=0;
const {tax, products}=options;

products.forEach(({price}) => {
    total+=price;
});

return[total,total*tax];
}
const shoppingCart=[phone,tablet];
const tax=0.15;

 export const [total, taxTotal]=taxCalculation({
    products:shoppingCart,
    tax:tax,
})


console.log("Total", total);
console.log("Tax", taxTotal);


