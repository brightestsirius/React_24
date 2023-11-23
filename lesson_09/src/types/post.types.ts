export interface IPost{
    id: string,
    title: string,
    completed: boolean
}

export interface IPostData extends Omit<IPost, 'id'> {}