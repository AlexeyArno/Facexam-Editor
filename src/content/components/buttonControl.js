import React, { Component } from 'react';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import NavigationMoreHoriz from 'material-ui/svg-icons/navigation/more-horiz'
import ActionVerifiedUser from 'material-ui/svg-icons/action/verified-user'
import ContentReply from 'material-ui/svg-icons/content/reply'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

export default class ButtonControll extends Component{

constructor(props) {
		    super(props);
		    this.state = {
		    	pos: false,
		    	save: false,
		    	back: false
		    };
		  }

		  click=()=>{
		  	this.setState({
		  		pos: !this.state.pos
		  	})
		  }

		  save=()=>{
		  	this.setState({
		  		save: !this.state.save
		  	})
		  }
		  back=()=>{
		  	this.setState({
		  		back: !this.state.back
		  	})
		  }




render(){
	const styles = {
	  smallIcon: {
	    width: 36,
	    height: 36,
	  }
	};

	const style={
		position: 'absolute',
		right: 10,
		bottom: (this.state.pos)?70:0,
		zIndex: 0
	}
	// copy object 
	var style1 = JSON.parse(JSON.stringify(style));
	style1.bottom = (this.state.pos)?125:0
	const actions = [
		      <FlatButton
		        label="Отмена"
		        // primary={true}
		        onClick={this.save}
		      />,
		      <FlatButton
		        label="Да"
		        // primary={true}
		        // keyboardFocused={true}
		        onClick={()=>this.props.save()}
		      />,
		    ];
    const actionsBack = [
      <FlatButton
        label="Отмена"
        // primary={true}
        onClick={this.back}
      />,
      <FlatButton
        label="Да"
        // primary={true}
        // keyboardFocused={true}
        onClick={()=>window.location.pathname = '/author'}
      />,
    ];
	return(
			<div>
				<Dialog
		          title="Сохранить"
		          actions={actions}
		          modal={false}
		          contentStyle={{width: 400}}
		          // bodyStyle={{maxWidth: 400}}
		          titleStyle={{color: this.props.color }}
		          open={this.state.save}
		          onRequestClose={this.save}
		        >
		          Вы действительно хотите сохранить изменения?
		        </Dialog>
		        <Dialog
		          title="Вернуться"
		          actions={actionsBack}
		          modal={false}
		          contentStyle={{width: 400}}
		          // bodyStyle={{maxWidth: 400}}
		          titleStyle={{color: this.props.color }}
		          open={this.state.back}
		          onRequestClose={this.back}
		        >
		          Вы действительно хотите выйти из редактора?
		        </Dialog>
				<div style={{position: 'fixed', right: 20, bottom: 25, zIndex: 9}}>

					<FloatingActionButton zDepth={0} backgroundColor={this.props.color}
										  onClick={this.click} style={{zIndex: 67}}> 
						<NavigationMoreHoriz/>
					</FloatingActionButton>
					<FloatingActionButton onClick={this.back} backgroundColor={this.props.color}
					 			style={style} mini={true}>
					      <ContentReply color={this.props.color}/>
					 </FloatingActionButton>
					 <FloatingActionButton   onClick={this.save} backgroundColor={this.props.color}
					 			style={style1} mini={true}>
					      <ActionVerifiedUser color={this.props.color}/>
					 </FloatingActionButton>

					</div>
			</div>

		

		   )

}




}

	// <FloatingActionButton zDepth={3} backgroundColor={this.props.color}
	// 								 onClick={this.click} style={style} mini={true}> 
	// 					<ActionVerifiedUser/>
	// 			</FloatingActionButton>