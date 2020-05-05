import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
// import { createStructuredSelector } from 'reselect';
// import { updateCollections } from '../../redux/shop/shop.actions';

// import WithSpinner from '../../components/with-spinner/with-spinner.component';
import { ShopContainer } from './shop.styles';
import Spinner from '../../components/spinner/spinner.component';
import { fetchCollectionsStart } from '../../redux/shop/shop.actions';

const CollectionsOverviewContainer = lazy(() =>
  import('../../components/collections-overview/collections-overview.container')
);
const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
);

const ShopPage = ({ fetchCollectionsStart, match }) => {
  useEffect(() => {
    fetchCollectionsStart();
  }, [fetchCollectionsStart]);

  return (
    <ShopContainer>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionsOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          // render={props => <CollectionPageWithSpinner isLoading={!IsCollectionsLoaded} {...props} />}
          component={CollectionPageContainer}
        />
      </Suspense>
    </ShopContainer>
  );
};

// const mapStateToProps = createStructuredSelector({
//   collections: selectCollections,
// });

// export default connect(mapStateToProps)(ShopPage);

// const mapStateToProps = createStructuredSelector({
//   // isCollectionFetching: selectIsCollectionFetching,
//   IsCollectionsLoaded: selectIsCollectionsLoaded,
// });

const mapDispatchToProps = (dispatch) => ({
  // updateCollections: collectionsMap => dispatch(updateCollections(collectionsMap)),
  fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
});

export default connect(null, mapDispatchToProps)(ShopPage);
