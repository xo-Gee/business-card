import React from 'react';
import './TemplateSelector.css';

interface Props {
  selectedId: number;
  onSelect: (id: number) => void;
}

export const TemplateSelector: React.FC<Props> = ({ selectedId, onSelect }) => {
  return (
    <div className="template-selector">
      <div className="common-flex-row">
        <button className={`template-btn ${selectedId === 1 ? 'active' : ''}`} onClick={() => onSelect(1)}>
          가로 기본형
        </button>
        <button className={`template-btn ${selectedId === 2 ? 'active' : ''}`} onClick={() => onSelect(2)}>
          가로 양면형
        </button>
        <button className={`template-btn ${selectedId === 3 ? 'active' : ''}`} onClick={() => onSelect(3)}>
          세로형
        </button>
      </div>
    </div>
  );
};
