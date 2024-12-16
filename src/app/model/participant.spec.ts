import { Participant } from './participant';

describe('Participant', () => {
  it('should create an instance', () => {
    const participant = new Participant(
      1,                     // id
      'John',                // nom
      'Doe',                 // prenom
      'john.doe@example.com', // email
      '1234567890',          // telephone
      new Date(),            // dateNaissance
      '1234 Main St',        // adresse
      'Homme',               // genre
      'Actif',               // statut
      new Date(),            // dateInscription
      'Admin',               // role
      []                     // evenements
    );
    expect(participant).toBeTruthy();
  });
});
