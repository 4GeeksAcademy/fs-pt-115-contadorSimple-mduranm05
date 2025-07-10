import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import PropTypes from "prop-types";

//create your first component
const bigCounterDiv = {
	display: "inline-block",
	fontSize: "60px",
	lineHeight: "60px",
	background: "#101010",
	color: "white",
	padding: "10px",
	margin: "3px"
}
const Home = (props) => {
	return (
		<div className="bigCounter" style={{ textAlign: "center", background: "black" }}>
			<div className="clock" style={bigCounterDiv}>
				<i className="fa-regular fa-clock"></i>
			</div>
			<div className="four" style={bigCounterDiv}>{props.digiFour % 10}</div>
			<div className="three" style={bigCounterDiv}>{props.digiThree % 10}</div>
			<div className="two" style={bigCounterDiv}>{props.digiTwo % 10}</div>
			<div className="one" style={bigCounterDiv}>{props.digiOne % 10}</div>

		</div>
	);
};
Home.protType = {
  digiFour: PropTypes.number,
  digiThree: PropTypes.number,
  digiTwo: PropTypes.number,
  digiOne: PropTypes.number,
}


export default Home;