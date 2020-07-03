import React from 'react';
import {Cards, Chart, CountryPicker}  from './components';
import styles from './App.module.css';
import { fetchData } from './api/';

class App extends React.Component {
    state = {
        data: {},
        country: '',
      }
    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
        this.setState({ data });
      }

      handleCountryChange = async (country) => {
        const data = await fetchData(country);
    
        this.setState({ data, country: country });
      }
    
    render(){
        const { data, country } = this.state;
        return(
            <div className= {styles.container}>
                <h1>HELLO</h1>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
                <Cards data={data} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;
