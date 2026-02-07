import { createContext, useContext, useState, ReactNode } from 'react';

type TextSize = 'sm' | 'md' | 'lg' | 'xl';

interface TextSizeContextType {
  textSize: TextSize;
  setTextSize: (size: TextSize) => void;
  textClass: string;
}

const TextSizeContext = createContext<TextSizeContextType | undefined>(undefined);

const TEXT_CLASSES: Record<TextSize, string> = {
  sm: 'text-size-sm',
  md: 'text-size-md',
  lg: 'text-size-lg',
  xl: 'text-size-xl',
};

export function TextSizeProvider({ children }: { children: ReactNode }) {
  const [textSize, setTextSize] = useState<TextSize>('md');

  return (
    <TextSizeContext.Provider value={{ textSize, setTextSize, textClass: TEXT_CLASSES[textSize] }}>
      {children}
    </TextSizeContext.Provider>
  );
}

export function useTextSize() {
  const context = useContext(TextSizeContext);
  if (!context) throw new Error('useTextSize must be used within TextSizeProvider');
  return context;
}
