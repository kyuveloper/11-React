/* 
    promise는 콜백 지옥과 같은 코드가 형성되지 않게 (비동기 통신 간에 순서를 정하기 쉽게) 하는 방안으로 ES6에서 도입되었다.
    (현재 시점에서 ES6가 지원되는 브라우저에서 작업하고 있다.)
*/

// 내부적으로 비동기 처리를 하고 pomise를 반환하는 함수
const increase = (number) => {
    // const asyncFunc = (resolve, reject) => {
    //     setTimeout(()=>{
    //         const result = number + 10;
    //         return result;
    //     }, 1000);
    // }
    // asyncFunc(resolve, reject);
    const promise = new Promise((resolve/*성공시*/, reject/*실패시*/)=>{ // promise는 내부에서 작업을 기다림 그래서 외부에서 promise를 참조하면 그냥 객체를 받아서 활용할 수 없음.
        setTimeout(()=>{
            const result = number + 10;

            if(result > 50) {
                const e = new Error('Number is Too Big!');
                return reject(e);
            }

            resolve(result);
        }, 1000)
    });
    return promise;
}

/* 
    increase 함수 호출 후에는 promise가 반환된다.
    이 promise는 resolve 함수에 던져진 인수를 기억하고 있다.
    이 promise를 통해 then 함수를 호출하고 던져지는 콜백 함수의 인수를 기억했던 resolve 함수의 인수를 넣어준다.
*/
console.log(increase(0));

const number = increase(0)
    .then(number=>{
        console.log(number);
        return increase(number);
    }).then(number=>{
        console.log(number);
        return increase(number);
    }).then(number=>{
        console.log(number);
        return increase(number);
    }).then(number=>{
        return number;
    }).catch(e=>console.log(e, '가 발생했습니다.'))
    .finally(()=>{
        console.log('finally 실행');
    });

console.log(number); // promise 객체가 출력됨
    /* 
        promise 객체 생성 이유
        1. 비동기 처리 함수를 실행 시 성공, 실패에 대한 처리가 용이하게 resolve 및 reject를 제공한다.
        2. promise 객체가 제공하는 메소드를 사용하기 위함 (콜백 지옥 상황을 해소해 주기 때문 / 가동성이 좋음, 메도스 체이닝 방식 제공)

        *메소드 체이닝 : const api = feth().then(r => r.json()).then(jValue => jValue).catch(err => console.log(err));
    */




// const testFun = async () => {
//     const api = await fetch().then(r => r.json()).then(d => setState(d)); // await 작업 끝날 때까지 잠시 기다려
//     const jsonValue = api.json();
// }