import React from 'react';
import { Route } from 'react-router-dom';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import SHOP_DATA from "./shop.data";
// import CollectionPreview from '../../components/collection-preview/collection-preview';

// import { selectCollections } from '../../redux/shop/shop.selectors';

// class ShopPage extends React.Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       collections: SHOP_DATA
//     };
//   }
//   render() {
//     const { collections } = this.state;
//     return (
//       <div className="shop-page">
//         {collections.map(({ id, ...otherCollectionProps }) => {
//           return <CollectionPreview key={id} {...otherCollectionProps} />;
//         })}
//       </div>
//     );
//   }
// }

// const ShopPage = ({ collections }) => {
//   return (
//     <div className='shop-page'>
//       {collections.map(({ id, ...otherCollectionProps }) => {
//         return <CollectionPreview key={id} {...otherCollectionProps} />;
//       })}
//     </div>
//   );
// };

const ShopPage = ({ match }) => {
  return (
    <div className='shop-page'>
      <Route exact path={`${match.path}`} component={CollectionsOverview} />
      <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections,
// });

// export default connect(mapStateToProps)(ShopPage);
export default ShopPage;
