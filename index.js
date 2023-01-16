// Code your solutions in this file

function writeCards(names, msg) {
    const note= []
    for (let i=0;i<names.length;i++) {
        const message =`Thank you, ${names[i]}, for the wonderful ${msg} gift!`;
        note.push(message)
    }
    return note;
}
writeCards(["Guadalupe", "Ollie", "Aki"],'surprise');

function countDown(){
    let countDown =10;
    while (countDown>=0) {
        console.log(countDown--);
    }
}

