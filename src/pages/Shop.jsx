import React, {useState} from 'react'

import Container from '../components/Container'
import Flex from '../components/Flex'
import Paginate from '../components/Paginate'

import Image from '../components/Image'
import PageIcon1 from '../assets/pageIcon1.png'
import PageIcon2 from '../assets/pageIcon2.png'
import Paginate2 from '../components/Paginate2'
import Catagory from '../components/Catagory'
import { FaPlus } from 'react-icons/fa'
import { useSelector } from 'react-redux'
import SubCatagory from '../components/SubCatagory'




const Shop = () => {
let [desing,setDesing]=useState(true)
// let handleDesing=()=>{
//   setDesing(!desing)
// }
let [desing2,setDesing2]=useState(false)
  let catagory=useSelector((state)=>state.catagory.value);
  
// let handleDesing2=()=>{
//   setDesing2(!desing2)
// }
const handleDesing = () => {
  setDesing(true);
  setDesing2(false);
};

const handleDesing2 = () => {
  setDesing2(true);
  setDesing(false);
};




  return (
  <section className='py-[136px]'>
      <Container>
<Flex >
   <div className='w-3/12 pr-10'>
   <h5 className='text-xl text-secondaryn font-dm font-bold pb-[15px]'>Shop by Category</h5>


<Catagory text="Phone" type="true"/>


  {catagory?<>
 
  <SubCatagory subText="Appo"/>
  <SubCatagory subText="Raelme"/>
  <SubCatagory subText="Iphone"/>
    </>:""}
<Catagory text="Desktop" type="false"/>


  {catagory?<>
 
  <SubCatagory subText="hp"/>
  <SubCatagory subText="del"/>
  <SubCatagory subText="Asus"/>
    </>:""}
<Catagory text="Watch" type="true"/>


  {catagory?<>
 
  <SubCatagory subText="hp"/>
  <SubCatagory subText="del"/>
  <SubCatagory subText="Asus"/>
    </>:""}
<Catagory text="Tab" type="false"/>


  {catagory?<>
 
  <SubCatagory subText="hp"/>
  <SubCatagory subText="del"/>
  <SubCatagory subText="Asus"/>
    </>:""}
 
<Catagory text="Laptop" type="true"/>


  {catagory?<>
 
  <SubCatagory subText="hp"/>
  <SubCatagory subText="del"/>
  <SubCatagory subText="Asus"/>
    </>:""}
 
   </div>
  <div className='w-9/12 '>
<Flex className='justify-between pb-[60px]'>

  <Flex className='gap-x-5'> 
    {/* <div onClick={ handleDesing}> <Image src={PageIcon1}/></div> 
    <div onClick={ handleDesing2}> <Image src={PageIcon2}/></div> 
      */}
    <div onClick={handleDesing} role="button" aria-label="Show Paginate">
  <Image src={PageIcon1} />
</div>
<div onClick={handleDesing2} role="button" aria-label="Show Paginate2">
  <Image src={PageIcon2} />
</div>
    

   
    
  </Flex>
  <Flex className='gap-x-[40px]'>
<Flex className='gap-x-[14px] items-center'>
   <label htmlFor="xyz">Sort by :</label>
  <select id='xyz' className='border border-[#767676] px-5 py-2'>

    <option value="">Red</option>
    <option value="">Blue</option>
    <option value="">Green</option>
  </select>
</Flex>
<Flex className='gap-x-[14px] items-center'>
   <label htmlFor="xyz">Show :</label>
  <select id='xyz' className='border border-[#767676] px-5 py-2'>

    <option value="">6</option>
    <option value="">12</option>
    <option value="">24</option>
    <option value="">36</option>
  </select>
</Flex>
  </Flex>





</Flex>
 {/* {desing?<Paginate itemsPerPage={12} />  :"" }
 {desing2?<Paginate2 itemsPerPage={12} />  :"" }
  */}
 {desing ? <Paginate itemsPerPage={12} /> : null}
{desing2 ? <Paginate2 itemsPerPage={12} /> : null}

   </div>
      
</Flex>
   
    </Container>
  </section>
  )
}

export default Shop
