const http = require('http');

const users = [
    {
    name: "Steven",
    age: 33,
    description: "The goat of programming"
    },
    {
    name: "James",
    age: 32,
    description: "Silliest geezer"
    },
    {
    name: "Gully",
    age: 12,
    description: "Clapped don"
    }
]

const server = http.createServer((req, res) => {
    if (req.url == '/'){
    res.write('Welcome to the home page');
    res.end()
    }
    
    if (req.url == '/users') {
        res.write(JSON.stringify(users));
        res.end();
    }
})

server.listen(5000);