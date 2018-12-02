import React, {PureComponent} from 'react';
import Square from './Square';

class App extends PureComponent{
  render() {
    console.log(Square);
    return (
      <div className="container">
        <Square/>
        <Square/>
        <Square/>
        <Square/>
      </div>
    );
  }
}

export default App;