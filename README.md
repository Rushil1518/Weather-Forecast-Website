This is a simple weather web application that provides the current weather information and a 5-day weather forecast for a user-specified location. The application also has a feature to automatically detect the user's current location.

## Features

- Displays current weather information.
- Provides a 5-day weather forecast.
- Automatically detects the user's current location.
- Responsive design for different screen sizes.

## Technologies Used

- HTML
- CSS
- JavaScript
- OpenWeatherMap API

## Setup and Installation

1. Clone the repository to your local machine:

    ```bash
    git clone https://github.com/Rushil1518/Weather-Forecast-Website.git
    cd Weather-Forecast-Website
    ```

2. Open the `index.html` file in your web browser to view the application.

## Usage

1. **Auto-Detect Location**: Upon loading, the application will automatically detect your current location and display the weather information.
2. **Manual Location Search**: You can enter a city name in the input field to get the current weather and 5-day forecast for that location.

## API Key

The application uses the OpenWeatherMap API to fetch weather data. Make sure you have your own API key from OpenWeatherMap. You can sign up and get a free API key [here](https://openweathermap.org/api).

Replace the `key` variable in the `script.js` file with your own API key:

```javascript
let key = "your_api_key_here";
File Structure
index.html - The main HTML file containing the structure of the web app.
style.css - The CSS file containing the styles for the web app.
script.js - The JavaScript file containing the logic for fetching and displaying weather data.
Contributing
Contributions are welcome! Please open an issue or submit a pull request for any bugs, feature requests, or improvements.

License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgements
OpenWeatherMap for providing the weather data API.
Ionicons for the search icon used in the application.
