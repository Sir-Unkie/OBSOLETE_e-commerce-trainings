import React from 'react';
import { Route } from 'react-router-dom';
import CollectionPage from '../collection/CollectionPage.component';
import { updateShopCollections } from '../../redux/shop/shop.actions.js';
import { connect } from 'react-redux';

import './shop.styles.scss';
import {
  firestore,
  convertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils';
import CollectionsOverview from '../../Components/collection-overview/CollectionsOverview.component';
import Spinner from '../../Components/Spinner/Spinner';

class ShopPage extends React.Component {
  unsubscribeFromSnapshot = null;
  state = {
    isLoading: true,
  };
  componentDidMount() {
    const collectionRef = firestore.collection('collections');
    collectionRef.get().then(snapshot => {
      console.log(snapshot);
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap);
      this.props.updateShopCollections(collectionsMap);
      this.setState({ isLoading: false });
    });
  }

  render() {
    return (
      <div className='shop-page'>
        {this.state.isLoading ? (
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

const mapDispatchToProps = dispatch => ({
  updateShopCollections: collections =>
    dispatch(updateShopCollections(collections)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
