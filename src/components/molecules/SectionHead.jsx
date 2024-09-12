// eslint-disable-next-line react/prop-types
const SectionHead = ({ head, tagline }) => {
  return (
    <div className="head w-full flex flex-col items-center gap-4">
      <h2 className="font-bold text-[50px]">{head}</h2>
      <p className="text-lg">{tagline}</p>
    </div>
  );
};

export default SectionHead;
