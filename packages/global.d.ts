import type { PropsWithChildren, FunctionComponent } from 'react';

declare global {
  type FC<T = object> = FunctionComponent<PropsWithChildren<T>>;
}

