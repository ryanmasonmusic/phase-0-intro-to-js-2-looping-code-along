
function writeCards(names, surprise){
    const card = []
for (let i = 0; i < names.length; i++){
    card.push(`Thank you, ${names[i]}, for the wonderful ${surprise} gift!`);
}
return card
}
function countDown(){
    let i = 10;
    while (i >= 0) {
    console.log(i--)
    }
    return i
}