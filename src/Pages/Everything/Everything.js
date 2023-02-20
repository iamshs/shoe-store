import React, { useState } from "react";
import AllProduct from "../../Components/AllProduct";
import Pagination from "../../Components/Pagination";
import Spinner from "../../Components/Spinner";
import useProducts from "../../hooks/useProducts";

const Everything = () => {
  const [shoes, isLoading] = useProducts();
  const [currentPage, setCurrentPage] = useState(1);
  const [shoesPerPage] = useState(8);
  

  //handle price

 
  if (isLoading) {
    return <Spinner />;

  }
   //getCurrentPost

   const indexOfLastShoe = currentPage * shoesPerPage;
   const indexOfFirstShoe = indexOfLastShoe - shoesPerPage;
   const currentShoes = shoes.slice(indexOfFirstShoe, indexOfLastShoe);
 
 
 //change page
  const paginate = (page) => setCurrentPage(page);

  return (
    <div >
     
      <AllProduct shoes={currentShoes} isLoading={isLoading} />
      <Pagination
        shoesPerPage={shoesPerPage}
        totalShoes={shoes.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

export default Everything;
