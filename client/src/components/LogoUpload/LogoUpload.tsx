import type { FC, ChangeEvent } from 'react';
import type { BusinessCardState } from '../../types';
import './LogoUpload.css';

interface Props {
  onChange: (field: keyof BusinessCardState, value: string) => void;
}

export const LogoUpload: FC<Props> = ({ onChange }) => {
  const handleFile = (e: ChangeEvent<HTMLInputElement>, field: keyof BusinessCardState) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) {
      alert('5MB 이하의 이미지만 업로드 가능합니다.');
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
    <div className="step-container logo-upload">
      <h2>4. 로고 업로드</h2>
      <div className="upload-grid">
        <div className="upload-box">
          <label>전면 로고</label>
          <input type="file" accept="image/*" onChange={(e) => handleFile(e, 'frontLogoDataUrl')} />
        </div>
        <div className="upload-box">
          <label>후면 로고</label>
          <input type="file" accept="image/*" onChange={(e) => handleFile(e, 'backLogoDataUrl')} />
        </div>
      </div>
    </div>
  );
};
