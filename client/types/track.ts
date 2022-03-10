export interface IComment {
    _id: string,
    username: string,
    name: string
}

export interface ITrack {
    _id: string,
    name: string,
    artist: string,
    text: string,
    listens: number,
    picture: string,
    audio: string,
    comments: IComment[]
}