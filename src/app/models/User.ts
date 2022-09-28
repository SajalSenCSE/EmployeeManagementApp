export class User {
  userName: string;
  password: string;
  rememberMe?: boolean = true;
  captchaText?: string = '';
  templateId: number = 2;
}
