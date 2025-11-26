export interface Photo {
  id: number;
  url: string;
  title: string;
  category: string;
  heightClass: string; // Tailwind class for height aspect
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  SUCCESS = 'SUCCESS',
  ERROR = 'ERROR'
}