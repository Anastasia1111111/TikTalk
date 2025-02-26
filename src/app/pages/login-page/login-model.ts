import { FormControl } from '@angular/forms';

export interface Login {
  username?: string;
  password?: string;
}

export interface LoginForm {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}
