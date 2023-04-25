import React from 'react';

// class RestaurantsSearchIndexItem extends React.Component{
//     render(){
//         return(
//             <div>
//                 <li>
//                     <span></span>
//                 </li>
//             </div>
//         )
//     }
// }

function RestaurantsSearchIndexItem({ restaurant }){
    return(
        <li>
            {restaurant.name}
        </li>
    )
}

export default RestaurantsSearchIndexItem; 