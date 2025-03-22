let objA = { x: 42 }

let objB = objA

console.log(objB === objA)

objA = { x: 101 }

console.log(objB === objA)

objA = { ...objB }

console.log(objB === objA)

objA

objA.x = 333

console.log(objB.x)
