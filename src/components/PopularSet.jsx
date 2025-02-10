import { useEffect, useState } from "react";
import PopularSetData from "./PopularSetData";

export default function PopularSet({ showAll }) {
  const [popularsetsItems, setPopular] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPopular = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/popularsets");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setPopular(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchPopular();
  }, []);

  if (loading) {
    return <div> Загрузка..</div>;
  }
  if (error) {
    return <span>Ошибка: {error.message}</span>;
  }

  const displayedItems = showAll
    ? popularsetsItems
    : popularsetsItems.slice(0, 6);
  console.log(displayedItems);

  return (
    <>
      <h4 className="font-semibold text-[30px] font-['Montserrat'] text-center pt-[90px] pb-[30px]">
        Популярные наборы
      </h4>
      <div className=" grid grid-cols-2 gap-x-[8px] gap-y-[9px] md:grid md:grid-cols-3 md:gap-x-[30px] md:gap-y-[35px] md:justify-center md:justify-self-center">
        {displayedItems.map((popular) => (
          <PopularSetData key={popular.id} {...popular} />
        ))}
      </div>
    </>
  );
}
