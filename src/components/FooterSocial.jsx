export default function FooterSocial({ data }) {
  const { phoneNumber, workTime, icons } = data;
  return (
    <>
      <div className="">
        <p className="font-[Montserrat] font-bold leading-[22px] text-[18px]">
          {phoneNumber}
        </p>
        <p className="text-right pb-[50px]">{workTime}</p>
        <div className="flex flex-row justify-start gap-[18px]">
          {icons.map((icon, index) => (
            <a href={icon.href} key={index} target="_blank">
              <img src={icon.icon} alt="" />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}
