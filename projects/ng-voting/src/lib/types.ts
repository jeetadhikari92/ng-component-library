export interface Voting {
    question: string,
    options: Option[]
}

export interface Option {
    label: string,
    value: string,
    votesCount: number,
    imageUrl?: string,
    users?: {name: string, image: string}[],
    color?: string,
    bgColor?: string,
    selected?: boolean,
}

export interface StyleParams {
    backgroundColor?: string,
    borderColor?: string,
    margin?: string,
    hoverColor?: string,
    fontSize?: string,
    scaleColor?: string
    topicBackgroundColor?: string,
    optionsBackgroundColor?: string,
    topicFontColor?: string,
    optionsFontColor?: string
}