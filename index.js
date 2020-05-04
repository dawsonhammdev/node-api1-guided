const express = require ('express')

const server = express();

server.use(express.json());

let lessons = [
    {
        id: 1,
        name: "Introduction to HTTP Servers"
    },
]

server.get('/', (req, res) => {
    res.json({api: "Up and Running"})
})

server.get('/api/lessons', function (req, res) {
    const lessons = [
       {
        id: 1,
        name: 'Intro to HTTP and Node, Express'
       } 
    ]

    res.json(lessons);
})

server.post('/api/lessons', function(req, res) {
    const lessonInformation = req.body;

    lessons.push(lessonInformation);

    res.status(201).json(lessonInformation);
})

server.delete('/api/lessons:id', function(req, res) {
    const id = req.params.id;

    lessons = lessons.filter(lesson => lesson.id != id)
})

server.listen(8000, () => console.log("n/== API IS UP ==/n"))