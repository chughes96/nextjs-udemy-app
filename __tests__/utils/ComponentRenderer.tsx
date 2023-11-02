import { ReactElement } from 'react';
import Router from 'next/router';
import { render } from '@testing-library/react';
import { RouterContext } from 'next/dist/shared/lib/router-context.shared-runtime';

export const renderWithNavigation = (component: ReactElement, routerOverrides?: Partial<typeof Router>) =>
  render(<RouterContext.Provider value={{ ...Router, ...routerOverrides }}>{component}</RouterContext.Provider>);
