let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let bootsPrice = "100";
console.log(`Boots price: ${bootsPrice}`);

let taxRate; // no tax rate has been defined
console.log(`Tax rate: ${taxRate ?? 10}%`);
taxRate = 0; // zero rated for tax
console.log(`Tax rate ${taxRate ?? 10}%`);

if (hatPrice === bootsPrice) {
    console.log("Prices are the same");
} else {
    console.log("Prices are different");
}   

let totalPrice = Number(hatPrice) + Number(bootsPrice);
console.log(`Total price: ${totalPrice}`);

let myVariable = "Adam";
console.log(`Type: ${typeof myVariable}`);

myVariable = 100;
console.log(`Type: ${typeof myVariable}`);

let firstCity;

let secondCity = firstCity || "London";
console.log(`City: ${secondCity}`);

// Defining and using arrays
let names = ["Hat", "Boots", "Gloves"];
let prices = [];

prices.push(100);
prices.push("100");
prices.push(50.25);

console.log(`First Item: ${names[0]}: ${prices[0]}`);

// working with objects
let hat = {
    name: "Hat",
    price: 100
};

let boots = {
    name: "Boots",
    price: "100"
}

let sumPrices = (...numbers) => numbers.reduce((total, val) => 
            total + (Number.isNaN(Number(val)) ? 0 : Number(val)));

totalPrice = sumPrices(hatPrice, bootsPrice);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200, 300);
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(100, 200, undefined, false, "hello");
console.log(`Total Price: ${totalPrice} ${typeof totalPrice}`); 

totalPrice = sumPrices(...prices);
console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

totalPrice = sumPrices(hat.price, boots.price);
console.log(`Total: ${totalPrice} ${typeof totalPrice} - `);

// using spread operator on array to expand the content of an array for easy concatenation
let combinedArray = [...names, ...prices];
combinedArray.forEach(element => console.log(`Combined Array Element: ${element}`));

// destructuring an array
let [one, two] = names;
console.log(`One: ${one}, Two: ${two}`);

// ignoring elements when destructuring an array
let [,,three] = names;
console.log(`Three: ${three}`);

// assigning remaining elements to an array
prices = [100, 120, 50.25];
let [, ...highest] = prices.sort((a, b) => a - b);
highest.forEach(price => console.log(`High price: ${price}`));

