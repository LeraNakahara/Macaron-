import Head from "./Head";
import Footer from "./Footer";
import Navigation from "./Navigation";
import MenuNav from "./MenuNav";

export default function Layout({ children }) {
  return (
    <div>
      <Head></Head>
      <Navigation />
      <MenuNav />
      <main className="bg-[#F7F7F7] overflow-x-hidden max-w-screen">
        {children}
      </main>
      <Footer className="overflow-hidden-x" />
    </div>
  );
}
