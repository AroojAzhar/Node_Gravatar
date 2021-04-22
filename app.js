const Gravatar = require('gravatar');

//user

let user = {
    username : 'Arooj',
    email : 'ansari.rooj32@gmail.com',
    password: '5090sjhcjksbcasmcbnjksc509011'
};

let imageURL = Gravatar.url(user.email, {
   s : '400',
   r : 'PG',
   d : 'mm'
});

let updatedUser = {
  ...user,
  image : imageURL
};

console.log(updatedUser);