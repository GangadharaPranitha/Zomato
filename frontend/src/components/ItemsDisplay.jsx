import { useState } from 'react';
import { itemData } from '../data'; 

const ItemsDisplay = () => {
     const [displayItem, setdisplayItem] = useState(Array.isArray(itemData) ? itemData : []);

    return (
        <div className="itemSection">
            {displayItem.length > 0 ? (
                displayItem.map((item, index) => (
                    <div className="gallery" key={index}>
                        <img src={item.item_img} alt={`Item ${index}`} />
                    </div>
                ))
            ) : (
                <p>No items to display</p> // Fallback message if empty
            )}
        </div>
    );
};

export default ItemsDisplay;

