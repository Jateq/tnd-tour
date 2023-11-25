"use client";

import { createContext, useContext, useState } from 'react';

const MembershipContext = createContext();

export const MembershipProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const [selectedMembership, setSelectedMembership] = useState('basic');

  const selectMembership = (membership) => {
    setSelectedMembership(membership);
  };

  return (
      <MembershipContext.Provider
          value={{
            email,
            setEmail,
            name,
            setName,
            surname,
            setSurname,
            selectedMembership,
            selectMembership,
          }}
      >
        {children}
      </MembershipContext.Provider>
  );
};

export const useMembership = () => {
  return useContext(MembershipContext);
};
