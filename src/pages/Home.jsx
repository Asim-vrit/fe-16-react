import { useEffect, useState } from "react";

function Home({ cart, setCart }) {
  const [products, setProducts] = useState([]);
  function addToCart(value) {
    setCart([...cart, value]);
  }
  function removeFromCart(value) {
    const udpatedCart = cart.filter((item) => item.id !== value.id);
    setCart(udpatedCart);
  }
  async function fetchProducts() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      if (!res.ok) {
        throw new Error(await res.text());
      }
      const data = await res.json();
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      Item in cart : {cart.length}
      <ul>
        {products.map((item, index) => {
          const cartFilters = cart.filter(
            (cartItem) => cartItem.id === item.id,
          );
          const isInCart = cartFilters.length > 0;
          return (
            <li key={index}>
              {item.title}
              {!isInCart && (
                <button onClick={() => addToCart(item)}>Add to cart</button>
              )}
              {isInCart && (
                <button onClick={() => removeFromCart(item)}>
                  Remove from cart
                </button>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Home;
