import "./App.css";
import Head from "./components/Head";
import Navigation from "./components/Navigation";
import MenuNav from "./components/MenuNav";
import Title from "./components/Title";
import Card from "./components/Card";
import Promotions from "./components/Promotions";
import PopularSet from "./components/PopularSet";
import Button from "./components/Button";
import News from "./components/News";
import Care from "./components/Care";
import Footer from "./components/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Head className="overflow-x-hidden">
        <Navigation />
        <MenuNav />
      </Head>
      <main className="bg-[#F7F7F7] overflow-x-hidden max-w-screen">
        <Title />
        <Card />
        <Promotions />
        <PopularSet />
        <Button>Все праздничные наборы</Button>
        <News></News>
        <Button>Все новости</Button>
        <Care></Care>
      </main>
      <BrowserRouter>
        <Routes>
          <Route path="/" />
        </Routes>
        {/*<Footer className="overflow-hidden-x" />*/}
      </BrowserRouter>
    </div>
  );
}

export default App;
