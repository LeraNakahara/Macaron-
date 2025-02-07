import Title from "../components/Title";
import Card from "../components/Card";
import Promotions from "../components/Promotions";
import PopularSet from "../components/PopularSet";
import Button from "../components/Button";
import News from "../components/News";
import Care from "../components/Care";
function HomePage() {
  return (
    <>
      <Title />
      <Card />
      <Promotions />
      <PopularSet />
      <Button>Все праздничные наборы</Button>
      <News></News>
      <Button>Все новости</Button>
      <Care></Care>
    </>
  );
}

export default HomePage;
