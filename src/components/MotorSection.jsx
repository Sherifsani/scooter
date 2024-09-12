// eslint-disable-next-line no-unused-vars
import SectionHead from "./molecules/SectionHead";
// eslint-disable-next-line no-unused-vars
import Motor from "/motor.png";

const MotorSection = () => {
  return (
    <section className="mt-36 flex flex-col gap-20 items-center">
      <SectionHead
        head="High Efficiency Motor"
        tagline={
          "More torque for powerful riding with 22% maximum hill climbing capability."
        }
      />
      <div className="img">
        <img src={Motor} alt="motor image" />
      </div>
    </section>
  );
};

export default MotorSection;
