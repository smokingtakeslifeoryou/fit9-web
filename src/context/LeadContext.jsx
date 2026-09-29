import { createContext, useContext, useState, useMemo, useCallback } from "react";

const LeadContext = createContext(null);

export function LeadProvider({ children }) {
  const [selectedDirection, setSelectedDirection] = useState("");
  const [selectionId, setSelectionId] = useState(0);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);

  const selectDirection = useCallback((direction) => {
    setSelectedDirection(direction);
    setSelectionId((prev) => prev + 1);
  }, []);

  const clearDirection = useCallback(() => {
    setSelectedDirection("");
  }, []);

  const openPrivacy = useCallback(() => setIsPrivacyOpen(true), []);
  const closePrivacy = useCallback(() => setIsPrivacyOpen(false), []);

  const value = useMemo(
    () => ({
      selectedDirection,
      selectionId,
      selectDirection,
      clearDirection,
      isPrivacyOpen,
      openPrivacy,
      closePrivacy,
    }),
    [selectedDirection, selectionId, selectDirection, clearDirection, isPrivacyOpen, openPrivacy, closePrivacy]
  );

  return (
    <LeadContext.Provider value={value}>
      {children}
    </LeadContext.Provider>
  );
}

export function useLead() {
  const context = useContext(LeadContext);
  if (!context) {
    throw new Error("useLead must be used within a LeadProvider");
  }
  return context;
}
