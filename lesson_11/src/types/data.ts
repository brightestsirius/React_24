interface IPost {
    id: number;
    userId: number;
    title: string;
    body: string;
}

interface IUser{
    id: number;
    name: string;
}

type PartialPost = Partial<IPost>;

export type { IPost, PartialPost, IUser }