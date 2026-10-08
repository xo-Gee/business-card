import { useState } from 'react';
import { DEFAULT_BUSINESS_CARD_STATE } from './constants/defaultState';
import './common.css';
import type { BusinessCardState } from './types';
import { TemplateSelector } from './components/TemplateSelector/TemplateSelector';
import { InfoForm } from './components/InfoForm/InfoForm';
import { ColorSelector } from './components/ColorSelector/ColorSelector';
import { LogoUpload } from './components/LogoUpload/LogoUpload';
import { BusinessCardPreview } from './components/Preview/BusinessCardPreview';
import './App.css';

function App() {
  const [state, setState] = useState<BusinessCardState>(DEFAULT_BUSINESS_CARD_STATE);

  const handleUpdate = (updates: Partial<BusinessCardState>) => {
    setState(prev => ({ ...prev, ...updates }));
  };

  const handleFieldChange = <K extends keyof BusinessCardState>(field: K, value: BusinessCardState[K]) => {
    handleUpdate({ [field]: value });
  };

  return (
    <div className="app-layout">
      <div className="form-section">
        <TemplateSelector 
          selectedId={state.selectedTemplateId} 
          onSelect={(id) => handleFieldChange('selectedTemplateId', id)} 
        />
        <InfoForm state={state} onChange={handleFieldChange} />
        <ColorSelector state={state} onChange={handleUpdate} />
        <LogoUpload onChange={handleFieldChange} />
      </div>
      <div className="preview-section">
        <BusinessCardPreview state={state} />
      </div>
    </div>
  );
}

export default App;
