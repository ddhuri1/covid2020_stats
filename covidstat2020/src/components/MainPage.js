import React from 'react';
import {Cards, Chart, CountryPicker}  from './';
import styles from '../App.module.css';
import { fetchData } from '../api/';
import image from '../images/image.jpg';

class MainPage extends React.Component {
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
            <div>
              <img className={styles.image} src={image} alt="COVID-19" />
              <div className={styles.title}>
                <CountryPicker handleCountryChange={this.handleCountryChange} />
              </div>
              <Cards data={data} />
              <Chart data={data} country={country} />
            </div>
        )
    }
}

export default MainPage;
