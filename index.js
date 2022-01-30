const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get('/',(req, res) =>{
    res.send('Wow!! Nice you are done successfully.');
});

const users = [
    {id: 0, name: 'Shabana', email: "shabana@gmail.com"},
    {id: 1, name: 'Bapparaj', email: "bapparaj@gmail.com"},
    {id: 2, name: 'Alomgir', email: "Alomgir@gmail.com"},
    {id: 3, name: 'Moushumi', email: "Moushumi@gmail.com"},
    {id: 4, name: 'Amir Khan', email: "amirkhan@gmail.com"},
    {id: 5, name: 'Sakib khan', email: "sakibkhan@gmail.com"}
]

app.get('/users', (req, res) =>{
   
    const search = req.query.search;
    if(search){
        //use query search
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);//object o pataite pari
    }
    
});

// app.method
 app.post('/users', (req, res) =>{
     const newUser = req.body;
     newUser.id = users.length;
     users.push(newUser);
     console.log('hitting the post', req.body)
    // res.send(JSON.stringigy(newUser))
    res.json(newUser)
     
 })

// dynamic api
app.get('/users/:id', (req, res) =>{
    const id = req.params.id;
    const user = users[id]
    res.send(user)
});

app.get('/fruits/mangoes/fazli', (req, res)=>{
    res.send('Yammy Yammy tok marka fazli')
})

app.listen(port, ()=>{
    console.log('Listening to port', port)
})