import Header from "./components/Header.jsx";
import Shop from "./components/Shop.jsx";
import CartProvider from "./components/CartProvider.jsx";

function App() {
  return (
    <CartProvider>
      <Header />
      <Shop />
    </CartProvider>
  );
}

export default App;
