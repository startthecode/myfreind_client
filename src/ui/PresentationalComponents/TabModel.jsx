import React, {
  cloneElement,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

let tabClasses = `w-full`;
let activeTab;
let TabContext = createContext();
export const TabModel = ({ children }) => {
  let [openName, setOpenName] = useState(false);
  let open = setOpenName;

  return (
    <TabContext.Provider value={{ open, openName }}>
      {children}
    </TabContext.Provider>
  );
};

function Open({ whichTab, children, active }) {
  let { open, openName } = useContext(TabContext);
  activeTab = activeTab ? activeTab : whichTab;
  useEffect(() => {
    if ((active || activeTab == whichTab) && !openName) open(whichTab);
  });
  return cloneElement(<div>{children}</div>, {
    onClick: () => open(whichTab),
    ...(whichTab === openName && { className: "active" }),
  });
}

function Tab({ children, tabName }) { 
  let { openName, open } = useContext(TabContext);
  let tabFinallAttribute = {
    className: `${tabClasses} ${openName === tabName ? "block" : "hidden"}`,
  };
  return <div {...tabFinallAttribute}>{children}</div>;
}

TabModel.Open = Open;
TabModel.Tab = Tab;

export default TabModel;
