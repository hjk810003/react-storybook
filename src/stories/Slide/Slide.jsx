import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper';

// Import Swiper styles
import './slide.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function Slide() {
  const item = [
    {
      url: '/',
      text: '1'
    },
    {
      url: '/',
      text: '22'
    },
    {
      url: '/',
      text: '333'
    },
    {
      url: '/',
      text: '4444'
    }
  ];

  return (
    <Swiper
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
    >
      {item.map((item, index) => (
        <SwiperSlide key={index}>
          <a href={item.url}>{item.text}</a>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slide;