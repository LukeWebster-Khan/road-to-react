import React from 'react';

import List from 'components/List';
import ListData from 'data/ListData';
import 'styles/index.scss';

export const App = () => {
  
  return (
    <div className="App">
      <List
        list={ListData}
      />
    </div>
  );
}

export default App;