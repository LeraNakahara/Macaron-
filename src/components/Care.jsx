import CareData from "./CareData";
import { CareCardItems } from "../data";

export default function Care() {
  return (
    <>
      <h4 className="font-semibold text-[30px] font-['Montserrat'] text-center pt-[90px] pb-[30px]">
        Мы обо всем позаботились
      </h4>
      <div className="flex flex-row justify-center gap-[30px]">
        {CareCardItems.map((cares) => (
          <CareData key={cares.id} {...cares} />
        ))}
      </div>
    </>
  );
}
