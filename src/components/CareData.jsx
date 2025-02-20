export default function CareData(props) {
  return (
    <>
      <div className="w-[270px] h-[400px]">
        <img src={props.image} alt="" />
        <div>
          <p className="pt-[29px] text-[18px] font-bold leading-[22px] pb-[11px]">
            {props.title}
          </p>
          <p className="text-[14px] text-[#292929]">{props.descript}</p>
        </div>
      </div>
    </>
  );
}
