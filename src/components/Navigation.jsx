import React, { useState } from "react";
import NavigationData from "./NavigationData";
import { navItems } from "../data.js";

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-[#F7EBE5] relative">
      <div className="flex flex-row justify-between items-center pt-[15px] pb-[15px] px-4">
        {/* Бургер-меню */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <img
              src="./images/burger.svg"
              alt="Бургер-меню"
              className="w-6 h-6 text-gray-600"
            />
          </button>
        </div>
        <img src="./images/logomob.svg" alt="logomob" className="md:hidden" />
        <img src="./images/buy.svg" alt="" className="md:hidden" />

        {/* Меню для десктопов */}
        <div className="hidden md:flex items-center">
          <ul className="flex flex-row gap-[20px] px-[135px]">
            <li>Гарантия свежести</li>
            <li>Доставка и оплата</li>
            <li>Оптовые поставки</li>
            <li>Контакты</li>
          </ul>
        </div>

        <div className="hidden md:flex flex-row gap-[20px]">
          {navItems.map((nav) => (
            <NavigationData key={nav.id} {...nav} />
          ))}
        </div>

        <div className="hidden md:flex flex-row gap-[10px]">
          <img src="./images/tg.png" alt="telegram" />
          <img src="./images/vk.png" alt="vk" />
          <img src="./images/ok.png" alt="ok" />
        </div>
      </div>

      {/* Мобильное меню */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute top-full left-0 w-full  bg-[#F7EBE5] flex flex-column justify-center items-center z-10 md:hidden`}
      >
        <ul className="text-center font-['Montserrat']">
          <img src="./images/place.svg" alt="geo" />
          <li className="py-2 border-b-2  border-gray-400">Санкт-Петербург</li>
          <li className="py-2 border-b-2  border-gray-400">Сладкие дни</li>
          <li className="py-2 border-b-2  border-gray-400">
            Подарочные наборы
          </li>
          <li className="py-2 border-b-2  border-gray-400">Собрать набор</li>
          <li className="py-2 border-b-2  border-gray-400">Создать дизайн</li>
          <li className="py-2 border-b-2  border-gray-400">Компаниям</li>
          <li className="py-2 border-b-2  border-gray-400">Весь каталог</li>
          <li className="py-2 border-b-2  border-gray-400">
            Гарантия свежести
          </li>
          <li className="py-2">Доставка и оплата</li>
          <li className="py-2">Оптовые поставки</li>
          <li className="py-2 border-b-2  border-gray-400">Контакты</li>
          <li className="py-2">
            {navItems.map((nav) => (
              <NavigationData key={nav.id} {...nav} />
            ))}
          </li>
          <div className="py-2 flex gap-4 justify-center">
            <img src="./images/tg.png" alt="" />
            <img src="./images/vk.png" alt="" />
            <img src="./images/ok.png" alt="" />
          </div>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
