import React, {Component} from 'react';
import './App.css';
import {Provider} from 'react-redux';
import store from '../store/store';
import {BrowserRouter} from 'react-router-dom';
import MainApp from "./MainApp";

class App extends Component {


    render() {

        return (
            <Provider store={store}>
                <BrowserRouter>
                    <MainApp/>
                </BrowserRouter>
            </Provider>
        );
    }
}


export default App;
