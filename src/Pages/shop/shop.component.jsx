import React from 'react';
import { SHOP_DATA } from './SHOPDATA';
import CollectionPreview from '../../Components/preview-collection/CollectionPreview.component';
import './shop.styles.scss';

class ShopPage extends React.Component {
  constructor() {
    super();
    this.state = {
      collections: SHOP_DATA,
    };
  }

  render() {
    return (
      <div className='shop-page'>
        {this.state.collections.map(collection => {
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
  }
}

export default ShopPage;
