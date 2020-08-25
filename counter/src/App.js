import React from 'react';
import { connect } from 'react-redux';

import './App.css';
import * as actions from './actions';

function App({ counter, inc, dec, rnd, rst }) {
	return (
		<div className="wrapper">
			<div className="wrapper__page">
	         <div className="wrapper__label">
	         	<h1 className="wrapper__number-title" id="label-number">{counter ? counter : "0"}</h1>
	         </div>
	         <div className="wrapper__btns" id="buttons">
	         	<button onClick={inc} className="wrapper__btn green" id="increment" href="#"><img src="img/plus.svg" alt="plus" /></button>
	         	<button onClick={dec} className="wrapper__btn yellow" id="decrement" href="#"><img src="img/minus.svg" alt="minus" /></button>
	         	<button onClick={rnd} className="wrapper__btn yellow" id="random" href="#"><img src="img/random.svg" alt="minus" /></button>
	         	<button onClick={rst} className="wrapper__btn red" id="reset" href="#"><img src="img/reset.svg" alt="reset" /></button>
	         </div>
	      </div>
		</div>
	)
}

const mapStateToProps = state => ({counter: state});

export default connect(mapStateToProps, actions)(App);
