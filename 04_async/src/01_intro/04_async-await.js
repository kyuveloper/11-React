function increase(number) {
    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const result = number + 10;
            if(result > 50) {
                const e = new Error('Number is Too Big!');
                return reject(e);
            }

            resolve(result);
        }, 1000)
    })
    return promise;
}


/* 
    await의 두가지 기능
    1. await가 달린 함수의 결과인 promise에 담긴 결과(promise 내부의 resolve에 담길 결과)를 반환한다.
    2. await가 달린 비동기 처리들은 동기식을 동작하게 된다
*/

async function run() {
    try{
        let result = await increase(0);
        console.log(result);

        result = await increase(0);
        console.log(result);

        result = await increase(0);
        console.log(result);

        result = await increase(0);
        console.log(result);
        
        result = await increase(0);
        console.log(result);

        return result;
    } catch(e) {
        console.log(e,'가 발생했습니다.');
    }
}

const value = async() => {
    const runValue = await run();
    console.log('value : ' + runValue);
    return runValue;
}

const result = value();
console.log(result);
