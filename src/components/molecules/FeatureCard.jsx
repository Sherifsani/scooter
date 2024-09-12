const FeatureCard = ({ key, head, text }) => {
  const shadow = "shadow-[0_8px_30px_rgb(0,0,0,0.12)]";
  return (
    <div
      className={`card rounded-md grid place-items-center w-auto p-8 gap-4 ${shadow}`}
    >
      <h2 className="text-3xl text-textGrey font-bold">{head}</h2>
      <span className="text-sm">{text}</span>
    </div>
  );
};

export default FeatureCard;
