import React from 'react'
import { Pagination } from 'react-bootstrap'

const Pagi = ({total,perPage,paginate,next,prev,currentPage}) => {
  let PageNumber = []
  for(let i= 1; i<= Math.ceil(total / perPage); i++){
    PageNumber.push(i)
  }
  return (

    <Pagination>
    <Pagination.First onClick={prev}/>
    {PageNumber.map((item)=>(
    <Pagination.Item onClick={()=>paginate(item)} className={currentPage === item && "active"}>{item}
    </Pagination.Item>
    ))}
    <Pagination.Last onClick={next}/>
  </Pagination>

  )
}

export default Pagi