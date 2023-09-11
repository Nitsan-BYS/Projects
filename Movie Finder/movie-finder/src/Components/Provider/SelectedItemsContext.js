// Create a context for managing selected items
import { createContext, useContext, useState } from 'react';
import images from '../Scroller/images';

const SelectedItemsContext = createContext();

export function SelectedItemsProvider({ children }) {
   const imagesArray = Object.values(images);
   const [selectedItems, setSelectedItems] = useState(imagesArray);

   return (
      <SelectedItemsContext.Provider
         value={{ selectedItems, setSelectedItems }}
      >
         {children}
      </SelectedItemsContext.Provider>
   );
}

export function useSelectedItems() {
   return useContext(SelectedItemsContext);
}
