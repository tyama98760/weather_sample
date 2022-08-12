import { useSwiper } from 'swiper/react';

const SlidePrevButton = () => {
  const prevButton = {
    marginRight:"30px",
    marginTop:"10px",
    color:"#464770",
    background:"#f0f0f5",
    padding:"4px 8px", 
    borderRadius:"5px"
  };
  const swiper = useSwiper();
  
  return (
    <button style={prevButton} onClick={() => swiper.slidePrev()}>前日へ</button>
  );
}

export default SlidePrevButton;