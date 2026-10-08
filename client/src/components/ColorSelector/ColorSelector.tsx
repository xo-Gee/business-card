import React from 'react';
import type { BusinessCardState } from '../../types';
import './ColorSelector.css';

interface Props {
  state: BusinessCardState;
  onChange: (updates: Partial<BusinessCardState>) => void;
}

export const ColorSelector: React.FC<Props> = ({ state, onChange }) => {
  const handleSyncChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const isSync = e.target.checked;
    if (isSync) {
      onChange({
        syncBgColors: true,
        backBgColor: state.frontBgColor,
        backTextColor: state.frontTextColor
      });
    } else {
      onChange({ syncBgColors: false });
    }
  };

  const handleColorChange = (field: keyof BusinessCardState, value: string) => {
    const updates: Partial<BusinessCardState> = { [field]: value };
    if (state.syncBgColors) {
      if (field === 'frontBgColor') updates.backBgColor = value;
      if (field === 'frontTextColor') updates.backTextColor = value;
    }
    onChange(updates);
  };

  return (
    <div className="step-container color-selector">
      <h2>3. 색상 선택</h2>
      
      <div className="color-box">
        <h3>배경색 선택</h3>
        <div className="color-pickers">
          <input type="color" value={state.frontBgColor} onChange={(e) => handleColorChange('frontBgColor', e.target.value)} title="전면 배경색" />
          <input type="color" value={state.backBgColor} onChange={(e) => handleColorChange('backBgColor', e.target.value)} disabled={state.syncBgColors} title="후면 배경색" />
        </div>
        <div className="sync-control">
          <label>
            <input type="checkbox" checked={state.syncBgColors} onChange={handleSyncChange} />
            앞뒷면 색상 통일
          </label>
        </div>
      </div>

      <div className="color-box">
        <h3>글자색 선택</h3>
        <div className="text-color-selectors">
          <div className="text-color-group">
            <span className="group-label">전면</span>
            <label><input type="radio" name="frontText" checked={state.frontTextColor === '#000000'} onChange={() => handleColorChange('frontTextColor', '#000000')} /> 어두운 글자</label>
            <label><input type="radio" name="frontText" checked={state.frontTextColor === '#ffffff'} onChange={() => handleColorChange('frontTextColor', '#ffffff')} /> 밝은 글자</label>
          </div>
          <div className="text-color-group">
            <span className="group-label">후면</span>
            <label><input type="radio" name="backText" checked={state.backTextColor === '#000000'} onChange={() => handleColorChange('backTextColor', '#000000')} disabled={state.syncBgColors} /> 어두운 글자</label>
            <label><input type="radio" name="backText" checked={state.backTextColor === '#ffffff'} onChange={() => handleColorChange('backTextColor', '#ffffff')} disabled={state.syncBgColors} /> 밝은 글자</label>
          </div>
        </div>
      </div>
    </div>
  );
};
