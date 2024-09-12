import * as feature_data from "../../data/index";
import FeatureCard from "./molecules/FeatureCard";

const Features = () => {
  const data = feature_data.feature_data;
  return (
    <div className="flex justify-between items-center flex-wrap w-full h-auto mt-[100px] px-5">
      {data.map((item, index) => (
        <FeatureCard key={index} head={item.a} text={item.b} />
      ))}
    </div>
  );
};

export default Features;
