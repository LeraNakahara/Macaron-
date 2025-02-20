export default function NewsData(props) {
  return (
    <>
      <div className="w-[370px] h-[420px]">
        <img src={props.pic} alt="" />
        <div className="bg-white pt-[20px] pb-[80px] px-[20px] h-[210px]">
          <span className="font-['Montserrat'] text-[14px] font-normal leading-[17px] text-[#969696]">
            {props.date}
          </span>
          <p className="py-[10px] font-['Montserrat'] font-bold leading-[22px] text-[18px] text-[#292929]">
            {props.title}
          </p>
          <p className="text-[14px] text-[#292929]">{props.content}</p>
        </div>
      </div>
    </>
  );
}
