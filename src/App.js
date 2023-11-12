import React from 'react';
import List from 'components/List';
import Search from 'components/Search';
import ListData from 'data/ListData';
import 'styles/index.scss';

export const App = () => {
    return (
        <div className="App">
            <Search />
            <hr />
            <List list={ListData} />
        </div>
    );
};

export default App;
