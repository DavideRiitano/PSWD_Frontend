export class Utente {

  id!: number;
  nome!: string;
  cognome!: string;
  username!: string;
  email!: string;

  constructor() {}

  getId(): number { return this.id; }
  setId(id: number): void { this.id = id; }

  getNome(): string { return this.nome; }
  setNome(nome: string): void { this.nome = nome; }

  getCognome(): string { return this.cognome; }
  setCognome(cognome: string): void { this.cognome = cognome; }

  getUsername(): string { return this.username; }
  setUsername(username: string): void { this.username = username; }

  getEmail(): string { return this.email; }
  setEmail(email: string): void { this.email = email; }

  toString(): string {
    let dati: string = "Username: "+ this.username +"\n"+
                       "Nome: "+ this.nome +"\n"+
                       "Cognome: "+ this.cognome +"\n"+
                       "Email: "+ this.email +"\n";

    return dati;
  }//toString

}//Utente
