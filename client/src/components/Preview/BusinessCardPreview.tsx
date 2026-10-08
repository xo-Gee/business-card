import React from 'react';
import type { BusinessCardState } from '../../types';
import './BusinessCardPreview.css';

interface Props {
  state: BusinessCardState;
}

export const BusinessCardPreview: React.FC<Props> = ({ state }) => {
  return (
    <div className="preview-container">
      <h2>실시간 미리보기</h2>
      <div className="card-wrapper">
        <div className="card-front" style={{ backgroundColor: state.frontBgColor, color: state.frontTextColor }}>
           {state.frontLogoDataUrl ? <img src={state.frontLogoDataUrl} alt="Front Logo" className="logo" /> : null}
        </div>
        <div className="card-back" style={{ backgroundColor: state.backBgColor, color: state.backTextColor }}>
           <div className="name">{state.name}</div>
        </div>
      </div>
    </div>
  );
};
