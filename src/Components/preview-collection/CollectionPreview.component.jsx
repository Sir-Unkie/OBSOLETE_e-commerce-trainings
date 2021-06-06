import React from 'react';
import './CollectionPreview.style.scss';
import CollectionItem from '../collection-item/CollectionItem.component';

const CollectionPreview = props => {
  return (
    <div className='collection-preview'>
      <h1 className='title'>{props.title}</h1>
      <div className='preview'>
        {props.items
          .filter((item, index) => index < 4)
          .map(item => {
            return (
              <CollectionItem
                key={item.id}
                name={item.name}
                imageUrl={item.imageUrl}
                price={item.price}
                item={item}
              ></CollectionItem>
            );
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
