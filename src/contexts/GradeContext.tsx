import React, { createContext, useContext } from 'react';

interface GradeContextType {
  selectedGrade: number;
}

const GradeContext = createContext<GradeContextType | undefined>(undefined);

export function GradeProvider({ children }: { children: React.ReactNode }) {
  // Grade 8 is the only supported grade
  const value = {
    selectedGrade: 8
  };

  return (
    <GradeContext.Provider value={value}>
      {children}
    </GradeContext.Provider>
  );
}

export function useGrade() {
  const context = useContext(GradeContext);
  if (context === undefined) {
    throw new Error('useGrade must be used within a GradeProvider');
  }
  return context;
}