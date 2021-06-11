import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage.component';

import './shop.styles.scss';

import CollectionsOverview from '../../Components/collection-overview/CollectionsOverview.component';

const ShopPage = props => {
  return (
    <div className='shop-page'>
      <Route
        exact
        path={`${props.match.path}`}
        component={CollectionsOverview}
      />
      <Route
        path={`${props.match.path}/:collectionId`}
        component={CollectionPage}
      />
    </div>
  );
};

export default ShopPage;
