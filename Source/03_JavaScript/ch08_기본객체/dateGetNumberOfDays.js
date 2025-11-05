// dateGetNumberOfDays.js
// now.getNumberOfDays(openday) => now는this/ openday는 that
Date.prototype.getNumberOfDays = function(that){
  let intervalMilisec = Math.abs(this.getTime() - that.getTime()); // 두 날짜의 차이를 밀리초 단위로 계산
  let day = Math.floor(intervalMilisec/(1000 * 60 * 60 * 24)); // 밀리초를 일 단위로 변환
  return day;  
};
let now = new Date();
let limitday = new Date(2026, 1, 12, 18, 0, 0); // 2026년 2월 12일 18시 0분 0초
console.log(now.getNumberOfDays(limitday), '일 남음');
console.log(limitday.getNumberOfDays(now), '일 지남');
console.log(now.getNumberOfDays(limitday), '일 남음');