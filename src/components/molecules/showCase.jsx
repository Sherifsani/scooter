import image01 from "/01.png";

const ShowCase = () => {
  return (
    <div className="showcase flex items-center gap-8 mt-8 absolute -bottom-[10%] left-[50%]">
      <img src={image01} alt="01" />
      <div className="pill border-textGrey border-[1px] overflow-hidden rounded-[3rem]">
        <i className="bx bx-chevron-left text-[2rem] border-r-[1px] border-textGrey p-3"></i>
        <i className="bx bx-chevron-right text-[2rem] p-3"></i>
      </div>
    </div>
  );
};

export default ShowCase;
