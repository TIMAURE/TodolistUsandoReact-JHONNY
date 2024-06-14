import React, { useState } from "react";


//create your first component
const Home = () => {
const[inputValue, setInputValue] = useState ("");
const[todo,settodo] = useState([]);

	return (
		<div className="contenedo">
<h1>To Do!</h1>
<ul>
	<li><input type="text" placeholder="Tareas Por Hacer?" onChange={(e)=> setInputValue(e.target.value)} value={inputValue} onKeyDown={(e) =>{if (e.key === "Enter"){settodo(todo.concat([inputValue]));setInputValue("");}} } ></input></li>
	{todo.length === 0 ? (
          <li>"No hay tareas, añadir tareas"</li>
        ) :todo.map((item, index) =><li>{item}{""}<i className="fa-solid fa-x" onClick={() => settodo(todo.filter((t, currentindex)=> index != currentindex))}></i></li>
)}
</ul>

<div className="numeroPagina">{todo.length} items</div>
</div>
	);
};

export default Home;
