import React from 'react';
import Meta from './Meta';
import { ChildrenProps } from '../types';

export default function Layout({ children }: ChildrenProps) {
  return (
    <div className="min-h-screen bg-white">
      <Meta />
      {children}
    </div>
  );
}
