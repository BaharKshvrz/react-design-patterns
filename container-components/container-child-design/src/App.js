import axios from "axios";
import DataSource from "./DataSource";
import UserInfo from "./UserInfo";
import ProductInfo from './ProductInfo';
import ResourceLoader from './ResourceLoader';
import Text from "./Text";

 const getServiceData = url => async() => {
    const response = await axios.get(url);
    return response.data;
 }

 const getLocalStorageData = key => () => {
   return localStorage.getItem(key);
 }

function App() {
  return (
    <div className="App">
         <DataSource 
            getDataFunc={getServiceData('/users/2')} 
            renderItem= {data => <UserInfo user={data}/>}
         /> 
          <hr/>
         <DataSource 
           getDataFunc={getLocalStorageData('message')} 
           renderItem= {data => <Text message={data}/>} 
         /> 
          <hr/>
         <ResourceLoader resourceUrl="/users/1" renderItem= {data => <UserInfo user={data}/> } />
          <hr/>
         <ResourceLoader resourceUrl="/products/2" renderItem= {data => <ProductInfo product={data}/> } />
    </div>
  );
}

export default App;
