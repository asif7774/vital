import React, { createContext, useContext, useState, useCallback, ReactNode } from 'react';

export interface ModalConfig {
  id: string; 
  title?: string;
  content: ReactNode;
  actions?: ReactNode;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  hideCloseButton?: boolean;
}

interface ModalContextType {
  activeModal: ModalConfig | null;
  showModal: (config: Omit<ModalConfig, 'id'>) => void;
  hideModal: () => void;
}

const ModalContext = createContext<ModalContextType | undefined>(undefined);

export const ModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [activeModal, setActiveModal] = useState<ModalConfig | null>(null);

  const showModal = useCallback((config: Omit<ModalConfig, 'id'>) => {
    const id = Math.random().toString(36).substring(2, 9);
    setActiveModal({ ...config, id });
  }, []);

  const hideModal = useCallback(() => {
    setActiveModal(null);
  }, []);

  return (
    <ModalContext.Provider value={{ activeModal, showModal, hideModal }}>
      {children}
    </ModalContext.Provider>
  );
};

export const useModal = () => {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
