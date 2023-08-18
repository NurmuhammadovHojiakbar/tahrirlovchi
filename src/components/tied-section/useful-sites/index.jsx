import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import ZiyoNetImg from "../../../assets/images/ziyonet.png";
import ExaridImg from "../../../assets/images/exarid.png";
import DxaridImg from "../../../assets/images/dxarid.png";
import MustaqillikImg from "../../../assets/images/mustaqillik.png";
import UmailImg from "../../../assets/images/umail.png";
import { SliderIcon } from "../../icons";

const UsefulSites = () => {
  const sites = [
    {
      id: 1,
      img: ZiyoNetImg,
      title: "Ta'lim portali",
    },
    {
      id: 2,
      img: ExaridImg,
      title: "Korporativ xaridlar savdo tizimi",
    },
    {
      id: 3,
      img: DxaridImg,
      title: "Davlat xaridlari savdo tizimi",
    },
    {
      id: 4,
      img: MustaqillikImg,
      title: "Ta'lim portali",
    },
    {
      id: 5,
      img: UmailImg,
      title: "Ta'lim portali",
    },
    {
      id: 6,
      img: ZiyoNetImg,
      title: "Ta'lim portali",
    },
  ];

  return (
    <div className="useful-sites">
      <h2 className="site-title useful-sites__title">Foydali saytlar</h2>

      <div className="useful-sites__slider">
        <div className="swiper-controller">
          <button className="swiper-button swiper-button__left">
            <SliderIcon />
          </button>
        </div>
        <Swiper
          className="useful-sites__swiper"
          spaceBetween={20}
          slidesPerView={5}
          modules={[Navigation, Autoplay]}
          navigation={{
            prevEl: ".swiper-button__left",
            nextEl: ".swiper-button__right",
          }}
          speed={300}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false,
          }}
          rewind={true}
        >
          {sites.map((site) => (
            <SwiperSlide key={site.id}>
              <div className="swiper-item">
                <img
                  className="swiper-item__img"
                  src={site.img}
                  alt={site.title}
                />
                <div className="swiper-item__line"></div>
                <p className="swiper-item__text">{site.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-controller">
          <button className="swiper-button swiper-button__right">
            <SliderIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UsefulSites;
