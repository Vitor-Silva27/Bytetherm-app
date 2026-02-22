export type SignInForm = {
    email: string;
    password: string;
}

export type SignInRequest = {
  email: string;
  password: string;
};

export type SignInResponse = {
  token: string;
  user: {
    _id: string;
    name: string;
    email: string;
    role: "user" | "admin";
  };
};