import { movie } from "./movieTypes"

type cadeira = {
    id: number, status: "livre" | "ocupado"
}

type cronograma = {
    horario: string,
    cadeiras: cadeira[]
}

export type Sala = {
    id: number,
    filme: movie,
    cronogramas: cronograma[]
}