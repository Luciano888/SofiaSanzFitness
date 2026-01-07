"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles/HeroSlider.module.css";

const images = [
  "/sofia-horizontal3.jpeg",
  "/sofia-horizontal.jpg",
  "/sofia-horizontal2.jpg"
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 5000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    pauseOnHover: true,
    pauseOnFocus: true,
  };

  return (
    <section className={styles.slider}>
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className={styles.slide}>
            <img src={src} alt={`Slide ${i + 1}`} loading={i === 0 ? "eager" : "lazy"} />
            <div className={styles.textOverlay}>
              <h1>Entrenemos juntas</h1>
              <p>Transformá tu cuerpo y mente</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
