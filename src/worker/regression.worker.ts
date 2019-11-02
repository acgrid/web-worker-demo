const ctx: Worker = self as any;
 
// Post data to parent thread
console.log('init of worker')
// Respond to message from parent thread
ctx.addEventListener('message', (event) => {
  console.log(event)
  // ctx.postMessage({ foo: "foo" })
})

