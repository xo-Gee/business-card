import type { FC, ChangeEvent } from 'react';
import type { BusinessCardState } from '../../types';
import './LogoUpload.css';

interface Props {
  state: BusinessCardState;
  onChange: (field: keyof BusinessCardState, value: any) => void;
  showToast: (message: string) => void;
}

export const LogoUpload: FC<Props> = ({ state, onChange, showToast }) => {
  const handleFile = (e: ChangeEvent<HTMLInputElement>, field: keyof BusinessCardState) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      showToast('5MB 이하의 이미지만 업로드 가능합니다.');
      return;
    }
    const reader = new FileReader();
    reader.onload = (ev) => {
      if (ev.target?.result) {
        onChange(field, ev.target.result as string);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="logo-upload">
      <div className="common-flex-row">
        <div className="common-form-group">
          <label className="common-label">전면 로고</label>
          <input className="file-input" type="file" accept="image/*" onChange={(e) => handleFile(e, 'frontLogoDataUrl')} />
          {state.frontLogoDataUrl && (
            <button className="delete-btn" onClick={() => onChange('frontLogoDataUrl', undefined)}>
              삭제
            </button>
          )}
        </div>
        <div className="common-form-group">
          <label className="common-label">후면 로고</label>
          <input className="file-input" type="file" accept="image/*" onChange={(e) => handleFile(e, 'backLogoDataUrl')} />
          {state.backLogoDataUrl && (
            <button className="delete-btn" onClick={() => onChange('backLogoDataUrl', undefined)}>
              삭제
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
