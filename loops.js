// for
for (var i = 1; i < 6; i ++) {
    console.log(i);
}
console.log('Counting completed!')

for (var i = 5; i > 0; i --) {
    console.log(i);
}
console.log('Countdown finished!')

// while
var counter = 1
while (counter < 6) {
    console.log(counter);
    counter ++;
}
console.log('Counting completed!')

var counter = 5;
while (counter > 0) {
    console.log(counter);
    counter --;
}
console.log('Countdown finished!')

var year = 2018;
while (year < 2023) {
    console.log(year);
    year ++;
}

// conditional & loop
for(var i = 1; i <= 10; i++) {
    switch(i) {
        case 1:
            console.log('Gold medal');
            break;
        case 2:
            console.log('Silver medal');
            break;
        case 3:
            console.log('Bronze medal');
            break;
        default:
            console.log(i);
    }
}
