

let input = prompt("Enter year of birth");

let parsedInput = parseInt(input);
console.log(parsedInput);


if (parsedInput >= 1930 && parsedInput <= 2021) {
    console.log("Valid Year of birth")


    let chineseZodiacSign = (parsedInput - 4) % 12;
        console.log("chineseZodiacSign")

    if (chineseZodiacSign === 0) {
        alert("Rat")
    } else if (chineseZodiacSign === 1) {
        alert("Ox")
    } else if (chineseZodiacSign === 2) {
        alert("Tiger")
    } else if (chineseZodiacSign === 3) {
        alert("Rabbit")
    } else if (chineseZodiacSign === 4) {
        alert("Dragon")
    } else if (chineseZodiacSign === 5) {
        alert("Snake")
    } else if (chineseZodiacSign === 6) {
        alert("Horse")
    } else if (chineseZodiacSign === 7) {
        alert("Goat")
    } else if (chineseZodiacSign === 8) {
        alert("Monkey")
    } else if (chineseZodiacSign === 9) {
        alert("Rooster")
    } else if (chineseZodiacSign === 10) {
     alert("Dog")
    } else if (chineseZodiacSign === 11) {
        alert("Pig")
    } else{console.log("Enter a valid year")}

}
else {
    console.log("Invalid Year of birth")
}