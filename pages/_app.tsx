import 'bootstrap/dist/css/bootstrap.css';

import { NextComponentType } from 'next';

export default function YosumeApp({
  Component,
  pageProps,
}: {
  Component: NextComponentType;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}) {
  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
}
