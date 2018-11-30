import React, {PureComponent} from 'react';
import Square from './Square';

class App extends PureComponent{
  render() {
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