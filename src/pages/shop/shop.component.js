import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { updateCollections } from '../../redux/shop/shop.actions';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';

import CollectionsOverviewContainer from '../../components/collections-overview/collections-overview.container';
import CollectionPageContainer from '../collection/collection.container';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions';
// import { selectIsCollectionFetching, selectIsCollectionsLoaded } from '../../redux/shop/shop.selectors';
// import { firestore, convertCollectionsSanpshotToMap } from '../../firebase/firebase.utils';
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
// const CollectionsOverviewWithSpinner = WithSpinner(CollectionsOverview);
// const CollectionPageWithSpinner = WithSpinner(CollectionPage);
class ShopPage extends React.Component {
  // state = {
  //   loading: true,
  // };

  // unsubscribeFromSnapshop = null;

  componentDidMount() {
    // const { updateCollections } = this.props;
    // const collectionRef = firestore.collection('collections');
    // fetch('https://firestore.googleapis.com/v1/projects/jim-clothing-db/databases/(default)/documents/collections')
    //   .then(response => response.json())
    //   .then(collections => console.log(collections));
    // collectionRef.get().then(snapshot => {
    //   const collectionsMap = convertCollectionsSanpshotToMap(snapshot);
    //   updateCollections(collectionsMap);
    //   this.setState({ loading: false });
    // });

    const { fetchCollectionsStartAsync } = this.props;
    fetchCollectionsStartAsync();
  }

  render() {
    const { match } = this.props;
    // const { loading } = this.state;
    return (
      <div className='shop-page'>
        <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
        <Route
          path={`${match.path}/:collectionId`}
          // render={props => <CollectionPageWithSpinner isLoading={!IsCollectionsLoaded} {...props} />}
          component={CollectionPageContainer}
        />
      </div>
    );
  }
}

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections,
// });

// export default connect(mapStateToProps)(ShopPage);

// const mapStateToProps = createStructuredSelector({
//   // isCollectionFetching: selectIsCollectionFetching,
//   IsCollectionsLoaded: selectIsCollectionsLoaded,
// });

const mapDispatchToProps = dispatch => ({
  // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
  fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
