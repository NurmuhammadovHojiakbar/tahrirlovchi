import { Link } from "react-router-dom";
import useWindowSize from "../../../hooks/useWindowSize";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import GerbImg from "../../../assets/images/gerb.png";
import GovUzImg from "../../../assets/images/gov-uz.svg";
import TsullImg from "../../../assets/images/tsull.png";
import TilAdabiyotImg from "../../../assets/images/til-adabiyot.png";
import { SliderIcon } from "../../icons";

const UsefulSites = () => {
  const { width } = useWindowSize();
  const sites = [
    {
      id: 1,
      img: GerbImg,
      title: "O‘zbekiston Respublikasi Prezidentining rasmiy veb-sayti",
      path: "https://president.uz/uz",
    },
    {
      id: 2,
      img: GerbImg,
      title: "O‘zbekiston Respublikasi Hukumat portali",
      path: "https://gov.uz/uz",
    },
    {
      id: 3,
      img: GovUzImg,
      title: "Yagona interaktiv davlat xizmatlari portali",
      path: "https://my.gov.uz/oz",
    },
    {
      id: 4,
      img: TilAdabiyotImg,
      title: "Alisher Navoiy nomidagi ToshDO‘TAU huzuridagi PKQTMOTM sayti",
      path: "https://tiladabiyot-tm.uz/",
    },
    {
      id: 5,
      img: GerbImg,
      title:
        "O‘zbekiston Respublikasi prezidenti Shavkat Miromonovich Mirziyoyevning virtual qabulxonasi",
      path: "https://pm.gov.uz/oz#/",
    },
    {
      id: 6,
      img: TsullImg,
      title:
        "Alisher Navoiy nomidagi Toshkent davlat o‘zbek tili va adabiyoti universiteti sayti",
      path: "https://www.tsuull.uz/",
    },
  ];
  const count =
    width > 1200 ? 5 : width > 1000 ? 4 : width > 800 ? 3 : width > 600 ? 2 : 1;

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
          slidesPerView={count}
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
              <Link className="swiper-link" to={site.path} target="_blank">
                <div className="swiper-item">
                  <img
                    className="swiper-item__img"
                    src={site.img}
                    alt={site.title}
                  />
                  <div className="swiper-item__line"></div>
                  <p className="swiper-item__text">{site.title}</p>
                </div>
              </Link>
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
