// console.log(Math.floor(Math.random() * 10));

// let number = [];

// number[0] = Math.floor(Math.random() * 10);
// do {
//     number[1] = Math.floor(Math.random() * 10);
// } while(number[1] === number[0])
// do {
//     number[2] = Math.floor(Math.random() * 10);
// } while(number[2] === number[0] || number[2] === number[1])
// do {
//     number[3] = Math.floor(Math.random() * 10);
// } while(number[3] === number[0] || number[3] === number[1] || number[3] === number[2])

// console.log(number);

const list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let number = [];
for (var i = 0; i < 4; ++i) {
    let select = Math.floor(Math.random() * list.length);
    number[i] = list.splice(select, 1)[0];
    console.log('i:', i, 'list:', list, 'number:', number, 'length:', list.length);
}

let count = 0;
let strike = 0;
let ball = 0;
while (count < 10) {
    const input = prompt('숫자를 입력하세요');
    let inputArray = input.split('');
    strike = 0;
    ball = 0;
    count++;
    // 입력받은 숫자를 비교분석하는 부분
    for (let j = 0; j < 4; ++j) {
        for (let k = 0; k < 4; ++k) {
            if (number[j] == inputArray[k]) {
                if (j === k) {
                    strike++;
                } else {
                    ball++;
                }
                break;
            }
        }
    }
    // 결과를 표시하는 부분 console객체는 밑에 설명
    if (strike === 4) {
        console.log('홈런!!!' + (count) + '번 만에 맞추셨습니다');
        break;
    } else if (count >= 10) {
        console.log('시도 횟수를 초과하셨습니다.');
    } else {
        console.log(inputArray.join('') + ': ' + strike + '스트라이크 ' + ball + '볼');
    }
}