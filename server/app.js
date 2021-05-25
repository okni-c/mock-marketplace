const {Prohairesis} = require('prohairesis');
const env = require('./env');

const database = new Prohairesis(env.CLEARDB_DATABASE_URL);

// CREATE TABLE users(
//     ID int PRIMARY KEY AUTO_INCREMENT,
//     FirstName VARCHAR(20) NOT NULL,
//     LastName VARCHAR(25) NOT NULL,
//     DateCreated DATETIME
// )

// CREATE TABLE postings(
//     ID int PRIMARY KEY AUTO_INCREMENT,
//     User int,
//     FOREIGN KEY(User) REFERENCES Users(ID),
//     Description VARCHAR(255),
//     PostDate DATETIME
// )

// SELECT * FROM users

// SHOW TABLES

// INSERT INTO users (
//     FirstName,
//     LastName,
//     DateCreated
// ) VALUES (
//     'User',
//     '2',
//     NOW()
// )

// INSERT INTO postings (
//     User,
//     Description,
//     PostDate
// ) VALUES (
//     '4',
//     'This is my 1st Posting!',
//     NOW()
// )

// DELETE FROM postings WHERE id=44

// UPDATE postings SET Description = 'This is my 1st Posting!' WHERE ID = 54

database
    .query(`
        SELECT * FROM postings WHERE User=4
    `)
    .then((res) => {
        console.log(res);
    })
    .catch((e) => {
        console.error(e);;
    })
    .finally(() => {
        database.close();
    });

