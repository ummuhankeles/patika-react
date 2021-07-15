// import axios from "axios";
// import fetch from "node-fetch";

// async function getData(number) {
//     const users = await (
//         await fetch(`https://jsonplaceholder.typicode.com/users/${number}`)
//     ).json();

//     const posts = await (
//         await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
//     ).json();

//     users[posts] = posts;
//     return users;
// }
// export default getData;

import axios from "axios";
import fetch from "node-fetch";

async function getData(number) {
  const users = await (
    await fetch(`https://jsonplaceholder.typicode.com/users/${number}`)
  ).json();

  const posts = await (
    await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${number}`)
  ).json();

  users[posts] = posts;
  return users;
}
export default getData;