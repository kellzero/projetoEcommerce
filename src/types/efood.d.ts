declare module 'efood-api' {
  export interface Restaurant {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: MenuItem[]
  }
  export interface MenuItem {
    id: number
    nome: string
    descricao: string
    foto: string
    preco: number
    porcao: string
  }
}
