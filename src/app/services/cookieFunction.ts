import { Cookie } from '../models/cookie';

export function getCookie(name: string) {
  let cArray: Array<string> = document.cookie.split(';');
  let cArrayLen: number = cArray.length;
  let cookieName = `${name}=`;
  let c: string;

  for (let i: number = 0; i < cArrayLen; i += 1) {
    c = cArray[i].replace(/^\s+/g, '');
    if (c.indexOf(cookieName) == 0) {
      return c.substring(cookieName.length, c.length);
    }
  }
  return '';
}

export function deleteCookie(cookieName: string) {
  setCookie({
    name: cookieName,
    value: '',
    expireDays: -1,
    session: false,
    secure: false,
    path: [],
  });
}

export function setCookie(params: Cookie) {
  let d: Date = new Date();
  d.setTime(
    d.getTime() +
      (params.expireDays ? params.expireDays : 1) * 24 * 60 * 60 * 1000
  );
  document.cookie =
    (params.name ? params.name : '') +
    '=' +
    (params.value ? params.value : '') +
    ';' +
    (params.session && params.session == true
      ? ''
      : 'expires=' + d.toUTCString() + ';') +
    'path=' +
    (params.path && params.path?.length > 0 ? params.path : '/') +
    ';' +
    (location.protocol === 'https:' && params.secure && params.secure == true
      ? 'secure'
      : '');
}
