import productImage from "/productInfo.png";
import CheckMark from "./molecules/CheckMark";
import { productInfo } from "../../data";
import SectionHead from "./molecules/SectionHead";

const ProductInfo = () => {
  return (
    <section className="w-full mt-[150px] h-screen px-5">
      <SectionHead
        head="Product Information"
        tagline="Our scooter has the following unique design and technology Features:"
      />

      <div className="section-main flex justify-center items-center gap-[15rem] ">
        <div className="img">
          <img src={productImage} alt="product image" />
        </div>

        <div className="product-desc flex flex-col gap-8">
          {productInfo.map((item) => (
            <div key={item.id} className="flex gap-4 items-center">
              <CheckMark />
              <p className="text-lg">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductInfo;
