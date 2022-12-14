// finding out the best solution with respect to:
// time complexity and other complexities

// sum of all n numbers
let total = 0;
let time1 = performance.now()
// using a for loop
function loop_sum(n){
    for (let i=0; i<=n; i++){
        total += i
    }
    return total
}

// using equation
function sum(n){
    return n*(n+1)/2
}



console.log(sum(232424))

// time complexity measure
let time2 = performance.now()

console.log(`Time to render: ${(time2-time1)/1000}`)

// so the equational approach is less time consuming. thus reducing time complexity.


//! However time complexity is not always the best appraoch to understand the best performance. As different machine can give up different time.
//* Thats why big o notation is used. It simply means the number of calculations done to solve the problem. big o(1) means the best performer.
