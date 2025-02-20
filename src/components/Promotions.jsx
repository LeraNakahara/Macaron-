import PromotionData from "./PromotionData";
import { PromotionItems } from "../data";
import { useState, useRef } from "react";

export default function Promotions() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideRef = useRef(null); //Ref для скролла
  const isMobile = window.innerWidth < 768;

  const handleNextSlide = () => {
    setCurrentSlide((nextSlide) => (nextSlide + 1) % PromotionItems.length);
    if (isMobile && slideRef.current) {
      // прокручиваем только в мобильной версии
      slideRef.current.scrollLeft += slideRef.current.offsetWidth;
    }
  };

  const handlePrevSlide = () => {
    setCurrentSlide(
      (prevSlide) =>
        (prevSlide - 1 + PromotionItems.length) % PromotionItems.length
    );
    if (isMobile && slideRef.current) {
      // прокручиваем только в мобильной версии
      slideRef.current.scrollLeft -= slideRef.current.offsetWidth;
    }
  };

  return (
    <>
      <p className="font-semibold text-[30px] font-['Montserrat'] text-center pt-[90px] pb-[30px]">
        Акции
      </p>
      <div
        className={`flex ${
          isMobile ? "overflow-x-auto snap-x" : "flex-row"
        } gap-[30px] justify-center`}
        ref={slideRef}
      >
        {isMobile ? (
          <PromotionData
            key={PromotionItems[currentSlide].id}
            {...PromotionItems[currentSlide]}
          />
        ) : (
          PromotionItems.slice(currentSlide, currentSlide + 3).map((pro) => (
            <PromotionData key={pro.id} {...pro} />
          ))
        )}
      </div>
      <div className="flex justify-center gap-4 mt-4">
        <button
          onClick={handlePrevSlide}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Назад
        </button>
        <button
          onClick={handleNextSlide}
          className="px-4 py-2 bg-gray-200 rounded"
        >
          Вперед
        </button>
      </div>
    </>
  );
}
