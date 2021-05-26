document.addEventListener("DOMContentLoaded", () => {    
    const todoText = document.querySelector('.input');
    const btnAdd = document.querySelector('.button'); 
   
    const {combineReducers} = Redux;     
    const mainReducers = combineReducers({
        todoList:reducers.todoList,
        currentTodo: reducers.currentTodo        
    });     
    
    const store = Redux.createStore(mainReducers);   
    store.subscribe(render);
    render();
    
    function render () {             
        todoText.onblur = onChangeText;
        btnAdd.onclick = onAddTodo;   
        renderList(getTodos());            
    } 

    // ------ Manipulação de Tela ----- 

    function onChangeText ({target}) {
        currentText = target.value.replace(/\./g, '').trim(); 
        store.dispatch(getAction(actions.UPDATE_CURRENT_TODO, currentText))                                  
    }            

    function onAddTodo () {
        try  {             
            addTodo(getCurrentTodo());                        
            cleanCurrentTodo();
            const list = getTodos();
            renderList(list);
            cleanInput();                    
        } catch (error) {
            displayError();                    
         }                
    }

    function cleanInput () { 
        todoText.value = '';                
    }   

    function displayError () {                       
        return alert("Digite Algo!");
    }

    function onDeleteTodo (id) {                                   
        deleteTodo(id);        
    }

    function renderList (list) {
        const ul = document.querySelector('#todo-list');
                       
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
        const todo = {
            text: upperCase(task),
            id: Math.random().toString(36).substring(2)
        }     
        store.dispatch(getAction(actions.ADD_TODO, todo));         
    }

    function getTodos() {
        return store.getState().todoList;
    }

    function getCurrentTodo(){      
        return store.getState().currentTodo;
    }

    function upperCase(task) {
        return task[0].toUpperCase() + task.substr(1);
    }
    
    function deleteTodo (id) {        
        store.dispatch(getAction(actions.REMOVE_TODO, id));                            
    }

    function cleanCurrentTodo () {
        store.dispatch(getAction(actions.REMOVE_CURRENT_TODO));        
    }
     
});