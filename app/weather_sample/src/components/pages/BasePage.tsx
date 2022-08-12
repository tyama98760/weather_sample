import { useState, useEffect } from "react";
import WeatherInfo from "../fields/WeatherInfo";
import SearchButton from "../parts/SearchButton";
import { WeatherData } from '../../types/base';
import BaseInput from "../parts/BaseInput";
import Headline1 from "../parts/Headline1";

const BasePage = () => {

  const [latitude, setLatitude] = useState(""); //　緯度
  const [longitude, setLongitude] = useState(""); //　経度
  const [lat_param, setLatParam] = useState("");
  const [long_param, setLongParam] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [weatherInfoFlag, setWeatherInfoFlag] = useState(false);
  const [weatherDataList, setWeatherDataList] = useState<WeatherData[]>([{validDate:new Date().toLocaleDateString(), icon:'', description:'description',maxTemp:'max',minTemp:'min'}]);

  /******************
   * useEffect
   ******************/

  //初期表示制御
  useEffect(() => {
    if(weatherDataList.length > 1){
      setWeatherInfoFlag(true);
    }else{
      setWeatherInfoFlag(false);
    }
  });

  //天気データリクエスト
  useEffect(() => {

    const fetchData = () => {

      const url = process.env.REACT_APP_BASE_API_PATH + '/daily?lat='+ lat_param + '&lon=' + long_param + '&key='+ process.env.REACT_APP_API_KEY;

      fetch(url)
      .then((response) => response.json()) 
      .then((response) => {
          //console.log(response);
          setResponseData(response.data);
          return true;
      })  
      .catch((data) => /*console.log(data)*/{});

    };

    if(lat_param && long_param)fetchData();

  }, [lat_param, long_param]);


  /******************
   * functions
   ******************/

  // 検索押下
  const search = () => {
    let message = "";

    //緯度のバリデーション
    const lat = parseFloat(latitude);
    if(isNaN(lat) === true || lat < 20 || lat > 46) {
      message = '緯度を20度から46度以内で入力して下さい。\n';
    }
    //経度のバリデーション
    const lon = parseFloat(longitude);
    if(isNaN(lon) === true || lon < 122 || lon > 154) {
      message += '経度を122度から154度以内で入力して下さい。';
    }

    if(message !== "") {
      setErrorMessage(message);
      return;
    }else{
      setErrorMessage(message);
    }

    setLatParam(latitude);
    setLongParam(longitude);
  };

  //レスポンスデータの整形・格納
  const setResponseData = (data: {valid_date: string, weather:{icon:string, description:string}, max_temp:string, min_temp:string}[]) => {

    let weatherDataTmpList:WeatherData[] = [];
    
    data.map((val, i) => {
      let weatherData:WeatherData = {validDate:'', icon:'', description:'', maxTemp:'', minTemp:'',};
      if(i > 6) return;
      weatherData.validDate = val.valid_date;
      weatherData.icon = process.env.REACT_APP_WEATHER_ICONS + val.weather.icon + '.png';
      weatherData.description = val.weather.description;
      weatherData.maxTemp = val.max_temp;
      weatherData.minTemp = val.min_temp;
      weatherDataTmpList.push(weatherData);
    });

    setWeatherDataList(weatherDataTmpList);

  };

  
  /******************
   * View
   ******************/
   return (
    <div className="BasePage">

      <Headline1>お天気チェック</Headline1>

      <div>
        <BaseInput type="text" value={latitude} placeholder="緯度" onChange={(e) => setLatitude(e.target.value)}/>
      </div>
      <div style={{ marginTop: "10px" }} >
        <BaseInput type="text" value={longitude} placeholder="経度" onChange={(e) => setLongitude(e.target.value)}/>
      </div>

      <div style={{textAlign: "center"}}>
        <SearchButton onClick={search}>検索</SearchButton>
      </div>

      <div className='errorMessage' style={{color:"red",margin:"5px 0", whiteSpace: 'pre-line'}}>
        {errorMessage}
      </div>

      {weatherInfoFlag ? <WeatherInfo key="{weatherDataList}" data={weatherDataList}/> : <></>}
      
    </div>
  );

}

export default BasePage;