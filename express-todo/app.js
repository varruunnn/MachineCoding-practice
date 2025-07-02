import express from "express";
import fs from "fs/promises";

const app = express();
app.use(express.json());

let todos = "todos.json";

async function getAllTodos() {
  try {
    const data = await fs.readFile(todos, "utf-8");
    return JSON.parse(data);
  } catch (error) {
    if (error.code === "ENOENT") {
      await fs.writeFile(TODO_FILE, JSON.stringify([]));
      return [];
    }
    console.error("Error reading todos file:", error);
    throw new Error("Failed to read todos from file.", { cause: error });
  }
}

async function writeTodo(data) {
  try {
    await fs.writeFile(todos, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error("Error writing todos file:", error);
    throw new Error("Failed to write todos to file.", { cause: error });
  }
}

app.get("/", async (req, res) => {
  try {
    const todos = await getAllTodos();
    res.json(todos);
  } catch (error) {
    console.error("Error in GET /:", error);
    res.status(500).send("Failed to retrieve todos.");
  }
});

app.post("/add-todo", async (req, res) => {
    const todo = req.body.todo;
    if (!todo) {
        return res.status(400).send("Todo content not found in request body.");
    }
    try {
        const todos = await getAllTodos();
        todos.push(todo);
        await writeTodo(todos);
        console.log(todos);
        return res.status(200).send("Todo added successfully.");
    } catch (error) {
        console.error("Original error:", error);
        res.status(500).send("Something went wrong with this operation.");
    }
});


app.delete("/delete-todo", async (req, res) => {
    try {
        await writeTodo([]);
        return res.status(200).send("All todos deleted successfully.");
    } catch (error) {
        console.error("Original error:", error);
        res.status(500).send("Something went wrong with this operation.");
    }
});

app.delete("/delete-todo/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id, 10);
            if (isNaN(id) || id <= 0) {
            return res.status(400).send("Invalid todo ID provided.");
        }
        let todos = await getAllTodos();
              if (id > todos.length) {
            return res.status(404).send("Todo not found with the given ID.");
        }
    console.log(id);
    todos.splice(id - 1, 1);
    await writeTodo(todos);
    return res.status(200).send("Todo deleted successfully.");
  } catch (error) {
    console.error("Original error:", error);
    throw new Error("Something went wrong with this operation.", {
      cause: error,
    });
  }
});

app.listen(3000);
