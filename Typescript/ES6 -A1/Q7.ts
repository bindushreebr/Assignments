//a
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element === array1[3]);
console.log(found);

//b
const user1 = {
    name: "bindu",
    address: {
        city: "Bangalore",
        state:"karnataka",
        pin:"560076"  
    }
};
console.log(user1.address.pin);