import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { updateCollections } from '../../redux/shop/shop.actions';

import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverview from '../../components/collections-overview/collections-overview.component';
import CollectionPage from '../collection/collection.component';

import { firestore, convertCollectionsSanpshotToMap } from '../../firebase/firebase.utils';
// import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import SHOP_DATA from "./shop.data";
// import CollectionPreview from '../../components/collection-preview/collection-preview';

// import { selectCollection } from '../../redux/shop/shop.selectors';

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
const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  state = {
    loading: true,
  };

  unsubscribeFromSnapshop = null;

  componentDidMount() {
    const { updateCollections } = this.props;
    const collectionRef = firestore.collection('collections');
    collectionRef.onSnapshot(async snapshot => {
      const collectionsMap = convertCollectionsSanpshotToMap(snapshot);
      updateCollections(collectionsMap);
      this.setState({ loading: false });
    });
  }

  render() {
    const { match } = this.props;
    const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route
          exact
          path={`${match.path}`}
          render={props => <CollectionsOverviewWithSpinner isLoading={loading} {...props} />}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={props => <CollectionPageWithSpinner isLoading={loading} {...props} />}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollection,
// });

// export default connect(mapStateToProps)(ShopPage);

const mapDispatchToProps = dispatch => ({
  updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
});

export default connect(null, mapDispatchToProps)(ShopPage);
