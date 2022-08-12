import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import SlideNextButton from "../parts/SlideNextButton";
import SlidePrevButton from "../parts/SlidePrevButton";
import { WeatherData } from '../../types/base';

const WeatherInfo:React.FC<{data: WeatherData[]}> = ({data}) => {
  
  /******************
   * CSS
   ******************/
  const defaultCard = {
    padding:"10px 18px 10px",
    margin: "10px auto",
    width:"130px",
    height:"110px",
    fontSize:"10px",
    background:"#9e9a98",
    border: "solid 1px #9e9a98"
  };
  const activeCard = {
    padding:"6px 18px 10px",
    margin: "10px auto",
    width:"150px",
    height:"110px",
    border: "solid 2px #000",
  };

  /******************
   * View
   ******************/
  return (
    <Swiper
      slidesPerView={1.5}
      centeredSlides={true}
    >
      {data.map((val, i) =>
        <div >
          <SwiperSlide key={i}>
            {({ isActive }) => (
              <div>
                <div className='date' style={{ marginTop: "10px", fontSize: "18px" }}><b>{val.validDate}</b></div>
                <div className='card' style={isActive ? activeCard : defaultCard}>
                  <div className='icon' style={{ marginTop: "10px" }}>
                    <img style={{width:'35px', height:'30px'}} src={val.icon} alt='icon'></img>
                  </div>
                  <div className='description' style={{ marginTop: "5px" }}>{val.description}</div>
                  <div className='temperature' style={{ margin: "10px 0" }}>
                    <span className='max-temp' style={{ color: "red" }}>{val.maxTemp}</span> / <span className='min-temp' style={{ color: "blue" }}>{val.minTemp}</span>
                  </div>
                </div>
              </div>
            )}
          </SwiperSlide>
        </div>
      )}
      <SlidePrevButton/>
      <SlideNextButton/>

    </Swiper>
  );
};

export default WeatherInfo