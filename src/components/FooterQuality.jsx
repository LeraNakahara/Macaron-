export default function FooterQuality(props) {
  return (
    <>
      <div className="flex flex-col gap-[54px]">
        <div className="flex flex-row justify-center">
          {props.data.map((items) => (
            <div key={items.id} className=" flex flex-col items-center">
              <img src={items.image} className="" alt="picture" />
              <p>{items.text}</p>
            </div>
          ))}
        </div>
        <p className="break-words leading-5">
          © 2021 МакароншопООО "Квантум", Санкт-Петербург, улица Маршала
          Тухачевского, дом 22
        </p>
      </div>
    </>
  );
}
