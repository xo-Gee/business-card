import React from 'react';
import type { BusinessCardState } from '../../types';

interface Props {
  state: BusinessCardState;
  onChange: (field: keyof BusinessCardState, value: string) => void;
}

export const InfoForm: React.FC<Props> = ({ state, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.name as keyof BusinessCardState, e.target.value);
  };

  return (
    <div className="info-form">
      <div className="common-grid-row">
        <div className="common-form-group">
          <label className="common-label">이름 (Name) *</label>
          <input className="common-input" type="text" name="name" value={state.name} onChange={handleChange} placeholder="홍길동" />
        </div>
        <div className="common-form-group">
          <label className="common-label">직책 (Title)</label>
          <input className="common-input" type="text" name="title" value={state.title || ''} onChange={handleChange} placeholder="대표 / CEO" />
        </div>
        <div className="common-form-group">
          <label className="common-label">회사명 (Company)</label>
          <input className="common-input" type="text" name="company" value={state.company || ''} onChange={handleChange} placeholder="CardGenie" />
        </div>
        <div className="common-form-group">
          <label className="common-label">연락처 (Phone)</label>
          <input className="common-input" type="text" name="phone" value={state.phone || ''} onChange={handleChange} placeholder="010-1234-5678" />
        </div>
        <div className="common-form-group">
          <label className="common-label">이메일 (Email)</label>
          <input className="common-input" type="email" name="email" value={state.email || ''} onChange={handleChange} placeholder="email@example.com" />
        </div>
        <div className="common-form-group">
          <label className="common-label">웹사이트 (Website)</label>
          <input className="common-input" type="text" name="website" value={state.website || ''} onChange={handleChange} placeholder="www.example.com" />
        </div>

        {state.selectedTemplateId === 2 && (
          <>
            <div className="common-form-group">
              <label className="common-label">영문 이름 (Eng Name)</label>
              <input className="common-input" type="text" name="engName" value={state.engName || ''} onChange={handleChange} placeholder="Hong Gil Dong" />
            </div>
            <div className="common-form-group">
              <label className="common-label">영문 직책 (Eng Title)</label>
              <input className="common-input" type="text" name="engTitle" value={state.engTitle || ''} onChange={handleChange} placeholder="CEO" />
            </div>
            <div className="common-form-group">
              <label className="common-label">영문 회사명 (Eng Company)</label>
              <input className="common-input" type="text" name="engCompany" value={state.engCompany || ''} onChange={handleChange} placeholder="CardGenie Inc." />
            </div>
          </>
        )}
      </div>
    </div>
  );
};
