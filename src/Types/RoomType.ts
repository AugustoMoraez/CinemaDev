import { movie } from "./movieTypes"

export type chair = {
    id: number, status: "livre" | "ocupado"
}

type cronograma = {
    horario: string,
    chairs: chair[]
}

export type Sala = {
    id: number,
    filme: movie,
    cronogramas: cronograma[]
}