const express = require('express');

const app = express();

app.use(express.json());

app.get("/courses", (request, response) => {
    console.log(request.query)
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3"
    ]);
});

app.post("/courses", (request, response) => {
    console.log(request.body)
    return response.json([
        "Curso 1",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
});

app.put("/courses/:id", (request, response) => {
    console.log(request.params.id);
    return response.json([
        "Curso 1.0",
        "Curso 2",
        "Curso 3",
        "Curso 4"
    ]);
});

app.patch("/courses/:id", (request, response) => {
    return response.json([
        "Curso 1.0",
        "Curso 2.0",
        "Curso 3",
        "Curso 4"
    ]);
});

app.delete("/courses/:id", (request, response) => {
    return response.json([
        "Curso 1.0",
        "Curso 2.0",
        "Curso 4"
    ]);
});

app.listen(3333);