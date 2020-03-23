import _debug from 'debug';

export default function debug(channel: string) {
  return _debug(`yosume:${channel}`);
}
