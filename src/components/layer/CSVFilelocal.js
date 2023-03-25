// // import React from 'react'
// import React, { useEffect, useState } from "react";
// import Papa from "papaparse";
// import { Marker } from "react-leaflet";

// const CSVFilelocal = () => {

//   const [data, setData] = useState([])

//   useEffect(() => {
//     fetchData()
//   }, [])

//   const fetchData = async () => {
//     const file = process.env.PUBLIC_URL + '/assets/Airport.csv'
//     const res = await fetch(file)
//     const text = await res.text();
//     const json = Papa.parse(text, { headers: false }).data
//     var arr = []
//     json.forEach(el => {
//       arr.push(el)
      
//     });
// console.log(arr);
//     // const object = Object.assign({},json)
//     // const filterData = json.filter(item => item.long !== '' && item.lat !== '')
//     // console.log(filterData);
//     // setData()
//   }
//   return null
//   // return (
//   //   <>
//   //   {
//   //       data.map((res, index) => {
//   //         <Marker key={index} position={[res.lat, res.long]}></Marker>
//   //     })  
//   //   }
//   //   </>
//   // )
// }

// export default CSVFilelocal;