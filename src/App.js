import React from 'react';
import logo from './logo.svg';
import './App.css';
import ItemList from './ItemList'
import DeleteItem from './DeleteItem'
import CreateItem from './CreateItem'


class App extends React.Component {
  state = {
    value: '',
    items: [],
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  addItem = (v) => {
    this.setState(oldState => ({
      items: [...oldState.items, v],
    }));
  };

  deleteLastItem = event => {
    this.setState(prevState => ({ 
      items: prevState.items.slice(0, -1) 
    }))
  };

  noItemsFound = () => {
    return this.state.items.length === 0;
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <h2>Shopping List</h2>
		<CreateItem onAddItem={this.addItem}/>

		<DeleteItem deleteLastItem={this.deleteLastItem}
				 	  buttonDisabled={this.noItemsFound}/>

		<ItemList items={this.state.items}/>

      </div>
    );
  }
}

export default App;
