import "./App.css";
import ProductCard from "./components/common/cards/ProductCard";
import { products } from "./store/product";
import Navbar from "./components/layouts/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  // var count = 0;
  // react hook useState
  const [passwordError, setPasswordError] = useState("");
  const [password, setPassword] = useState("");
  console.log(password);

  // handle password change
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const [count, setCount] = useState(0); //1 , 2
  useEffect(() => {
    // if password is less than 6 characters, then set passwordError to "Password must be at least 6 characters"
    if (password.length < 6 && password.length > 0) {
      setPasswordError("Password must be at least 6 characters");
    } else {
      setPasswordError("");
    }
    console.log("useEffect called");
  });

  useEffect(() => {
    setCount(count + 5);
  }, []);

  return (
    <>
      <main className="max-w-screen-2xl mx-auto">
        <section>
          {/* Form */}
          <form>
            <div>
              <label htmlFor="password">password</label>
              <input
                type="password"
                id="password"
                onChange={(e) => handlePasswordChange(e)}
              />
              <p className="text-red-700">{passwordError}</p>
            </div>
          </form>
        </section>
        <section className="text-center">
          {/* test react hook useState */}
          <h1 className="text-5xl text-blue-900 text-center font-bold p-8">
            {count}
          </h1>
          <button
            className="bg-blue-800 text-white p-5 rounded-lg"
            onClick={
              () => setCount(count + 1) // 1, 2
            }
          >
            Count
          </button>
          {/*  */}
        </section>
        <h1 className="text-5xl text-blue-900 text-center font-bold p-8">
          Products from Taobao
        </h1>
        <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 px-5 gap-5">
          {products.map((product, index) => (
            // if product.stock is greater than 0, then render the ProductCard component
            <ProductCard
              key={index}
              mainImage={product.mainImage}
              name={product.name}
              price={product.price.minPrice}
              stock={product.stock}
            />
          ))}
        </section>
      </main>
    </>
  );
}

export default App;
