// 변수를 만들었음. 뭔가 저장할 수 있는 공간을 만들었음. 
// 메모리에 뭔가를 아직 넣지 않았지만, 넣을 수 있는 공간을 할당받음. 
let type1 ; 

console.log(type1);

// type1 이라는 변수에, 저장할 수 있는 메모리 공간에, 5를 넣음. 
    // 이 순간 1) 자료형이 있어서 -> 필요한 byte 만큼 공간을 확보했을 것 이고 
        // 거기에 5 를 넣은 것 
type1 = 5;

console.log(type1)
console.log(typeof type1)

type1 = '메롱';
console.log(type1);
console.log(typeof type1);


let text1 = "배고파"; 
let text2 = "아직많이는 아니고";
console.log(text1 + text2);

a = 3;
b = 10; 

console.log(a-b);
console.log(a+b);
console.log(a*b);
console.log(a%b);
console.log(a**b);


let test1 = 1; 

test1 = test1 + 3; 
console.log(test1);

test1 ++ 
console.log(test1)

test1 -- 
console.log(test1)

console.log(test1 ** 2)


age = 10;
age2 = 100120;
age3 = 29191; 

if (age < age2) {
	console.log("true면 이게 나와");
} else {
	console.log("false면 이게 나와");
}


if (age < age2) {
    console.log ("만약에 이거면, age 나이가 더 많음.🤟🤟🤟");
} 
else if (age == age2) {
    console.log("if flase이고, 2번째 조건에서 true 면, 이게 나와")
}
else {
    console.log("다 아니면, 여기가 나와")
}


// 구구단 

// 진행 되어야 하는 것 
// 2*1 
// 2*2
// 2*3
// 2*4 
// 이런 과정이 반복되야 함 

// 여기에서 데이터를 하나씩, 혹은, 데이터를 2개씩, 변경할 수 있음. 

for (a_test = 2; a_test <= 9; a_test++) {
    for (b_test = 1; b_test <= 9; b_test++) {
        console.log(a_test * b_test)
    }
}


let students = ["누가있나", "손흥민있나", "박지성", "정더기", "정덕진"];
let awards = ["아자자", "정덕진"]; 

for (i = 0; i < students.length; i++) {
    for (j = 0; j < awards.length; j++) {

        if (students[i] == awards[j]) {
            console.log("수상자는" + " " + students[i] + "🙌")
        }
    }
}


// ( ) 괄호 안이 단순하게, 조건 반복만을 결정하는 건 아님 
    // '동일 동작'을 유지하면서 '데이터가 어떻게 각 turn 마다 바뀌게 할지' 를 하는게 for 문 이라면
    // 괄호 안은 인덱싱 역할만 하는게 아니라, 그 자체로 data 가 나오는 곳이 된다.  
for (num = 0; num <= 60; num++) {
    if (num % 3 == 0) {
        console.log (num + "이 숫자는 3의 배수 👍");
    }
    else {
        console.log (num + "이 숫자는 3의 배수는 아님 📛")
    }
} 