import NumberedList from "./NumberedList";
import RegularList from "./RegularList";
import { people } from './data/people';
import {products} from './data/products';
import LargePersonListItem from "./people/LargePersonListItem";
import SmallPersonListItem from "./people/SmallPersonListItem";
import LargeProductListItem from "./products/LargeProductList";
import SmallProductListItem from "./products/SmallProductList";

function App() {
  return (
    <div className="App">
       <RegularList 
          items={people} 
          resourceName="preson"
          itemComponent={SmallPersonListItem}
      />
      <hr/>
       <RegularList 
          items={people} 
          resourceName="preson"
          itemComponent={LargePersonListItem}
      />
      <hr/>

      <RegularList 
          items={products} 
          resourceName="product"
          itemComponent={SmallProductListItem}
      />
      <hr/>

      <NumberedList 
          items={products} 
          resourceName="product"
          itemComponent={LargeProductListItem}
      />
      <hr/>
    </div> 
  );
}

export default App;
