import { Product  } from "./06-function-destructuring";

import { taxCalculation } from "./06-function-destructuring";


const shoppingCart:Product[]=[

    {
        description:"Samsung",
        price:400
    },
    {
        description:"Iphone",
        price:239
    }

];

const [total,tax]=taxCalculation({
    products: shoppingCart,
    tax:0.15
});
console.log("Total: ",total);
console.log("Tax: ",tax);

