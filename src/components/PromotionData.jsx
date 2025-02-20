export default function PromotionData(props) {
  return (
    <div className="w-[270px] h-[380px] relative snap-start">
      {" "}
      {/* snap-start для скролла */}
      <img src={props.src} alt="" className="object-cover w-full h-full" />
      {/* object-cover, чтобы картинка соответствовала размерам */}
      <span className="absolute top-[10px] left-[10px] text-white font-semibold">
        {props.indicator}
      </span>
      <div className="bg-red-500 absolute bottom-0 w-full">
        <p className="text-center p-[20px] text-[16px] leading-[20px] text-white font-['Montserrat']">
          {props.tit}
        </p>
      </div>
    </div>
  );
}
