import axios from 'axios';
import  { useEffect, useState } from 'react'

const ResourceLoader = (props) => {
   const [ fetchData, setFetchData] = useState(null);  
   const { resourceUrl, renderItem} = props;
  
   useEffect(() => {
     ( async () => {
            const response = await axios.get(resourceUrl);
            setFetchData(response.data);
        }
     )();
  }, [resourceUrl]);
  
  return renderItem(fetchData); 
}

export default ResourceLoader
