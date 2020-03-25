import favicon from '../asset/favicon.ico';

export const _global: GlobalPayload = {
  favicon,
  resumeTitle: '(대충 유용우 Resume 라는 제목)',
};

export interface GlobalPayload {
  resumeTitle: string;
  favicon: string;
}
