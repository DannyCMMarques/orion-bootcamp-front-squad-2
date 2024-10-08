export function setAuthToken(token: string): void {
  localStorage.setItem('access_token', token);
}

export function getAuthToken(): string | null {
  return localStorage.getItem('access_token');
}

export function removeAuthToken(): void {
  localStorage.removeItem('access_token');
}
