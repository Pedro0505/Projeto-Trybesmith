interface IUser {
  id?: number;
  username: string;
  classe: string;
  level: number;
  password: string
}

interface IToken {
  token: string;
}

export { IUser, IToken };
