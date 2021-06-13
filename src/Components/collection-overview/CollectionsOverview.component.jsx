import React from 'react';
// import './CollectionsOverview.styles.scss';
import styles from './CollectionsOverview.module.scss';
import { connect } from 'react-redux';
import { selectCollectionPreview } from '../../redux/shop/shop.selector';
import CollectionPreview from '../preview-collection/CollectionPreview.component';

const CollectionsOverview = props => {
  return (
    <div className={styles[`collections-overview`]}>
      {props.collections.map(collection => {
        return (
          <CollectionPreview
            key={collection.id}
            title={collection.title}
            items={collection.items}
          ></CollectionPreview>
        );
      })}
    </div>
  );
};

const mapStateToProps = state => ({
  collections: selectCollectionPreview(state),
});

export default connect(mapStateToProps)(CollectionsOverview);
