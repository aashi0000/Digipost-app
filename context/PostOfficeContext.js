import React, { createContext, useState, useContext } from 'react';

const PostOfficeContext = createContext();

export const PostOfficeProvider = ({ children }) => {
  const [postOfficeId, setPostOfficeId] = useState(null);
  const [postOfficeData, setPostOfficeData] = useState(null);

  return (
    <PostOfficeContext.Provider value={{ postOfficeId, setPostOfficeId, postOfficeData, setPostOfficeData }}>
      {children}
    </PostOfficeContext.Provider>
  );
};

export const usePostOffice = () => useContext(PostOfficeContext);