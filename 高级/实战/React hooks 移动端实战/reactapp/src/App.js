import React from 'react';
import IndexRoute from './router'
import Frame from './common/component/frame'

function App() {
  return (
    <Frame className="App">
        <IndexRoute />
    </Frame>
  );
}

export default App;
