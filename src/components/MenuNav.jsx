export default function MenuNav() {
  return (
    <>
      <div className="hidden md:block">
        {" "}
        {/* Используем hidden для мобильных и block для больших */}
        <ul className="flex flex-row gap-[30px] justify-center items-center w-full h-[160px] pt-[70px] pb-[70px]">
          <li>СЛАДКИЕ ДНИ</li>
          <li>ПОДАРОЧНЫЕ НАБОРЫ</li>
          <li>СОЗДАТЬ НАБОР</li>
          <img src="./images/logo.svg" alt="logo" />
          <li>СОЗДАТЬ ДИЗАЙН</li>
          <li>КОМПАНИЯМ</li>
          <li>ВЕСЬ КАТАЛОГ</li>
        </ul>
      </div>
    </>
  );
}
