import React from 'react'
import PropTypes from 'prop-types'

function DeleteItem(props) { 
  return(
    <button onClick={props.deleteLastItem} disabled={props.buttonDisabled()}>
		Delete Last Item
	</button>      
  )   
}

DeleteItem.propTypes = {
    onDeleteLastItem: PropTypes.func.isRequired,
    noItemsFound: PropTypes.func.isRequired  
}

export default DeleteItem