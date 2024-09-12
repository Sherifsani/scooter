import Herotext from "./molecules/Herotext";
import heroImage from "/heroImage.png";
import ShowCase from "./molecules/showCase";

const Hero = () => {
  return (
    <>
      <section className="w-full  flex items-center justify-between px-6">
        <Herotext />
        <div className="hero-image relative">
          <img src={heroImage} alt="hero" />

          <div className="big-sur absolute bottom-[5%]  -right-[10%] bg-textGrey w-[500px] h-[70%] opacity-25"></div>
          <ShowCase />
        </div>
      </section>
    </>
  );
};

export default Hero;
