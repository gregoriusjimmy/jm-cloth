import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

// import { selectCollections } from '../../redux/shop/shop.selectors';
import { selectCollectionsForPreview } from '../../redux/shop/shop.selectors';
import CollectionPreview from '../collection-preview/collection-preview.component';

import { CollectionsOverviewContainer } from './collections-overview.styles';

const CollectionsOverview = ({ collections }) => {
  return (
    <CollectionsOverviewContainer>
      {collections.map(({ id, ...otherCollectionProps }) => {
        return <CollectionPreview key={id} {...otherCollectionProps} />;
      })}
    </CollectionsOverviewContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  // collections: selectCollections,
  collections: selectCollectionsForPreview,
});

export default connect(mapStateToProps)(CollectionsOverview);
