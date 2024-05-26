import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const fixTo = (n: number, fix: number = 2) => {
  return Number(n.toFixed(fix));
};

export const formatTime = (seconds: number) => {
  const pad = (num: number) => (num < 10 ? '0' + num : num.toString());
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return pad(minutes) + ':' + pad(remainingSeconds);
};
