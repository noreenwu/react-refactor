import React from 'react'

function ItemList(props) {
  return(
    <div className="item-list">
      <p className="items">Items</p>
      <ol className="item-ordered-list">
          {props.items.map((item, index) => <li key={index}>{item}</li>)}
      </ol>    
    </div>
  )
}

export default ItemList