import { DISHES } from './shared/dishes';
import Main from './components/MainComponent';

import { Component } from 'react';

class App extends Component  {

  constructor(props){
    super(props);
    this.state = {
      dishes:DISHES
    };
  }

  render(){
    return (
    <div>
      <Main/>
    </div>
  )};
}

export default App;
