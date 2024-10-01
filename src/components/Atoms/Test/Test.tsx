import React from 'react';
import './Test.component.scss';

export interface TestProps {
  // Add props here
  _?: never;
}

export const Test: React.FC<TestProps> = (props) => {
  return <div className="test">{/* Component JSX here */}</div>;
};
