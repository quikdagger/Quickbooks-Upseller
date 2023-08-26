import React, { useState } from 'react';
import './App.css';
import Product from './Product';
import Addon from './Addon';
import SearchBar from './SearchBar';
import productData from './products.json';
import addonData from './addons.json';


const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [filteredAddons, setFilteredAddons] = useState(addonData);

  const handleProductSearch = filteredProducts => {
    setFilteredProducts(filteredProducts);
  };

  const handleAddonSearch = filteredAddons => {
    setFilteredAddons(filteredAddons);
  };

  return (
    <div className="app">
      <header className="header">
        Quickbooks UpSeller
      </header>
      
      <div className="content">
        <div className="product-section">
          <h2 className="section-heading">Products</h2>
          <SearchBar data={productData} onDataSearch={handleProductSearch} />
          {filteredProducts.map((product, index) => (
            <Product key={index} name={product.name} features={product.features} />
          ))}
        </div>

        <div className="addon-section">
          <h2 className="section-heading">Addons</h2>
          <SearchBar data={addonData} onDataSearch={handleAddonSearch} />
          {filteredAddons.map((addon, index) => (
            <Addon key={index} name={addon.name} features={addon.features} />
          ))}
        </div>
      </div>

      <footer className="footer">&copy; 2023 Quikdagger Coding. All rights reserved.</footer>
    </div>
  );
};

export default App;
