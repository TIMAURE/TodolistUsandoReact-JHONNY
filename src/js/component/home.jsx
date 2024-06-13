import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="contenerdo">
<h1>todos</h1>
<ul>
	<li><input type="text" placeholder="Que necesitas hacer?"></input></li>
	<li>pasear al perro<i class="fa-solid fa-x"></i></li>
	<li>comer<i class="fa-solid fa-x"></i></li>
</ul>
<div>2 Items</div>


		</div>
	);
};

export default Home;
