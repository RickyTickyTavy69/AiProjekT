export type ProfileType = {
    name: string,
    lastName: string,
    age: number,
    city: string,
    country: string,
    username: string,
}

export type ProfileSchema = {
    user?: ProfileType,
    isLoading: boolean,
    error?: string,
}
