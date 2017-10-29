import React from 'react';
// import {Link} from 'react-router-dom';
import CurrentConditions from '../components/CurrentConditions';

const Home = (props) => (
	<div>
		<h2 className="all-conds__title">All Locations</h2>
		<ul className="all-conds__list">
			{/* <h3>Home Page</h3>
			<div>
			<ul>
				<Link to={`/location/${props.locationOneName.replace(/ /g,'_')}`}>Location: {props.locationOneName}</Link>{' '}
				<Link to={`/location/${props.locationTwoName.replace(/ /g,'_')}`}>Location: {props.locationTwoName}</Link>{' '}
				<Link to={`/location/${props.locationThreeName.replace(/ /g,'_')}`}>Location: {props.locationThreeName}</Link>
			</ul>
			</div> */}
			<li className="all-conds__item">
				<h2 className="cond__h2">{props.locationOneName}</h2>
				<CurrentConditions conditions={props.locationOneConditions}/>
			</li>
			<li className="all-conds__item">
				<h2 className="cond__h2">{props.locationTwoName}</h2>
				<CurrentConditions conditions={props.locationTwoConditions}/>
			</li>
			<li className="all-conds__item">
				<h2 className="cond__h2">{props.locationThreeName}</h2>
				<CurrentConditions conditions={props.locationThreeConditions}/>
			</li>
		</ul>
	</div>
);

export default Home;
