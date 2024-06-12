export type ProfileType = {
    name: string,
    lastName: string,
    age?: number,
    city?: string,
    country?: string,
    username?: string,
    avatar?: string,
}

export type ProfileSchema = {
    user: ProfileType,
    profileForm:  ProfileType,
    isLoading: boolean,
    error?: string,
    readonly : boolean,
    validationError?: string | null,
}
