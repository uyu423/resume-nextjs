import 'jquery/dist/jquery.slim';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../style/global.css';

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
