import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Cart from './Cart';

import Data from '../Data';
import axios from 'axios';


const items = [Data




];


function Items({ currentItems }) {
  return (
    <>
     <div className='flex flex-wrap gap-x-[45px]'>
       {currentItems &&
        currentItems.map((item) => (
        <div>
            <h3><Cart img={item.thumbnail} price={item. Price} title={item. title}/></h3>
          </div>
        ))}
     </div>
    </>
  );
}

function Paginate({ itemsPerPage }) {
  
  let [alldata,setAlldata]=useState([])
   useEffect(()=>{
async function allData(){
let data=await axios.get("https://dummyjson.com/products")
setAlldata(data.data.products);

}
allData()
  },[])
  
  
  


  const [itemOffset, setItemOffset] = useState(0);




  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = alldata.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(alldata.length / itemsPerPage);

 


  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % alldata.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
<div className='flex  justify-between pt-[50px] '>
  <div className=''>
      <ReactPaginate
        breakLabel="...."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
     containerClassName='flex gap-x-4 '
     pageLinkClassName='bg-transparent hover:bg-[#262626]  py-2 px-4 text-[#262626] hover:text-white duration-500 border border: [1px] '
      />
     
</div>
 <p>Products from {itemOffset+1} to {endOffset<Data.length?endOffset:Data.length} of {Data.length}</p>
</div>
    </>
  );
}


export default Paginate
