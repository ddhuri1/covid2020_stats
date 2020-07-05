#### COVID:19-20 Tracker Application : http://devinadhuri.com/covidtrack/

This is a COVID:19-20 Stats/Tracker Application.  <br />

1. App Details:
   - This app gives the user a visulization of currently avaiable data all around the globe. 
   - The user can choose to view the entire **global** data with the infected and deaths statistics. (Note that the active cases isnt availavble yo visualize at the time due to API constraints). The user can also view a graph of per **country** stats. 
   - The use can choose to view the infected stats, or the death stats or both by simply clicking on the texts shown above the graph. 
   - The user can also view an entire map view of the world. 
   
2. App Creation:
   - Create an empty React App using ```npx create-react-app ./``` 
   - Install dependancies: 
     - ```npm install --save axios react-chartjs-2 react-countup classnames```
     - ```npm install --save chart.js```
     - ```npm install --save @material-ui/core```
     - ```npm install react-router-dom```
     - ```npm i node-sass mapbox-gl swr country-code-lookup```
     - ```npm install mapbox-gl @mapbox/mapbox-gl-directions```
   - API used: https://covid19.mathdro.id/api and https://corona.lmao.ninja/v2/jhucsse
   - Access token from https://account.mapbox.com/ account
