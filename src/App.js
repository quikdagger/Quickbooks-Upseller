import React, { useState } from 'react';
import './App.css';
import Product from './Product';
import Addon from './Addon';
import Changelog from './Changelog';
import SearchBar from './SearchBar';
import productData from './products.json';
import addonData from './addons.json';
import changelogData from './changelog.json';

const App = () => {
  const [filteredProducts, setFilteredProducts] = useState(productData);
  const [filteredAddons, setFilteredAddons] = useState(addonData);

  // Create individual clicked states for sections
  const [productsClicked, setProductsClicked] = useState(false);
  const [addonsClicked, setAddonsClicked] = useState(false);

  const handleProductSearch = (filteredProducts) => {
    setFilteredProducts(filteredProducts);
  };

  const handleAddonSearch = (filteredAddons) => {
    setFilteredAddons(filteredAddons);
  };

  // Toggle the clicked state for Products section
  const handleProductsClick = () => {
    setProductsClicked(!productsClicked);
  };

  // Toggle the clicked state for Addons section
  const handleAddonsClick = () => {
    setAddonsClicked(!addonsClicked);
  };

  return (
    <div className="app">
      <div className="background-image"></div> 
      <header className="header">
        Quickbooks UpSeller v.0.1.6.2
      </header>

      <p className="header2">
        This is an alpha version of this application. As of right now, the data is built using the training modules directly, so it does not 100% reflect the live version of Quickbooks.
        Because of this, in reality, even if it were fully updated, use your own knowledge and only use this as a tool and not to replace your knowledge. Over time, I will update
        this app with more features and updated information.
      </p>

      <div className="content">
        <div className={`product-section ${productsClicked ? 'clicked' : ''}`}>
          <h2 className="section-heading" onClick={handleProductsClick}>Products</h2>
          <SearchBar data={productData} onDataSearch={handleProductSearch} />
          <div className="product-list">
            {filteredProducts.map((product, index) => (
              <Product key={index} name={product.name} features={product.features} />
            ))}
          </div>
        </div>

        <div className={`addon-section ${addonsClicked ? 'clicked' : ''}`}>
          <h2 className="section-heading" onClick={handleAddonsClick}>Addons</h2>
          <SearchBar data={addonData} onDataSearch={handleAddonSearch} />
          <div className="addon-list">
            {filteredAddons.map((addon, index) => (
              <Addon key={index} name={addon.name} features={addon.features} />
            ))}
          </div>
        </div>

        <div className="changelog-section">
          <Changelog entries={changelogData} />
        </div>
      </div>

      <footer className="footer">&copy; 2023 Quikdagger Coding. All rights reserved.</footer>
    </div>
  );
};

export default App;
