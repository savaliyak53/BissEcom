import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productContext";
import PageNavigation from "./components/pageNavigation";
import MyImage from "./components/myImage";
import PriceFormat from "./helpers/priceFormat";
import { StarReview } from "./components/starReview";
import AddToCart from "./components/addToCart";

const API = "https://api.pujakaitem.com/api/products";

function SingleProduct() {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const { id } = useParams();

  const { name, company, price, description, stock, reviews, stars, image } =
    singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}?id=${id}`);
  }, []);

  return isSingleLoading ? (
    <h1>Loading</h1>
  ) : (
    <div className="flex justify-center">
      <PageNavigation title={name} />
      <div className="mt-24  flex justify-center mobile:flex-col  items-center mx-5 w-full ">
        <MyImage image={image} />
        <div className="space-y-2 space-x-3  text-primary-500 w-[90%]">
          <h2 className="text-4xl font-bold">{name}</h2>
          <h2>{company}</h2>
          <h2 className="text-3xl">
            MRP:
            <span className="px-[5px] line-through">
              <PriceFormat price={price + 25000} />
            </span>
          </h2>
          <h2 className="text-3xl ">Offer Price: {price}</h2>
          <div className="flex">
            <StarReview stars={stars} reviews={reviews} />
            <div></div>
          </div>
          <h2>Available: {stock ? "In Stock" : "not Available"}</h2>
          {stock > 0 && <AddToCart product={singleProduct} />}
          <h2 className="w-[65%] mobile:w-full">
            Description: <span className="text-sm">{description}</span>
          </h2>
          <hr />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
