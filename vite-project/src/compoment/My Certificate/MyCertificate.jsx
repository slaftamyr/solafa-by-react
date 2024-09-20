import { useState } from "react";
import "./MyCertificate.css"; // تأكد من إنشاء ملف CSS

export default function MyCertificate() {
  const images = [
    "https://coursera-certificate-images.s3.amazonaws.com/N3XBEVN6UBGH", // صورة ورد
    "https://coursera-certificate-images.s3.amazonaws.com/LRBAMCS3846C", // صورة ورد
    "https://coursera-certificate-images.s3.amazonaws.com/2K9N3N7H8YU9", // صورة بيت
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const changeImage = (direction) => {
    setCurrentIndex((prevIndex) => {
      const nextIndex = prevIndex + direction;
      if (nextIndex < 0) return images.length - 1; // العودة إلى آخر صورة
      if (nextIndex >= images.length) return 0; // العودة إلى أول صورة
      return nextIndex;
    });
  };

  return (
    <div className="carousel">
      <h2>My Certificates</h2>
      <div
        className="images"
        style={{ transform: `translateX(-${(currentIndex * 100) / 3}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={index}
            className={`image ${index === currentIndex ? "active" : ""}`}
          >
            <img src={image} alt={`صورة ${index + 1}`} />
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={() => changeImage(-1)}>
        &#10094;
      </button>
      <button className="arrow right" onClick={() => changeImage(1)}>
        &#10095;
      </button>
    </div>
  );
}
