import React, { useState } from "react";


//create your first component
const Home = () => {
const[inputValue, setInputValue] = useState ("");
const[todo,settodo] = useState([]);

	return (
		<div className="contenedor">
<h1>To Do List!</h1>
<ul>
	<li><input
                        type="text"
                        placeholder="Tareas por hacer?"
                        onChange={(e) => setInputValue(e.target.value)}
                        value={inputValue}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && inputValue.trim() !== "") {
                                settodo(prevTodo => [...prevTodo, inputValue]);
                                setInputValue("");}}}/>

	</li>
	{todo.length === 0 ? (<li>"No hay tareas, añadir tareas"</li>) : todo.map((item, index) =><li className="conjunto">{item}{""}
		<i className="fa-solid fa-x" 
		onClick={() => 
			settodo(prevTodo => prevTodo.filter((_, currentIndex) => index !== currentIndex))
		}>
			</i></li>)}
</ul>
<div className="numeroPagina"><strong>{todo.length} items</strong></div>
</div>);};

export default Home;
