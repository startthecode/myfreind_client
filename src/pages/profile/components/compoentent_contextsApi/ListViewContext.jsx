import { createContext, useState } from "react";

export let ListViewContext = createContext();
export const ListViewProvider = ({ children }) => {
  let [listView, setListView] = useState(false);
  let open = (id, listFor) => setListView({ id: id, listFor: listFor });
  let close = () => setListView(false);

  return (
    <ListViewContext.Provider value={{ open, close, listView }}>
      {children}
    </ListViewContext.Provider>
  );
};
