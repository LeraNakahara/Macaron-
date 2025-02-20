import { PopularSetItems } from "../data";
import PopularSetData from "./PopularSetData";

export default function PopularSet() {
  return (
    <>
      <h4 className="font-semibold text-[30px] font-['Montserrat'] text-center pt-[90px] pb-[30px]">
        Популярные наборы
      </h4>
      <div className=" grid grid-cols-2 gap-x-[8px] gap-y-[9px] md:grid md:grid-cols-3 md:gap-x-[30px] md:gap-y-[35px] md:justify-center md:justify-self-center">
        {PopularSetItems.map((popular) => (
          <PopularSetData key={popular.id} {...popular} />
        ))}
      </div>
    </>
  );
}
