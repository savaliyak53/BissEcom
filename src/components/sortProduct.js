import React, { useState } from "react";
import { BsGrid, BsList } from "react-icons/bs";
import { IoIosOptions } from "react-icons/io";
import { useFilterContext } from "../context/filterContext";
import { MobileFilter } from "./filterSection";

const SortProduct = () => {
  const { setGridView, setListView, sorting } =
    useFilterContext();

  const [isOpen, setOpen] = useState(false);
  const openModel = () => setOpen(true);
  const onRequestClose = () => setOpen(false);

  return (
    <div className="flex justify-between mx-8 text-2xl">
      <div className="space-x-4 sm:ml-16 lg:ml-0">
        <button onClick={setGridView}>
          <BsGrid className="text-3xl text-primary-500" />
        </button>
        <button onClick={setListView}>
          <BsList className="text-3xl  text-primary-500" />
        </button>
        <button className="sm:hidden" onClick={openModel}>
          <IoIosOptions className="text-3xl  text-primary-500" />
        </button>
        <div className="flex justify-center">
          <MobileFilter isOpen={isOpen} onRequestClose={onRequestClose} />
        </div>
      </div>
      <form>
        <select
          id="sort"
          name="sort"
          className=" text-primary-500 font-medium  border border-primary-500 rounded-md  focus:outline-primary-500"
          onClick={sorting}
        >
          <option value="lowest">
            Price(lowest)
          </option>
          <option name="highest" value="highest">
            Price(highest)
          </option>
          <option name="a-z" value="a-z">
            Price(a-z)
          </option>
          <option name="z-a" value="z-a">
            Price(z-a)
          </option>
        </select>
      </form>
    </div>
  );
};

export default SortProduct;
