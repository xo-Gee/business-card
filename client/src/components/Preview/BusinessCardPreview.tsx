import type { FC } from 'react';
import { useState } from 'react';
import type { BusinessCardState } from '../../types';
import './BusinessCardPreview.css';

interface Props {
  state: BusinessCardState;
}

export const BusinessCardPreview: FC<Props> = ({ state }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const isVertical = state.selectedTemplateId === 3;

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const renderFront = () => {
    switch (state.selectedTemplateId) {
      case 1:
        return (
          <div className="card-face card-front t1-front" style={{ backgroundColor: state.frontBgColor, color: state.frontTextColor }}>
            {state.frontLogoDataUrl && <img src={state.frontLogoDataUrl} alt="Front Logo" className="logo" />}
          </div>
        );
      case 2:
        return (
          <div className="card-face card-front t2-front" style={{ backgroundColor: state.frontBgColor, color: state.frontTextColor }}>
            {state.frontLogoDataUrl ? (
              <img src={state.frontLogoDataUrl} alt="Front Logo" className="logo" />
            ) : (
              <div className="logo" style={{ visibility: 'hidden', height: '60px' }}></div>
            )}
            <div className="name-text">{state.name || <span style={{visibility: 'hidden'}}>이름</span>}</div>
            <div className="title-text" style={{ visibility: state.title ? 'visible' : 'hidden' }}>{state.title || '직책'}</div>
            <div className="t2-info-bottom">
              <div style={{ visibility: state.phone ? 'visible' : 'hidden' }}>{state.phone || '000'}</div>
              <div style={{ visibility: state.email ? 'visible' : 'hidden' }}>{state.email || 'a@b.com'}</div>
              <div style={{ visibility: state.website ? 'visible' : 'hidden' }}>{state.website || 'www'}</div>
              <div style={{ marginTop: '8px', fontWeight: 'bold', visibility: state.company ? 'visible' : 'hidden' }}>{state.company || 'Comp'}</div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="card-face card-front t3-front" style={{ backgroundColor: state.frontBgColor, color: state.frontTextColor }}>
            {state.frontLogoDataUrl && <img src={state.frontLogoDataUrl} alt="Front Logo" className="logo" />}
          </div>
        );
      default:
        return null;
    }
  };

  const renderBack = () => {
    switch (state.selectedTemplateId) {
      case 1:
        return (
          <div className="card-face card-back t1-back" style={{ backgroundColor: state.backBgColor, color: state.backTextColor }}>
            {state.company && <div className="t1-company">{state.company}</div>}
            {state.backLogoDataUrl && <img src={state.backLogoDataUrl} alt="Back Logo" className="logo" />}
            <div className="t1-info-bottom">
              <div className="t1-left-block">
                <div className="name-text">{state.name}</div>
                {state.title && <div className="title-text">{state.title}</div>}
              </div>
              <div className="t1-right-block">
                {state.phone && <div>{state.phone}</div>}
                {state.email && <div>{state.email}</div>}
                {state.website && <div>{state.website}</div>}
              </div>
            </div>
          </div>
        );
      case 2:
        const fallbackName = state.engName || state.name;
        const fallbackTitle = state.engTitle || state.title;
        const fallbackCompany = state.engCompany || state.company;
        
        return (
          <div className="card-face card-back t2-back" style={{ backgroundColor: state.backBgColor, color: state.backTextColor }}>
            {state.backLogoDataUrl ? (
              <img src={state.backLogoDataUrl} alt="Back Logo" className="logo" />
            ) : (
              <div className="logo" style={{ visibility: 'hidden', height: '60px' }}></div>
            )}
            <div className="name-text">{fallbackName || <span style={{visibility: 'hidden'}}>이름</span>}</div>
            <div className="title-text" style={{ visibility: fallbackTitle ? 'visible' : 'hidden' }}>{fallbackTitle || '직책'}</div>
            <div className="t2-info-bottom">
              <div style={{ visibility: state.phone ? 'visible' : 'hidden' }}>{state.phone || '000'}</div>
              <div style={{ visibility: state.email ? 'visible' : 'hidden' }}>{state.email || 'a@b.com'}</div>
              <div style={{ visibility: state.website ? 'visible' : 'hidden' }}>{state.website || 'www'}</div>
              <div style={{ marginTop: '8px', fontWeight: 'bold', visibility: fallbackCompany ? 'visible' : 'hidden' }}>{fallbackCompany || 'Comp'}</div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="card-face card-back t3-back" style={{ backgroundColor: state.backBgColor, color: state.backTextColor }}>
            {state.backLogoDataUrl ? (
               <img src={state.backLogoDataUrl} alt="Back Logo" className="logo" />
            ) : (
               <div style={{ flex: '0 0 25%' }}></div>
            )}
            <div className="t3-center-info">
              <div className="name-text">{state.name}</div>
              {state.title && <div className="title-text">{state.title}</div>}
              {state.company && <div className="title-text" style={{fontWeight: 'bold', marginTop: '8px'}}>{state.company}</div>}
            </div>
            <div className="t3-bottom-info">
              {state.phone && <div>{state.phone}</div>}
              {state.email && <div>{state.email}</div>}
              {state.website && <div>{state.website}</div>}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="preview-container">
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2>실시간 미리보기</h2>
        <span className="flip-hint" style={{ fontSize: '0.875rem', color: 'var(--primary-color)', opacity: 0.8 }}>명함을 클릭하면 뒤집어집니다 🔄</span>
      </div>
      
      <div className={`card-scene ${isVertical ? 'vertical' : ''}`}>
        <div 
          className={`card-container ${isVertical ? 'template-vertical' : 'template-landscape'} ${isFlipped ? 'is-flipped' : ''}`}
          onClick={handleFlip}
        >
          {renderFront()}
          {renderBack()}
        </div>
      </div>
    </div>
  );
};
