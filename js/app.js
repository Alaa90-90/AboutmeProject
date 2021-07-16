'use strict';
let score = 0;

let username = prompt('let us know about your NAME');
console.log(username);



alert('nice to meet you, ' + username);


alert('LET US START THE GUESSING GAME');

function qw1() {
    let myname = prompt('DO YOU THINK MY NAME START WITH .. A ..?');

    console.log('the answer before', myname);

    myname = myname.toUpperCase();

    console.log('the answer after', myname);

    if (myname === 'YES' || myname === 'Y') {

        console.log(myname);
        alert('YOU ARE RIGHT!');
        score++;

    } else if (myname === 'NO' || myname === 'N') {

        console.log(myname);
        alert('TRY AGAIN ..');

    } else {
        alert('please write your answer using  yes/no or y/n only !');
    }
}
qw1();
console.log(qw1);



function qw2() {
    let age = prompt('DO YOU THINK THAT I AM IN THE 20`S DECADE? ');

    console.log('the answer before', age);

    age = age.toUpperCase();

    console.log('the answer after', age);

    if (age === 'YES' || age === 'Y') {

        console.log(age);
        alert('MAYBE!');

    } else if (age === 'NO' || age === 'N') {

        console.log(age);
        alert('IT SEEM RIGHT');
        score++;

    } else {
        alert('please write your answer using  yes/no or y/n only !');
    }
}
qw2();
console.log(qw2);



function qw3() {
    let home = prompt('IN YOUR OPINION I LIVE IN AMMAN ?');

    console.log('the answer before', home);

    home = home.toUpperCase();

    console.log('the answer after', home);

    if (home === 'YES' || home === 'Y') {

        console.log(home);
        score++;

        alert('YES I LIVE IN AMMAN !');

    } else if (home === 'NO' || home === 'N') {

        console.log(home);
        alert('IN FACT I LIVE IN AMMANH');

    } else {
        alert('please write your answer using  yes/no or y/n only !');
    }
}
qw3();
console.log(qw3);


function qw4() {
    let football = prompt('DO YOU THINK THAT I LIKE WATCH FOOTBALL ?');

    console.log('the answer before', football);

    football = football.toUpperCase();

    console.log('the answer after', football);

    if (football === 'YES' || football === 'Y') {

        console.log(football);
        score++;

        alert('YES I LIKE WATCH FOOTBALL');

    } else if (football === 'NO' || football === 'N') {

        console.log(football);
        alert('YOU ARE WRONG !');

    } else {
        alert('please write your answer using  yes/no or y/n only !');
    }
}
qw4();
console.log(qw4);


function qw5() {
    let best = prompt('DO YOU AGREE WITH ME THAT ! LEONIL MESSI ! IS THE BEST FOOTBALL EVER ?');

    console.log('the answer before', best);

    best = best.toUpperCase();

    console.log('the answer after', best);

    if (best === 'YES' || best === 'Y') {

        console.log(best);
        score++

        alert('YOU ARE REAL FOOTBALL FAN ');

    } else if (best === 'NO' || best === 'N') {

        console.log(best);
        alert(' I DO NOT THINK THAT AND I DON`T AGREE WITH YOU');

    } else {
        alert('please write your answer using  yes/no or y/n only !');
    }

}
qw5();
console.log(qw5);


function qw6() {
    let num
    alert('NOW guess A Number in your mind');

    num = prompt('inter the number you guess');

    for (let i = 0; i < 4; i++) {

        if (num == 7) {
            alert('you are right !');
            score++

            break;
        }

        else if (num < 7) {
            num = prompt('TOO low!');
        }

        else {
            num = prompt('TOO HIGHT !');
        }
        if (i === 3) {
            alert('you are out of tries and the correct answer is 7'

            )
        }
    }
}
qw6();
console.log(qw6);


function qw7() {
    let month = ['march', 'april', 'may', 'june', 'july', 'august'];

    alert('what is the best month to make  BARBECUE in the outside country');

    for (let k = 0; k < 6; k++) {

        let yourmonth = prompt('type the name of month');

        for (let j = 0; j < month.length; j++) {

            if (yourmonth === month[j]) {


                alert('you are right !');
                score++;
                k = 6;
                break;



            }

        }
        if (k === 5) {
            alert('you are out of tries and the correct answer is ');

        }


    }
}
qw7();
console.log(qw7);

alert('all monthes suitable just if you want january,february,march,april,may,june,july,august,septemper,october,november,december !');
alert('your score is ' + score + '/7');
