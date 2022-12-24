import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./api.css"
import Post from './Post'
import Pagi from './Pagi'
const Api = () => {

const [info, setInfo] = useState([])
const [currentPage, setCurrentPage] = useState(1)
const [perPage] = useState(9)


const lastPage = currentPage * perPage
const firstPage = lastPage - perPage
const allPost = info.slice(firstPage,lastPage)

let paginate = (PageNumber)=>{
  setCurrentPage(PageNumber)
}

let next = () =>{
  if (currentPage < info.length / perPage) {
    setCurrentPage((current) => current +1)
  }
}  
 
let prev = () =>{
  if (currentPage < info.length / perPage) {
    setCurrentPage((current) => current -1)
  }
}  


    let getData = async() =>{
       let res= await axios.get("https://jsonplaceholder.typicode.com/posts") 
       setInfo(res.data);
    }
    useEffect(()=>{
        getData()
    },[])
    
  return (
    <div>
        <h2 style={{textAlign:"center"}}>Api check</h2>
        <Post post={allPost}/>
        <Pagi total={info.length}perPage={perPage} paginate={paginate} next={next} prev={prev} currentPage ={currentPage}/>
    </div>
  )
}

export default Api