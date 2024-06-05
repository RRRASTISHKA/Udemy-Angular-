
export interface Passenger{
name:string;
children?: string[];
}

const pasenger1:Passenger={
    name:"Fernando"
}

const pasenger2:Passenger={
    name:"Fernando",
    children: ["Natalia", "Elizabeth"]
}

const printChildren = (passenger:Passenger)=>{
    //const howMany=passenger.children?.length||0;

    const howMany=passenger.children?.length;
    
    console.log(passenger.name,howMany);


    return howMany;

}


printChildren(pasenger2);