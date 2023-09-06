export interface Voting {
    question: string,
    options: Option[]
}

export interface Option {
    label: string,
    value: string,
    votesCount: number,
    users?: {name: string, image: string}[],
    color?: string;
}

export interface StyleParams {
    backgroundColor?: string,
    borderColor?: string,
    margin?: string,
    hoverColor?: string,
    fontSize?: string,
    scaleColor?: string
    
}