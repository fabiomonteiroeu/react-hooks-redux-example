import React from 'react';
import { Provider } from 'rect-redux';

import store from './store';

import CourseList from './components/CouseList'

function App() {
    return(
        <Provider store={store}>
            <div className="App">
                <CourseList />
            </div>
        </Provider>
    ); 
}

export default App;