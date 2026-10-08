import React from 'react';
import './TemplateSelector.css';

interface Props {
  selectedId: number;
  onSelect: (id: number) => void;
}

export const TemplateSelector: React.FC<Props> = ({ selectedId, onSelect }) => {
  return (
    <div className="step-container template-selector">
      <h2>1. 템플릿 선택</h2>
      <div className="template-options">
        <button className={selectedId === 1 ? 'active' : ''} onClick={() => onSelect(1)}>
          가로 스탠다드 A
        </button>
        <button className={selectedId === 2 ? 'active' : ''} onClick={() => onSelect(2)}>
          가로 스탠다드 B
        </button>
        <button className={selectedId === 3 ? 'active' : ''} onClick={() => onSelect(3)}>
          세로 모던형
        </button>
      </div>
    </div>
  );
};
