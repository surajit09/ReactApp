var React = require('react');
var PropTypes=require('prop-types');

function PlayerPreview(props){
	
	return(
	
		<div>
		
			<div className='column'>
				<img className='avatar' src={props.avatar} alt={'Avatar for '+ props.username}/>
				<h2 className='username'>@{props.username}</h2>
			
		     </div>
				{props.childern}
		</div>
	
	
	
	)
}


PlayerPreview.proptypes={
	
	avatar:PropTypes.string.isRequired,
	username:PropTypes.string.isRequired,
	
}

module.exports=PlayerPreview