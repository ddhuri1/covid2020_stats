
#### COVID:19-20 Tracker Application : http://devinadhuri.com/covidtrack/

  

This is a COVID:19-20 Stats/Tracker Application. <br />

1. **Usage:**
	- ```npm install``` followed by ```npm start```

2. **App Details:**
    - This app gives the user a visulization of currently available data all around the globe.
    - The user can choose to view the entire **globalal** data with the infected and deaths statistics. (Note that the active cases isnt availavble yo visualize at the time due to API constraints). The user can also view a graph of per **country** stats.
    -  These stats give us the following:
	    - [x] Total Cases
	    - [x] Recovered
	    - [x] Active Cases
	    - [x]  Death
	    - [x]  Mortality Rate: The measure of the number of deaths due to a particular cause in a population.
	    - [x] Incident Rate : The measure of the frequency with which some event, such as a disease or accident, occurs over a specified time period.
	  - The use can choose to view the infected stats, or the death stats or both by simply clicking on the texts shown above the graph.
	  - The user can also view an entire map view of the world. -> **MAP VIEW**

3. **App Creation:**
	- Create an empty React App using ```npx create-react-app ./```
	- Dependancies Needed:
		- ```npm install --save axios react-chartjs-2 react-countup classnames```
		- ```npm install --save chart.js```
		- ```npm install --save @material-ui/core```
		- ```npm install react-router-dom```
		- ```npm install mapbox-gl swr country-code-lookup @mapbox/mapbox-gl-directions```
	- API used: https://covid19.mathdro.id/api and https://covid19.mathdro.id/api/confirmed
	- Access token from https://account.mapbox.com/ account
	- Color palette used: https://colorbrewer2.org/#type=sequential&scheme=OrRd&n=7