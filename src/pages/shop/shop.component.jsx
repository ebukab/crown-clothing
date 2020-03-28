import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCollections } from '../../redux/shop/shop.selector';
import CollectionOverview from '../../components/collection-overview/collection-overview.component';
import { Route } from 'react-router-dom';
import CollectionPage from "../collection/collection.component"


const ShopPage = ({ match }) => {
    console.log("shop path" ,match.path)

    return (
    <div className='shop-page'>
        {/* {match.path === "/shop" ? <CollectionOverview/> : <CollectionPage/>} */}
        <Route exact path={`${match.path}`} component={CollectionOverview} />
        <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
    </div>
)};

const mapStateToProps = createStructuredSelector({
    collections: selectCollections
});

export default connect(mapStateToProps, null)(ShopPage);
