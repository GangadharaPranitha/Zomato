// eslint-disable-next-line no-unused-vars
import React from 'react';
import TopBar from '../components/TopBar';
import ItemsDisplay from '../components/ItemsDisplay';
import Chains from '../components/Chains';
import FirmCollections from '../components/FirmCollections';
import ProductMenu from '../components/ProductMenu';

const LandingPage = () => {
  return (
    <div>
      <TopBar />
      <ProductMenu />
      <div className="landingSection">
        <ItemsDisplay />
        <Chains />
        <FirmCollections />
      </div>
    </div>
  );
};

export default LandingPage;
