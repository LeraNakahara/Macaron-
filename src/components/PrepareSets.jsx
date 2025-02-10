import PopularSet from "./PopularSet";
import Button from "./Button";
import { useState } from "react";

export default function PrepareSets() {
  const [isClicked, setClicked] = useState(false);

  const handleShowMore = () => {
    setClicked(true);
    console.log("button press");
  };

  const handleShowLess = () => {
    setClicked(false);
  };

  return (
    <>
      <PopularSet showAll={isClicked}></PopularSet>
      {!isClicked && <Button onClick={handleShowMore}>Показать еще</Button>}
      {isClicked && <Button onClick={handleShowLess}>Показать меньше</Button>}
    </>
  );
}
