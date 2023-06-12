import ProductInfo from "./ProductInfo";
import UserInfo from "./UserInfo";

function App() {
  return (
    <div className="App">
       <UserInfo userId={1}/>
       <hr/>
       <ProductInfo productId={2}/>
    </div>
  );
}

export default App;
