const FilterReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_FILTER_PRODUCTS":
      let priceArray = action.payload.map((currItem) => {
        return currItem.price;
      });

      // let maxPrice = priceArray.reduce(
      //   (intialValue, currValue) => {
      //     return Math.max(intialValue, currValue);
      //   },
      //   [1]
      // ); OR

      let maxPrice = Math.max(...priceArray);

      return {
        ...state,
        filter_products: [...action.payload],
        all_products: [...action.payload],
        filters: { ...state.filter, maxPrice: maxPrice, price: maxPrice },
      };
    case "SET_GRIDVIEW":
      return {
        ...state,
        grid_view: true,
      };
    case "SET_LISTVIEW":
      return {
        ...state,
        grid_view: false,
      };
    case "GET_SORT_VALUE":
      // let userSortValue = document.getElementById("sort");
      // let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sorting_value: action.payload,
      };
    case "SORTING_PRODUCTS":
      const { filter_products } = state;
      let tempSortProducts = [...filter_products];

      if (state.sorting_value === "a-z") {
        tempSortProducts = tempSortProducts?.sort((a, b) =>
          a.name.localeCompare(b.name)
        );
      }

      if (state.sorting_value === "z-a") {
        tempSortProducts = tempSortProducts.sort((a, b) =>
          b.name.localeCompare(a.name)
        );
      }

      if (state.sorting_value === "lowest") {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        tempSortProducts = tempSortProducts.sort(sortingProducts);
      }

      if (state.sorting_value === "highest") {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        tempSortProducts = tempSortProducts.sort(sortingProducts);
      }
      console.log("sort");
      return {
        ...state,
        filter_products: tempSortProducts,
      };
    case "UPDATE_FILTER_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_UPDATE":
      let { all_products } = state;
      let temFilterProduct = [...all_products];
      const { text, category, company, color, price } = state.filters;

      if (text) {
        temFilterProduct = temFilterProduct?.filter((curr) => {
          return curr.name?.toLowerCase().includes(text);
        });
      }

      if (state.sorting_value) {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        temFilterProduct = temFilterProduct.sort(sortingProducts);
      }

      if (category && category !== "all") {
        temFilterProduct = temFilterProduct?.filter(
          (curr) => curr.category?.toLowerCase() === category?.toLowerCase()
        );
      }
      if (company && company !== "all") {
        temFilterProduct = temFilterProduct?.filter(
          (curr) => curr.company?.toLowerCase() === company?.toLowerCase()
        );
      }

      if (color && color !== "All") {
        temFilterProduct = temFilterProduct?.filter((curr) =>
          curr.colors.includes(color)
        );
      }

      if (price && price === 0) {
        temFilterProduct = temFilterProduct?.filter(
          (currItem) => currItem?.price === price
        );
      } else {
        temFilterProduct = temFilterProduct?.filter(
          (currItem) => currItem?.price <= price
        );
      }
      return {
        ...state,
        filter_products: temFilterProduct,
      };
    default:
      return state;
  }
};

export default FilterReducer;
