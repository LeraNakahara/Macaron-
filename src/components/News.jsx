import { useState, useEffect } from "react";
import NewsData from "./NewsData";

export default function News() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(true);
  const [NewsItems, setNewsItems] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:3000/news");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setNewsItems(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handleRight = () => {
    if (nextSlide == null) {
      setCurrentSlide((nextSlide) => nextSlide % NewsItems.length);
      console.log(nextSlide);
    } else {
      setCurrentSlide((nextSlide) => (nextSlide + 1) % NewsItems.length);
    }
  };

  const handleLeft = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + NewsItems.length) % NewsItems.length
    );
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <h4 className="font-semibold text-[30px] font-['Montserrat'] text-center pt-[90px] pb-[30px]">
        Новости
      </h4>

      <div className="flex flex-row gap-[30px] justify-center">
        {NewsItems.slice(currentSlide, currentSlide + 3).map((news) => (
          <NewsData key={news.id} {...news} />
        ))}
      </div>
    </>
  );
}
