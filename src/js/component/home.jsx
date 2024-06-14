import React, { useState } from "react";
import { UsageState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
const[inputvalue, setinputvalue] = useState ("")
const[todo,settodo] = useState([])

	return (
		<div className="contenerdo">
<h1>todos</h1>
<ul>
	<li><input type="text" placeholder="Que necesitas hacer?" onChange={(e)=> setinputvalue(e.target.value)} value={inputvalue} onKeyDown={(e) =>{if (e.key === "Enter"){settodo(todo.concat([inputvalue]));setinputvalue("");}} } ></input></li>
{todo.map((item, index) =><li>{item}{""}<i class="fa-solid fa-x" onClick={() => settodo(todo.filter((t, currentindex)=> index != currentindex))}></i></li>
)}
</ul>

<div className="numeroPagina">{todo.length} items</div>


		</div>
	);
};

export default Home;
