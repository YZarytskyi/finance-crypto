export const COOKIE_TOKEN_NAME = 'token';

export function setCookie(name: string, value: string): void {
  let encodedValue = encodeURIComponent(value);
  document.cookie = `${name}=${encodedValue}; path=/`;
}

export function getCookie(name: string): string | null {
  const nameLengthPlus = name.length + 1;
  return (
    document.cookie
      .split(";")
      .map((c) => c.trim())
      .filter((cookie) => {
        return cookie.substring(0, nameLengthPlus) === `${name}=`;
      })
      .map((cookie) => {
        return decodeURIComponent(cookie.substring(nameLengthPlus));
      })[0] || null
  );
}

export function deleteCookie(name: string): void {
  document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}