import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get(
        "/site/api/v1/store/products?page=1&size=10&relation&filter&available&sales&featured&most&q&sorting"
      )
      .then((res) => {
        setProducts(res.data.products);
        console.log(res);
      });
  }, []);
  return (
    <div>
      <ul>
        {products.map((t, index) => (
          <li key={index}>{t.title}</li>
        ))}
      </ul>
    </div>
  );
};
export default App;
