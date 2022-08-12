import { useSwiper } from 'swiper/react';

const SlideNextButton = () => {
  const nextButton = {
    marginLeft:"30px",
    marginTop:"10px",
    color:"#464770",
    background:"#f0f0f5",
    padding:"4px 8px",
    borderRadius:"5px"
  };
  const swiper = useSwiper();
  
  return (
    <button style={nextButton} onClick={() => swiper.slideNext()}>翌日へ</button>
  );
}

export default SlideNextButton;