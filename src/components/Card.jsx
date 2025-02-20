import CardData from "./CardData";
import { cardItems } from "../data"; // Убедитесь, что путь верный

export default function Card() {
  return (
    <div className="px-[40px]  grid gap-[15px] md:grid-cols-2 md:gap-[15px] md:justify-center md:justify-self-center">
      {cardItems.map((card) => (
        <CardData key={card.id} {...card} />
      ))}
    </div>
  );
}
