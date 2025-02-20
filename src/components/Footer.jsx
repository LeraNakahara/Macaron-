import FooterQuality from "./FooterQuality";
import FooterSocial from "./FooterSocial";
import FooterList from "./FooterList";

import { FooterData, InfoList, SocialMedia } from "../data";

export default function Footer() {
  return (
    <>
      <footer className="bg-[#EBEDEE]">
        <div className="grid grid-flow-col gap-[40px] px-[100px] py-[58px]">
          <FooterQuality data={FooterData}></FooterQuality>
          <FooterList data={InfoList}></FooterList>
          <FooterSocial data={SocialMedia[0]}></FooterSocial>
        </div>
      </footer>
    </>
  );
}
