import React from 'react';
import {MapDisplay,Navbar, Info, Check, Symptoms, Sick, People, Protect, Test}  from './components';
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
                <Route exact path='/covidtrack' component={MainPage} />
                <Route path='/map' component={MapDisplay} />
                <Route exact path='/info' component={Info} />
                <Route path='/check' component={Check} />
                <Route path='/test' component={Test} />
                <Route path='/sym' component={Symptoms} />
                <Route path='/people' component={People} />
                <Route path='/protect' component={Protect} />
                <Route path='/sick' component={Sick} />
              </Switch>
            </div>
          </BrowserRouter>
        )
    }
}

export default App;
