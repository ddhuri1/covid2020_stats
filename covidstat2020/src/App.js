import React from 'react';
import {MapDisplay}  from './components';
import styles from './App.module.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import MainPage from './components/MainPage';

class App extends React.Component {
    render(){
        return(
          <BrowserRouter>
            <div className={styles.container}>
              <Navbar />
              <Route exact path='/'component={MainPage} />
              <Route path='/map' component={MapDisplay} />
            </div>
          </BrowserRouter>
        )
    }
}

export default App;
