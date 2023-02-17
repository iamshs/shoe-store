import React from 'react';
import { Link } from 'react-router-dom';

const Pagination = ({shoesPerPage,totalShoes,paginate,currentPage}) => {
    let pageNumber = [] ;

    for( let i=1 ; i <= Math.ceil(totalShoes/shoesPerPage) ; i++  ){
     pageNumber.push(i)
    }

    return (
        
<nav className='py-6'>
  <ul className='flex items-center justify-center gap-3 '>
  {pageNumber.map(number => <li  key={number} >
                    <Link onClick={()=>paginate(number)} 
                    className={`page-link ${currentPage === number ? "bg-black text-white px-3 py-1 rounded-sm" : "px-2 py-1 rounded-sm" }`} 
                    href='!#' >{number} </Link>
                </li> )}
  </ul>
</nav>

    );
};

export default Pagination;