"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from "./styles/HeroSlider.module.css";

const images = [
  "/sofia-horizontal.jpg",
  "/sofia-horizontal2.jpg"
];

export default function HeroSlider() {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
  };

  return (
    <section id="inicio" className={styles.slider}>
      <Slider {...settings}>
        {images.map((src, i) => (
          <div key={i} className={styles.slide}>
            <img src={src} alt={`Slide ${i + 1}`} />
            <div className={styles.textOverlay}>
              <h1>¡Bienvenida al entrenamiento con la profe!</h1>
              <p>Transformá tu cuerpo y mente</p>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
