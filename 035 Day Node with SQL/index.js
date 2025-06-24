const {faker}= require("@faker-js/faker");
const mysql = require('mysql2');


let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: "delta_app",
    password: 'root'
})

let getUser = () => {
    return [
        faker.string.uuid(),
        faker.internet.username(), // before version 9.1.0, use userName()
        faker.internet.email(),
        faker.internet.password(),
    ];
}

let getRandomUser = () => {
    return {
        id: faker.string.uuid(),
        username: faker.internet.username(), // before version 9.1.0, use userName()
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}


let q = "INSERT INTO user(id, username ,email, password) VALUES ?";

// let u1= getUser();
// let u2= getUser();
// let users =  [u1,u2];
// console.log(users)

let users = [];
for(let i=1; i<=100;i++){
    users.push(getUser());
}
// try {
//      connection.query(q, [users], (err, result) => {
//         if (err) {
//             throw err;
//         }
//         console.log(result)
//     })
// } catch (err) {
//     console.log(err);
// }
// connection.end();


