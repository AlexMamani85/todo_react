import React, { createContext, FC, ReactElement, PropsWithChildren,useState } from "react";

export const TaskStatusChangedContext = createContext({
  updated: false,
  toogle: () => {console.log('exito')},

});

export const TaskStatusChangedContextProvider: FC<
  PropsWithChildren
> = (props):ReactElement => {
  const [updated, setUpdated] = useState(false);
  
  function toogleHandler () {
    updated ? setUpdated(false) : setUpdated(true);
  }

  return (
    <TaskStatusChangedContext.Provider 
      value={{
        updated: updated,
        toogle: toogleHandler,
      }} 
    >
      {props.children}
    </TaskStatusChangedContext.Provider>
  )
};