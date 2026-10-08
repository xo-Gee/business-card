import React, { useState } from 'react';
import type { BusinessCardState } from '../../types';
import './DownloadButton.css';

interface Props {
  state: BusinessCardState;
  showToast: (message: string) => void;
}

export const DownloadButton: React.FC<Props> = ({ state, showToast }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    if (!state.name) {
      showToast("이름(Name)은 필수 입력값입니다. 이름을 입력하신 후 다운로드해주세요.");
      return;
    }

    setIsDownloading(true);
    try {
      // html2canvas 동적 임포트 (초기 로딩 최적화)
      const html2canvasModule = await import('html2canvas');
      const html2canvas = html2canvasModule.default;

      // 앞뒷면 노드 찾기
      const frontEl = document.querySelector('.card-front') as HTMLElement;
      const backEl = document.querySelector('.card-back') as HTMLElement;

      if (!frontEl || !backEl) {
        throw new Error("명함 요소를 찾을 수 없습니다.");
      }

      // 캡처 옵션
      const options = {
        scale: 2,
        useCORS: true,
        backgroundColor: null,
      };

      const canvasFront = await html2canvas(frontEl, options);
      const canvasBack = await html2canvas(backEl, options);

      // 이미지 다운로드 헬퍼
      const downloadCanvas = (canvas: HTMLCanvasElement, filename: string) => {
        const link = document.createElement('a');
        link.download = filename;
        link.href = canvas.toDataURL('image/png');
        link.click();
      };

      downloadCanvas(canvasFront, 'business-card-front.png');
      downloadCanvas(canvasBack, 'business-card-back.png');
      
      showToast("다운로드가 완료되었습니다!");
    } catch (err) {
      console.error(err);
      showToast("이미지 다운로드 중 오류가 발생했습니다.");
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button 
      className="download-btn" 
      onClick={handleDownload} 
      disabled={isDownloading}
    >
      {isDownloading ? '캡처 중...' : '이미지 다운로드'}
    </button>
  );
};
