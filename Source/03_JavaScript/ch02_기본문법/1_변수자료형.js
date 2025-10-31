// 자료형 : string, number, boolean, function, undefined, object(array), undefined
var variable; // 선언만 하고 값이 할당되지 않은 상태
console.log('1. variable 타입 :', typeof(variable), '- 값 :', variable); // undefined
variable = '이름은 \'홍길동\'입니다'; // string
console.log('2. variable 타입 :', typeof(variable), '- 값 :', variable);
variable = -31313131313131.2323; // number
console.log('3. variable 타입 :', typeof(variable), '- 값 :', variable);
variable = false; // boolean
console.log('4. variable 타입 :', typeof(variable), '- 값 :', variable);
variable = function() {
  alert('함수 속');
}; // function
console.log('5. variable 타입 :', typeof(variable), '- 값 :', variable);
variable = {'name':'홍길동', 'age':20}; // object(array)
console.log('6. variable 타입 :', typeof(variable), '- 값 :', variable.name, variable.age);
variable = ['홍길동', 10, function() {}, true, {'name':'홍길동'},[1,2,3]]; // object(array)
console.log('7. variable 타입 :', typeof(variable), '- 값 :', variable.name, variable.age);