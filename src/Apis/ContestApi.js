import React, { useEffect, useState } from 'react'

const ContestApi = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    fetch(`${process.env.REACT_APP_APIURL}/api/v1/contestLists`, {
        method: "GET",
        mode: "cors",       
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => response.json(console.log(response))
        ).then((res) => {
          setData(res.resp)
          console.log(res.resp)
        })
  },[])
  return data;
}

export default ContestApi