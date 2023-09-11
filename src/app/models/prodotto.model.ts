export class Prodotto {

  id!: number;
  nome!: string;
  marca!: string;
  descrizione!: string;
  prezzo!: number;
  quantita!: number;
  categoria!: string;

  constructor() {}

  getId(): number { return this.id; }
  setId(id: number): void { this.id = id; }

  getNome(): string { return this.nome; }
  setNome(nome: string): void { this.nome = nome; }

  getMarca(): string { return this.marca; }
  setMarca(marca: string): void { this.marca = marca; }

  getDescrizione(): string { return this.descrizione; }
  setDescrizione(descrizione: string): void { this.descrizione = descrizione; }

  getPrezzo(): number { return this.prezzo; }
  setPrezzo(prezzo: number): void { this.prezzo = prezzo; }

  getQuantita(): number { return this.quantita; }
  setQuantita(quantita: number): void { this.quantita = quantita; }

  getCategoria(): string { return this.categoria; }
  setCategoria(categoria: string): void { this.categoria = categoria; }

}//Prodotto
