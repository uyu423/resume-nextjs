/* eslint-disable @typescript-eslint/no-var-requires */
const { homepage } = require('./package.json');

const { NODE_ENV } = process.env;

module.exports = {
  output: 'export',
  distDir: 'docs',
  // 서버와 클라이언트 번들에 같은 값이 들어가야 날짜 계산 텍스트의 hydration이 일치한다 (component/common/useNow.ts)
  env: {
    BUILD_TIME: String(Date.now()),
  },
  images: {
    unoptimized: true,
  },
  assetPrefix: (() => {
    if (NODE_ENV === 'production' && homepage) {
      try {
        const { pathname } = new URL(homepage);
        if (pathname !== '/') {
          return pathname;
        }
        return '';
      } catch {
        return '';
      }
    }
    return '';
  })(),
};
