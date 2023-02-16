import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({shoesPerPage,totalShoes,paginate,currentPage}) => {
    let pageNumber = [] ;

    for( let i=1 ; i <= Math.ceil(totalShoes/shoesPerPage) ; i++  ){
     pageNumber.push(i)
    }

   
    return (
        
<nav className='py-4'>
  <ul className='flex items-center justify-center gap-3 '>
  {pageNumber.map(number => <li className='border-2 border-black bg-white w-6 text-center' key={number} >
                    <Link onClick={()=>paginate(number)} href='!#' >{number} </Link>
                </li> )}
  </ul>
</nav>

    );
};

export default Pagination;