import React from 'react';
import './Toast.css';

interface Props {
  message: string;
}

export const Toast: React.FC<Props> = ({ message }) => {
  return (
    <div className="toast-container">
      <div className="toast-message">
        {message}
      </div>
    </div>
  );
};
