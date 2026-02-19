export type User = {
    _id: string;
    name: string;
    email: string;
    role: "admin" | "user";
};

export type CreateUserForm = {
    name: string;
    email: string;
    password: string;
    role: "admin" | "user";
};

export type EditUserForm = {
    _id: string;
    name: string;
    email: string;
    role: "admin" | "user";
}