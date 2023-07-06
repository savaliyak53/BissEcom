import React from "react";
import { useFilterContext } from "../context/filterContext";
import { FaCheck } from "react-icons/fa";
import PriceFormat from "../helpers/priceFormat";

const FilterSection = () => {
  const {
    filters: { text, color, maxPrice, price, minPrice },
    updateFilterValue,
    all_products,
    filter_products,
  } = useFilterContext();

  const getUniqueDate = (data, property) => {
    let newVal = data.map((currItem) => {
      return currItem[property];
    });

    if (property === "colors") {
      newVal = ["All", ...new Set([].concat(...newVal))];
      // or
      // newVal = newVal.flat([]);
      // newVal = ["all", ...new Set(newVal)];
    } else {
      newVal = ["all", ...new Set(newVal)];
    }
    return newVal;
  };

  const categoryData = getUniqueDate(all_products, "category");
  const companyData = getUniqueDate(all_products, "company");
  const colorsData = getUniqueDate(all_products, "colors");

  return (
    <div className="h-[100vh] mobile:hidden w-[20vw] ml-8 mr-3  pt-8 space-y-3">
      <div className=" text-primary-500 text-3xl font-medium">{`${filter_products.length} Product Available`}</div>
      <div>
        <input
          title="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
          placeholder="Search"
          className="border border-primary-500 focus:outline-primary-500 p-2 rounded-md text-xl"
        />
      </div>
      <div className="my-3">
        <div className=" text-xl text-primary-500">
          <p className="rounded-sm py-3 font-medium text-2xl">Category</p>
          {categoryData.map((currItem, index) => {
            return (
              <button
                type="button"
                name="category"
                key={index}
                value={currItem}
                onClick={updateFilterValue}
                className="block px-1 -mt-1"
              >
                {currItem}
              </button>
            );
          })}
        </div>
        <div className="mb-3">
          <p className="rounded-sm py-3 font-medium text-2xl ">Company</p>
          <select
            name="company"
            className=" border border-primary-500 rounded-md  focus:outline-primary-500 py-1"
            id="company"
            onClick={updateFilterValue}
          >
            {companyData.map((currItem, index) => {
              return (
                <>
                  <option
                    key={index}
                    value={currItem}
                    name="company"
                    className="text-primary-500 -mt-1"
                  >
                    {currItem}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <div className="flex mt-5">
          {colorsData.map((currItem, index) => {
            if (currItem === "All") {
              return (
                <button
                  key={index}
                  type="button"
                  value={currItem}
                  name="color"
                  onClick={updateFilterValue}
                  className="text-2xl mr-1"
                >
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                style={{ background: `${currItem ? currItem : null}` }}
                type="button"
                value={currItem}
                name="color"
                onClick={updateFilterValue}
                className="rounded-full w-6 h-6 mt-1 mr-1"
              >
                {color === currItem ? (
                  <FaCheck className="ml-1 text-primary-50" />
                ) : null}
              </button>
            );
          })}
        </div>
        <div className="my-3">
          <h3 className="rounded-sm py-3 font-medium text-2xl">Price</h3>
          <div className="-mt-2">
            <p className="text-primary-500">
              <PriceFormat price={price} />
            </p>
            <div>
              <input
                type="range"
                name="price"
                min={minPrice}
                max={maxPrice}
                value={price}
                onChange={updateFilterValue}
                className="!-mt-3 appearance-none bg-primary-500 h-2 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export function MobileFilter({ isOpen, onRequestClose }) {
  const {
    filters: { text, color, maxPrice, price, minPrice },
    updateFilterValue,
    all_products,
    filter_products,
  } = useFilterContext();

  const getUniqueDate = (data, property) => {
    let newVal = data.map((currItem) => {
      return currItem[property];
    });

    if (property === "colors") {
      newVal = ["All", ...new Set([].concat(...newVal))];
      // or
      // newVal = newVal.flat([]);
      // newVal = ["all", ...new Set(newVal)];
    } else {
      newVal = ["all", ...new Set(newVal)];
    }
    return newVal;
  };

  const categoryData = getUniqueDate(all_products, "category");
  const companyData = getUniqueDate(all_products, "company");
  const colorsData = getUniqueDate(all_products, "colors");

  return isOpen ? (
    <div className="h-[90vh] relative left-16 right-20 sm:hidden text-center mt-8 space-y-5">
      <div className=" text-primary-500  text-3xl font-medium">{`${filter_products.length} Product Available`}</div>
      <div>
        <input
          title="text"
          name="text"
          value={text}
          onChange={updateFilterValue}
          placeholder="Search"
          className="border placeholder:text-2xl -mt-4 border-primary-500 focus:outline-primary-500 p-2 py-3 w-72  rounded-md text-xl"
        />
      </div>
      <div>
        <div className=" text-2xl text-primary-500">
          <p className="rounded-sm py-3 font-medium text-3xl">Category</p>
          {categoryData.map((currItem, index) => {
            return (
              <button
                type="button"
                name="category"
                key={index}
                value={currItem}
                onClick={updateFilterValue}
                className="block px-1 -mt-1 mx-auto font-medium"
              >
                {currItem}
              </button>
            );
          })}
        </div>
        <div className="text-2xl">
          <p className="rounded-sm py-3 font-medium text-3xl mt-1 ">Company</p>
          <select
            name="company"
            className=" border border-primary-500 rounded-md  focus:outline-primary-500 py-1"
            id="company"
            onClick={updateFilterValue}
          >
            {companyData.map((currItem, index) => {
              return (
                <>
                  <option
                    key={index}
                    value={currItem}
                    name="company"
                    className="text-primary-500 -mt-1"
                  >
                    {currItem}
                  </option>
                </>
              );
            })}
          </select>
        </div>
        <div className="flex justify-center mt-10">
          {colorsData.map((currItem, index) => {
            if (currItem === "All") {
              return (
                <button
                  key={index}
                  type="button"
                  value={currItem}
                  name="color"
                  onClick={updateFilterValue}
                  className="text-3xl mr-2"
                >
                  all
                </button>
              );
            }
            return (
              <button
                key={index}
                style={{ background: `${currItem ? currItem : null}` }}
                type="button"
                value={currItem}
                name="color"
                onClick={updateFilterValue}
                className="rounded-full w-8 h-8 mr-2 mt-[2px]"
              >
                {color === currItem ? (
                  <FaCheck className="ml-1 text-primary-50" />
                ) : null}
              </button>
            );
          })}
        </div>
        <div className="my-3">
          <h3 className="rounded-sm py-3 font-medium text-3xl">Price</h3>
          <div className="-mt-2">
            <p className="text-primary-500 text-2xl">
              <PriceFormat price={price} />
            </p>
            <input
              type="range"
              name="price"
              min={minPrice}
              max={maxPrice}
              value={price}
              onChange={updateFilterValue}
              className="appearance-none mt-0 bg-primary-500 h-2 rounded-xl"
            />
          </div>
        </div>
      </div>
      <button
        onClick={onRequestClose}
        className="bg-primary-500 w-56 text-primary-50 p-3 rounded-md"
      >
        Close
      </button>
    </div>
  ) : null;
}

export default FilterSection;
