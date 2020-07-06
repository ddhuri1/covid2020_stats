import React from 'react';
import {MapDisplay,Navbar}  from './components';
import styles from './App.module.css';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MainPage from './components/MainPage';

class App extends React.Component {
    render(){
        return(
          <BrowserRouter>
            <div className={styles.container}>
              <Navbar />
              <Switch>
              <Route exact path='/covidtrack'component={MainPage} />
              <Route path='/map' component={MapDisplay} />
              </Switch>
            </div>
          </BrowserRouter>
        )
    }
}

export default App;
