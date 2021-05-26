document.addEventListener("DOMContentLoaded", () => {
            
    const todoText = document.querySelector('.input');
    const btnAdd = document.querySelector('.button');

    todoText.onblur = onChangeText;
    btnAdd.onclick = onAddTodo
   

    // ----- Estado Inicial -----

    todoList = [];
    currentTodo = null;

    // ------ Manipulação de Tela ----- 

    function onChangeText ({target}) {
        currentTodo = target.value.replace(/\./g, '').trim();  
    }            

    function onAddTodo () {
        try  { 
            addTodo(currentTodo); 
            cleanCurrentTodo(); 
            const list = getTodos();
            renderList(list);                   
        } catch (error) {
            displayError();                    
         }                
    }

    function displayError () {
        cleanInput()                
        return alert("Digite Algo!")
    }

    function onDeleteTodo (id) {                            
        deleteTodo(id)
        const list = getTodos();
        renderList(list);
    }

    function renderList (list) {
        const ul = document.querySelector('#todo-list');
        cleanInput();
        
        [...ul.children].forEach( item => item.remove());
       
        list.forEach((item) => {
            const li = document.createElement('li');
            const p = document.createElement('p')                    
                                                    
            p.innerText = item.text;
            li.id = item.id;
            li.onclick = () => onDeleteTodo(li.id);  
            ul.appendChild(li); 
            li.appendChild(p);   
        }); 
    }
    
    // ------ Lógica ----- 
    
    function addTodo(task) {
        if (task === null || task === '') {
            throw 'Error';
        };
        
        const todo = {
            text: upperCase(task),
            id: Math.random().toString(36).substring(2)
        };
        todoList = [...todoList, todo] ;                               
    }

    function getTodos() {
        return todoList;
    }

    function upperCase(task) {
        return task[0].toUpperCase() + task.substr(1);
    }

    function deleteTodo (id) {
        todoList = todoList.filter( e => e.id !== id);                
    }

    function cleanCurrentTodo () {
        currentTodo = '';
    }

    function cleanInput () {
        todoText.value = '';
        todoText.focus();
    }

});