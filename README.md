
#### :bangbang: COVID:19 Tracker :bangbang:  
##### :link: http://devinadhuri.com/covidtrack/
 
This is a COVID:19 Stats/Tracker Application. <br />
1. **Usage:**
	- ```npm install``` followed by ```npm start```
3. **App Details:**
    - This app gives the user a visulization of currently available data all around the globe.
    - The user can choose to view the entire **Global** data with the infected and deaths statistics. 
    - The user can also view a graph of per **Per Country-State-County** stats. (ZOOM IN TO VIEW)
	    -  :small_red_triangle: Note that the active cases isnt availavble for visualizing over the chart at the time due to API constraints. 
    -  These stats give us the following:
	    :heavy_check_mark: Total Cases
	    :heavy_check_mark: Recovered
	    :heavy_check_mark: Active Cases
	    :heavy_check_mark:  Death
	    :heavy_check_mark:  Mortality Rate: The measure of the number of deaths due to a particular cause in a population.
	    :heavy_check_mark: Incident Rate : The measure of the frequency with which some event, such as a disease or accident, occurs over a specified time period.
	  - The use can choose to view the infected stats, or the death stats or both by simply clicking on the texts shown above the graph.
	  - The user can also view an entire map view of the world. -> **MAP VIEW**
	  - The app gives a quick quide to follow to take precaution sor check if one has symptoms too.

4. **App Creation:**
	- Create an empty React App using ```npx create-react-app ./```
	- Dependancies Needed:
		- ```npm install --save axios react-chartjs-2 react-countup classnames```
		- ```npm install --save chart.js```
		- ```npm install --save @material-ui/core```
		- ```npm install react-router-dom```
		- ```npm install mapbox-gl swr country-code-lookup @mapbox/mapbox-gl-directions```
		- ```npm i --save @fortawesome/fontawesome-svg-core  @fortawesome/free-solid-svg-icons @fortawesome/react-fontawesome```
	- API :link: https://covid19.mathdro.id/api and https://covid19.mathdro.id/api/confirmed
	- Access token  :link: https://account.mapbox.com/ account
	- Color palette :link: https://colorbrewer2.org/#type=sequential&scheme=PuRd&n=6
	- Location finder :link: https://demos.mapbox.com/location-helper/