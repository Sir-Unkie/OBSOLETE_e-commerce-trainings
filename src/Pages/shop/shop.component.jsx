import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage.component';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions.js';
import { connect } from 'react-redux';
import {
  selectShopIsFetching,
  selectIsCollectionIsLoaded,
} from '../../redux/shop/shop.selector';
import './shop.styles.scss';

import CollectionsOverview from '../../Components/collection-overview/CollectionsOverview.component';
import Spinner from '../../Components/Spinner/Spinner';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  componentDidMount() {
    this.props.fetchCollectionsStartAsync();
  }

  render() {
    return (
      <div className='shop-page'>
        {!this.props.collectionIsLoaded ? (
          <Spinner></Spinner>
        ) : (
          <React.Fragment>
            <Route
              exact
              path={`${this.props.match.path}`}
              component={CollectionsOverview}
            />
            <Route
              path={`${this.props.match.path}/:collectionId`}
              component={CollectionPage}
            />
          </React.Fragment>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shopIsFetching: selectShopIsFetching(state),
  collectionIsLoaded: selectIsCollectionIsLoaded(state),
});

const mapDispatchToProps = dispatch => ({
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ShopPage);
