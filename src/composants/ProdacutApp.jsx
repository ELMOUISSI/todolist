import React, { useState } from 'react';
import './ProdacutApp.css';

import ProductForm from './ProdacutForm';
import ProductTable from './ProdacutTable';

function App() {
  const [product, setProduct] = useState({
    title: '',
    price: 0,
    description: '',
    category: '',
    image: '',
  });

  return (
    <div className="App container">
      <ProductForm product={product} setProduct={setProduct} />
      <ProductTable />
    </div>
  );
}

export default App;
