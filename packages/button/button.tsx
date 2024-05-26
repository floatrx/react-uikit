import { type ReactNode, useState } from 'react';
import { cn } from '../lib/utils';

export interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const Button: FC<ButtonProps> = function ({className, children, onClick}) {
  const [color, setColor] = useState('blue');

  const handleClick = () => {
    setColor(color === 'blue' ? 'red' : 'blue');
    onClick?.()
  };

  return <button className={cn(className, 'px-4 py-2 rounded-sm text-white')} style={{backgroundColor: color}} onClick={handleClick}>
    {children}
  </button>;
};
