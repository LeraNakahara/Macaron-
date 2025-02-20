import { Link } from "react-router-dom";

export default function CardData(props) {
  const isMobile = window.innerWidth < 768;
  const bgClass = isMobile ? "" : props.bg;

  return (
    <div
      className={`${bgClass} w-full h-auto border-b-2 border-gray-400 md:w-[570px] md:h-[260px] md:border-none`}
    >
      {/*{isMobile ? (
        <p className="font-bold text-[14px] md:text-[20px] ">{props.name}</p>
      ) : (*/}
      <>
        <div className="flex justify-center md:px-[240px] md:pt-[36px] pb-[19px]">
          {/* Контейнер с отступами */}
          <img
            src={props.icons}
            alt="изображения"
            className="w-[50px] h-[50px] md:w-[100px] md:h-[100px] object-contain md:block  hidden"
          />
        </div>
        <p className=" font-bold  text-left  font-['Montserrat'] text-[14px] md:text-[20px] md:text-center">
          {props.name}
        </p>
        <p className="hidden md:block md:text-center md:text-[16px]">
          {props.desc}
        </p>
      </>
    </div>
  );
}
