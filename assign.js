const o = { x: 42 }

// const p = Object.assign({}, o)

const p = { ...o }

p.x = 101

console.log(o)

console.log(o.x)

const makeId = () => ((Math.random() * 0xffffffff) >>> 0).toString(16)

console.log(makeId())
