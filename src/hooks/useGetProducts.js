import { useEffect, useState } from "react";

const useGetProducts = (API) => {
  const [products, setProducts] = useState([]);

	useEffect(() => {
		async function fetchProduct() {
      try {
        const response = await fetch(API);
			  const data = await response.json();
			  setProducts(data);
      }catch (error) {
        console.error(error)
      }			
		}
		fetchProduct();
	},[]);

  return products;
};

export default useGetProducts;