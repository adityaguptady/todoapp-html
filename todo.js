//Array to hold todos
var count = 0
var editingFlag = -1
var filter = "incomplete" //incomplete, complete, all
var todoArray = [
    {
        id:count++,
        text:"1",
        completed: false
    },
    {
        id:count++,
        text:"Todo2",
        completed: false
    },
    {
        id:count++,
        text:"Todo3",
        completed: true
    },
    {
        id:count++,
        text:"Todo 4 34",
        completed: false
    },
    {
        id:count++,
        text:"Todo5",
        completed: false
    },
    {
        id:count++,
        text:"Todo6",
        completed: false
    }
]

const deleteTodo = (id) =>
{
    console.log("id: "+id)
    console.log(todoArray)
    todoArray = todoArray.filter(todoTemp =>
    {
        if(id === todoTemp.id)
        {
            return false
        }
        else
        {
            return true
        }
    })
    console.log(todoArray)
    updateFrontend()
}

const updateFrontend = () =>
{
    var todoList = document.getElementById("todoList")
    todoList.innerHTML = ""
    todoArray.map(todoTemp =>
    {
        switch(filter)
        {
            case "incomplete":
                if(!todoTemp.completed)
                {
                    console.log(todoTemp)
                    console.log(todoTemp.completed)
                    let checkboxInput = ""
                    let textTodo = todoTemp.text
                    if(todoTemp.completed)
                    {
                        checkboxInput = "<input type='checkbox' checked onchange='onCheckedChange("+todoTemp.id+")'/>"
                        textTodo = "<s>"+textTodo+"</s>"
                    }
                    else
                    {
                        checkboxInput = "<input type='checkbox' onchange='onCheckedChange("+todoTemp.id+")'/>"
                    }
                    if(editingFlag === todoTemp.id )
                    {
                        todoList.innerHTML = todoList.innerHTML + 
                        "<li id='listElementStyle'>"+
                            checkboxInput+
                            "<input id='todoEdit' type='text' value='"+todoTemp.text+"'></input>"+
                            (todoTemp.completed ? 
                            "" :
                            "  <button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
                            "  <button onclick=saveEditedTodo("+todoTemp.id+")>Save</button>")
                        +"</li>"                        
                    }
                    else
                    {
                        todoList.innerHTML = todoList.innerHTML + 
                        "<li id='listElementStyle'>"+
                            checkboxInput+
                            textTodo+
                            (todoTemp.completed ? 
                            "" :
                            "  <button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
                            "  <button onclick=editTodo("+todoTemp.id+")>Edit</button>")
                        +"</li>"
                    }
                }
                break;
            case "complete":
                if(todoTemp.completed)
                {
                    console.log(todoTemp)
                    console.log(todoTemp.completed)
                    let checkboxInput = ""
                    let textTodo = todoTemp.text
                    if(todoTemp.completed)
                    {
                        checkboxInput = "<input type='checkbox' checked onchange='onCheckedChange("+todoTemp.id+")'/>"
                        textTodo = "<s>"+textTodo+"</s>"
                    }
                    else
                    {
                        checkboxInput = "<input type='checkbox' onchange='onCheckedChange("+todoTemp.id+")'/>"
                    }
                    if(editingFlag === todoTemp.id )
                    {
                        todoList.innerHTML = todoList.innerHTML + 
                        "<li id='listElementStyleCompleted'>"+
                            checkboxInput+
                            "<input id='todoEdit' type='text' value='"+todoTemp.text+"'></input>"+
                            (todoTemp.completed ? 
                            "" :
                            "  <button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
                            "  <button onclick=saveEditedTodo("+todoTemp.id+")>Save</button>")
                        +"</li>"                        
                    }
                    else
                    {
                        todoList.innerHTML = todoList.innerHTML + 
                        "<li id='listElementStyleCompleted'>"+
                            checkboxInput+
                            textTodo+
                            (todoTemp.completed ? 
                            "" :
                            "  <button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
                            "  <button onclick=editTodo("+todoTemp.id+")>Edit</button>")
                        +"</li>"
                    }
                }
                break;
            case "all":
                console.log(todoTemp)
                console.log(todoTemp.completed)
                let checkboxInput = ""
                let textTodo = todoTemp.text
                let listElementStyle = "listElementStyle"
                if(todoTemp.completed)
                {
                    checkboxInput = "<input type='checkbox' checked onchange='onCheckedChange("+todoTemp.id+")'/>"
                    textTodo = "<s>"+textTodo+"</s>"
                    listElementStyle = "listElementStyleCompleted"
                }
                else
                {
                    checkboxInput = "<input type='checkbox' onchange='onCheckedChange("+todoTemp.id+")'/>"
                    listElementStyle = "listElementStyle"
                }
                if(editingFlag === todoTemp.id )
                {
                    todoList.innerHTML = todoList.innerHTML + 
                    "<li id="+listElementStyle+">"+
                        checkboxInput+
                        "<input id='todoEdit' type='text' value='"+todoTemp.text+"'></input>"+
                        (todoTemp.completed ? 
                        "" :
                        "  <button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
                        "  <button onclick=saveEditedTodo("+todoTemp.id+")>Save</button>")
                    +"</li>"                        
                }
                else
                {
                    todoList.innerHTML = todoList.innerHTML + 
                    "<li id="+listElementStyle+">"+
                        checkboxInput+
                        textTodo+
                        (todoTemp.completed ? 
                        "" :
                        "  <button onclick=deleteTodo("+todoTemp.id+")>Delete</button>"+
                        "  <button onclick=editTodo("+todoTemp.id+")>Edit</button>")
                    +"</li>"
                }
                break;
            default:
        }
        
        
        return todoTemp
    })
}

const saveEditedTodo = (id) =>
{
    console.log(id)
    todoArray = todoArray.map(todoTemp =>
    {
        if(id === todoTemp.id)
        {
            todoTemp.text = document.getElementById("todoEdit").value
            return todoTemp
        }
        else
        {
            return todoTemp
        }
    })
    editingFlag = -1
    updateFrontend()
}

const editTodo = (id) =>
{
    console.log(id)
    editingFlag = id
    updateFrontend()
}

// function, =>
const addTodo = () =>
{
    let todoText = document.getElementById("todoInput").value
    if(todoText === "")
    {
        //check validation
        alert("Todo can't be blank, please enter something for todo!")
    }
    else
    {
        //insert array
        todoArray.push(
            {
                id: count++,
                text:todoText,
                completed: false
            })
        //blanking the input 
        document.getElementById("todoInput").value = ""
        console.log(todoArray)
        updateFrontend()
    }
}

const onCheckedChange = (id) =>
{
    console.log("onCheckedChange: "+id)
    //data update
    todoArray = todoArray.map(todoTemp => 
    {
        if(id === todoTemp.id)
        {
            todoTemp.completed = !todoTemp.completed
        }
        return todoTemp
    })
    //update frontend
    updateFrontend()
}

const filterTodo = (filterAction) =>
{
    console.log("filterTodo", filterAction)
    filter = filterAction
    updateFrontend()
}