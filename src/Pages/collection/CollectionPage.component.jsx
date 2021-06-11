import React from 'react';
import './CollectionPage.styles.scss';
import CollectionItem from '../../Components/collection-item/CollectionItem.component';
import { selectCollection } from '../../redux/shop/shop.selector';
import { connect } from 'react-redux';

const CollectionPage = props => {
  return (
    <div className='collection-page'>
      <h2 className='title'>{props.collection.title}</h2>
      <div className='items'>
        {props.collection.items.map(collectionItem => (
          <CollectionItem
            key={collectionItem.id}
            name={collectionItem.name}
            imageUrl={collectionItem.imageUrl}
            price={collectionItem.price}
            item={collectionItem}
          ></CollectionItem>
        ))}
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => ({
  collection: selectCollection(ownProps.match.params.collectionId)(state),
});

export default connect(mapStateToProps)(CollectionPage);
