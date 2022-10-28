import { SpentType } from "./enum"
export interface Spent {
    id: string,
    title: string,
    type: SpentType,
    date: any
}