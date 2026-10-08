import type { BusinessCardState } from '../types';

export const DEFAULT_BUSINESS_CARD_STATE: BusinessCardState = {
  name: '', // Required for rendering, but initially empty for form
  frontBgColor: '#ffffff',
  backBgColor: '#ffffff',
  frontTextColor: '#000000',
  backTextColor: '#000000',
  syncBgColors: true,
  selectedTemplateId: 1, // Default to Template 1 (가로 스탠다드 A)
};
