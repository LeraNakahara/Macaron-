export default function PopularSetData(props) {
  return (
    <>
      <div className="md:w-[370px] md:h-[459px]  w-[215px] h-[140px]">
        {/* Уменьшение размера на мобильных */}
        <img
          src={props.pic}
          alt=""
          className="w-full h-[98px]  md:h-[280px] object-cover"
        />
        {/* высота картинки в мобильной версии 80рх, на десктопе 280рх*/}
        <div className="pt-[15px] pb-[15px] border-2 rounded-[5px]">
          <p className="px-[22px] font-medium text-[16px] md:text-[18px]">
            {props.name}
          </p>
          {/* уменьшаем размер шрифта на мобильных */}
          <p className="px-[22px] py-[14px] text-[12px] md:text-[14px] font-normal text-[#292929] leading-[17px] hidden md:block">
            {props.descript}
          </p>
          {/* прячем описание на мобильных */}
          <hr />
          <div className="flex flex-row gap-[20px] md:gap-[180px] px-[21px] pt-[15px]">
            {/* уменьшаем отступ в мобильной версии */}
            <p className="font-['Montserrat'] text-[14px] md:text-[16px] text-[#E7426A] font-semibold">
              {/* уменьшаем размер шрифта на мобильных */}
              {props.price}
            </p>
            <button className="text-[12px] md:text-[14px] before:content-[]">
              {/* уменьшаем размер шрифта на мобильных */}
              {props.button}
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
