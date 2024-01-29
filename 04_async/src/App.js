import Container from "./03_data-component/01_rendering-component";
import ApiComponent from "./02_api/02_fetch-then";
import AxiosCallComponent from "./02_api/03_axios";
import EmojiContainer from "./02_api/04_github-api-emoji";
import Weather from "./03_data-component/02_weather-promise";
import WeatherContainer from "./03_data-component/03_weather-async-await";


function App() {
  return (
    <>
      {/* <ApiComponent/> */}
      {/* <AxiosCallComponent/> */}
      {/* <EmojiContainer/> */}
      {/* <Container/> */}
      {/* <Weather/> */}
      <WeatherContainer/>
    </>
  );
}

export default App;
