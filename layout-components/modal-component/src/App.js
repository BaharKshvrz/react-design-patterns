import Modal from "./Modal";
import {products} from './data/products';
import SmallProductListItem from "./products/SmallProductList";
import RegularList from "./RegularList";

function App() {
  return (
    <div className="App">
       <Modal>
          <RegularList
              items={products} 
              resourceName="product"
              itemComponent={SmallProductListItem}
          />
       </Modal>
    </div>
  );
}

export default App;
