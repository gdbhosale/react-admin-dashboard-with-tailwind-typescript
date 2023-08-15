class User {
  constructor(
    public id: number,
    public name: string,
    public email: string,
    public roles: string[],
    private token: string,
    private expiresAt: string,
  ) {}

  get accessToken(): string {
    if (!this.expiresAt) {
      return "";
    }

    const expiresAtDate = new Date(this.expiresAt);
    if (new Date() > expiresAtDate) {
      return "";
    }

    return this.token;
  }
}

export default User;
