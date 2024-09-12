import playButton from "/play-button.png";

const Herotext = () => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-[90px] uppercase text-textGrey">
        let&apos;s ride <br /> <span className="font-bold">the future.</span>
      </h1>
      <span className="w-[400px] bg-textGrey h-[5px] mb-6"></span>
      <div className="details flex flex-col gap-10">
        <p className="text-[22px]">
          simple and sleek design with users in mind
        </p>
        <div className="flex items-center gap-[5rem]">
          <span className="flex items-center gap-3">
            <span className="bx bx-right-arrow-alt p-5  bg-textGrey text-white"></span>
            <span className="font-semibold">Buy now</span>
          </span>

          <span className="flex gap-3">
            <span>
              Watch our <br /> video how <br /> it works
            </span>
            <img src={playButton} alt="play" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Herotext;
