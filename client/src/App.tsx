import { useState } from 'react';
import { DEFAULT_BUSINESS_CARD_STATE } from './constants/defaultState';
import './common.css';
import type { BusinessCardState } from './types';
import { TemplateSelector } from './components/TemplateSelector/TemplateSelector';
import { InfoForm } from './components/InfoForm/InfoForm';
import { ColorSelector } from './components/ColorSelector/ColorSelector';
import { LogoUpload } from './components/LogoUpload/LogoUpload';
import { BusinessCardPreview } from './components/Preview/BusinessCardPreview';
import { DownloadButton } from './components/Preview/DownloadButton';
import { Toast } from './components/Toast/Toast';
import './App.css';

function App() {
  const [state, setState] = useState<BusinessCardState>(DEFAULT_BUSINESS_CARD_STATE);
  const [activeStep, setActiveStep] = useState(1);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (message: string) => {
    setToastMessage(message);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const handleUpdate = (updates: Partial<BusinessCardState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const handleFieldChange = (field: keyof BusinessCardState, value: any) => {
    handleUpdate({ [field]: value });
  };

  const toggleStep = (step: number) => {
    setActiveStep(prev => prev === step ? 0 : step);
  };

  return (
    <div className="app-layout">
      <div className="form-section">
        <div className={`accordion-item ${activeStep === 1 ? 'active' : ''}`}>
          <div className="accordion-header" onClick={() => toggleStep(1)}>
            <h2>1. 템플릿 선택</h2>
            <button className="toggle-btn">{activeStep === 1 ? '▲ 접기' : '▼ 펼치기'}</button>
          </div>
          {activeStep === 1 && (
            <div className="accordion-body">
              <TemplateSelector selectedId={state.selectedTemplateId} onSelect={(id) => handleFieldChange('selectedTemplateId', id)} />
            </div>
          )}
        </div>

        <div className={`accordion-item ${activeStep === 2 ? 'active' : ''}`}>
          <div className="accordion-header" onClick={() => toggleStep(2)}>
            <h2>2. 정보 입력</h2>
            <button className="toggle-btn">{activeStep === 2 ? '▲ 접기' : '▼ 펼치기'}</button>
          </div>
          {activeStep === 2 && (
            <div className="accordion-body">
              <InfoForm state={state} onChange={handleFieldChange} />
            </div>
          )}
        </div>

        <div className={`accordion-item ${activeStep === 3 ? 'active' : ''}`}>
          <div className="accordion-header" onClick={() => toggleStep(3)}>
            <h2>3. 색상 선택</h2>
            <button className="toggle-btn">{activeStep === 3 ? '▲ 접기' : '▼ 펼치기'}</button>
          </div>
          {activeStep === 3 && (
            <div className="accordion-body">
              <ColorSelector state={state} onChange={handleUpdate} />
            </div>
          )}
        </div>

        <div className={`accordion-item ${activeStep === 4 ? 'active' : ''}`}>
          <div className="accordion-header" onClick={() => toggleStep(4)}>
            <h2>4. 로고 업로드</h2>
            <button className="toggle-btn">{activeStep === 4 ? '▲ 접기' : '▼ 펼치기'}</button>
          </div>
          {activeStep === 4 && (
            <div className="accordion-body">
              <LogoUpload state={state} onChange={handleFieldChange} showToast={showToast} />
            </div>
          )}
        </div>
        
        {/* 최종 다운로드 버튼을 폼 영역의 가장 마지막 흐름으로 이동 */}
        <div style={{ marginTop: '2rem' }}>
          <DownloadButton state={state} showToast={showToast} />
        </div>
      </div>
      <div className="preview-section">
        <BusinessCardPreview state={state} />
      </div>
      {toastMessage && <Toast message={toastMessage} />}
    </div>
  );
}

export default App;
