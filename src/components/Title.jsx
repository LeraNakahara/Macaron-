export default function Title() {
  return (
    <div className="bg-[#F7F7F7] relative">
      <div className="flex flex-col pt-[64px] md:flex-row items-center md:items-center md:justify-between">
        <div className="order-2 md:order-1 text-center md:text-left p-4">
          <p className="text-3xl font-bold text-black">MACARON SHOP</p>
          <p className="text-lg text-black/70">since 2013</p>
          <h4 className="text-4xl mt-4 pt-[40px] mb-2 font-semibold text-black">
            Настоящая Любовь
          </h4>
          <p className="text-lg text-black">
            Пироженные макарон и другие десерты из натуральных ингредиентов,
            приготовленные с любовью
          </p>
        </div>
        <div className="order-2 md:order-1">
          <picture>
            <source media="(min-width: 768px)" srcSet="./images/mainimg.svg" />
            <img
              src="./images/mobilebackground.svg"
              alt=""
              className="w-full text-center mx-auto block"
            />
          </picture>
        </div>
      </div>
    </div>
  );
}
