import React, { Fragment } from 'react';

const ItemListContainer = ({ greeting }) => {
    return ( 
        <Fragment>
            <h2 className="text-center my-5">{greeting}</h2>
        </Fragment>
     );
}
 
export default ItemListContainer;