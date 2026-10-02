let number = 1;
for (let number = 1; number <=100; number++){
    if (number % 3 === 0 && number % 5 === 0) {
        console.log("Bizz Bozz");
    } else if (number % 3 === 0) {
        console.log("Bizz");
    } else if (number % 5 === 0){
        console.log("Bozz")
    } else {
        console.log(number);
    }

}
