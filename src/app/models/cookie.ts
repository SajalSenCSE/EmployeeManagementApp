export interface Cookie {
  secure?: boolean;
  name: string;
  value: string;
  session: boolean;
  expireDays?: number;
  path?: string[];
}
