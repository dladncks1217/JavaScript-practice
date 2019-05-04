var music = "음악";
console.log(this.music);

let sports = "축구";
console.log(this.sports);

/*
글로벌 오브젝트가 window 오브젝트는 아니다.
하지만, window오브젝트로 글로벌 변수에 접근 가능.
크롬 개발자 도구에서 this가 window오브젝트를 참조하는 것을 볼 수 있음. 여기서 window 오브젝트는 글로벌 오브젝트 의미.
논리적으로 접근하면 js에 글로벌 오브젝트는 있지만 window 오브젝트는 없음.
window 오브젝트에는 DOM메서드도 있고 window 오브젝트 자체의 프로퍼티도 있다.
이와 같이 window 오브젝트에 글로벌 오즈젝트가 존재하는 개념이다.
*/
