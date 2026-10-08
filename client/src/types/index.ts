export interface BusinessCardState {
  name: string; // Required
  title?: string;
  company?: string;
  phone?: string;
  email?: string;
  website?: string;
  engName?: string; // For Template 2
  engTitle?: string; // For Template 2
  engCompany?: string; // For Template 2
  frontBgColor: string; // Hex, default: #ffffff
  backBgColor: string; // Hex, default: #ffffff
  frontTextColor: string; // Hex, default: #000000
  backTextColor: string; // Hex, default: #000000
  syncBgColors: boolean; // default: true
  frontLogoDataUrl?: string; // Base64
  backLogoDataUrl?: string; // Base64
  selectedTemplateId: number; // 1: Std A, 2: Std B, 3: Vertical
}
