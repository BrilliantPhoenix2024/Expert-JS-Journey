function cutFruitPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apple, carrot) {
    const applePieces = cutFruitPieces(apple);
    const carrotPieces = cutFruitPieces(carrot);

    const juice = `Juice with ${applePieces} pieces of apples and ${carrotPieces} pieces of carrots.`;
    return juice;
}

console.log(fruitProcessor(6, 2));