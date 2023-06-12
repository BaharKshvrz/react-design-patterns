import  { useEffect, useState } from 'react'

const DataSource = ({getDataFunc= async() => {}, renderItem}) => {
   const [ fetchData, setFetchData] = useState(null);  

   useEffect(() => {
     ( async () => {
            const response = await getDataFunc();
            setFetchData(response);
        }
     )();
  }, [getDataFunc]);
  
  return renderItem(fetchData); 
}

export default DataSource;
