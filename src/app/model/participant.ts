export class Participant {
  constructor(
    public id: number,
    public nom: string,
    public prenom: string,
    public email: string,
    public telephone: string,
    public dateNaissance: Date,
    public adresse: string,
    public genre: string,
    public statut: string,
    public dateInscription: Date,
    public role: string,
    public evenements: any[]
  ) {}
}
