import React from 'react';
import ReactDOM from 'react-dom';
import MonkeyUi from 'monkeyui';
import classNames from 'classnames';
const CheckBox = MonkeyUi.CheckBox;
const Input=MonkeyUi.Input;
const Button=MonkeyUi.button;
const InputGroup = Input.Group;

const CheckBoxR=React.createClass({
	getInitialState:function(){
		console.log('init');
		return{
			kpu:'none',
			rch:'none',
			testwatch:true
		}
		
	},
	componentWillMount:function(){
		console.log('willMount');
		this.setState({
			kpu:'block',
			rch:'block',
			check:true
		})
	},
	componentDidMount:function(){
		console.log('DidMount');
	},
	handleChange:function(n,e){
		console.log(n,e.target.checked);
		let check=e.target.checked;
		switch(n){
			case 1:if(check&&check==true){
			this.setState({
			kpu:"block",
			check:this.state.check==true?false:true
		})	
		}else{
			this.setState({
			kpu:"none",
			check:this.state.check==true?false:true
		})
		};
			case 2:
				if(check==true){
					this.setState({rch:"block"})
				}else{
					this.setState({rch:"none"})
				}
			
		}
		
		
	},
	render:function(){
		return <div>
			<input type='checkbox' checked={this.state.check} onChange={this.handleChange.bind(this,1)}/>KPU <input type='checkbox' onChange={this.handleChange.bind(this,2)}/>RCH<CheckBox onChange={this.handleChange}>New</CheckBox>
			<Input type='text' size='small'/>
			<Input type='textarea' rows={4} style={{ width: 200 }}/>
			<div style={{display:this.state.kpu}} name='div1' id='div1'>111</div>
			<div style={{display:this.state.rch}}>222</div>
		</div>
	}

})
ReactDOM.render(<CheckBoxR/>,document.getElementById('test'));

