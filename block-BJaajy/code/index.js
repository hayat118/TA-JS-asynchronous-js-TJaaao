let users=['getify','prank7','suraj122','ravi11o','kumaarsachin'];

let usersPromises=users.map((user)=>{
  // console.log(user)
  return fetch(`https://api.github.com/users/${user}`)
  .then((res)=>{
    res.json();
  })
});
Promise.all(usersPromises).then((user)=>{
  users.forEach((user)=>console.log(user.followers));
})

// 2

let promiseOne=fetch(`https://random.dog/woof.json`).then((resolve)=>{
  resolve.json()
});

let promiseTwo=fetch(`https://aws.random.cat/meow `).then((resolve)=>{
  resolve.json()
});
Promise.race([promiseOne,promiseTwo]).then(console.log);