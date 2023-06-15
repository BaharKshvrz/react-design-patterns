import ProductCard from './components/card/ProductCard';

function App() {
  return (
    <div className="App">
        <ProductCard>
            <ProductCard.Image src="./world.jpeg" alt="good day"/>
            <ProductCard.Title>Product Title</ProductCard.Title>
            <ProductCard.Desctiption>Product Description</ProductCard.Desctiption>
        </ProductCard>
    </div>
  );
}

export default App;
