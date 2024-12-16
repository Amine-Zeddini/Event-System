import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AvisService } from '../avis.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ajouter-avis',
  templateUrl: './ajouter-avis.component.html',
  styleUrls: ['./ajouter-avis.component.css']
})
export class AjouterAvisComponent implements OnInit {
  avisForm!: FormGroup;
  titreOptions: string[] = [
    "Séminaire sur la Science des Données",
    "Atelier de Développement Web",
    "Formation en Marketing Digital",
    "Conférence sur l'Intelligence Artificielle",
    "Exposition d'Art Numérique",
    "Webinaire sur la Blockchain",
    "Séminaire sur la Gestion de Projet",
    "Atelier de Design UX/UI",
    "Conférence sur l'Éducation Numérique",
    "Forum sur les Startups Innovantes",
    "Séminaire sur les Nouvelles Technologies",
    "Atelier de Programmation Python",
    "Webinaire sur la Cybersécurité",
    "Séminaire sur la Blockchain Avancée",
    "Conférence sur l'Innovation en Entreprise",
    "Atelier sur l'Intelligence Artificielle",
    "Séminaire sur la Gestion des Ressources Humaines",
    "Webinaire sur le Marketing de Contenu",
    "Formation en Développement Mobile",
    "Forum sur l'Entrepreneuriat Social",
    "Séminaire sur la Conception de Produits Numériques",
    "Conférence sur l'Avenir de l'Internet",
    "Atelier sur la Programmation JavaScript",
    "Webinaire sur les Stratégies de Growth Hacking",
    "Séminaire sur la Blockchain dans la Finance",
    "Conférence sur la Santé Numérique",
    "Atelier sur les Bases de la Data Science",
    "Séminaire sur les Technologies Immersives",
    "Webinaire sur le Cloud Computing",
    "Formation sur la Sécurité des Applications Web",
    "Atelier de Réseautage Professionnel",
    "Séminaire sur l'Innovation Durable",
    "Conférence sur le Futur du Travail"
];


  constructor(
    private fb: FormBuilder,
    private avisService: AvisService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.avisForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.avisForm.valid) {
      const formData = this.avisForm.value;
      this.avisService.addAvis(formData).subscribe(
        (addedAvis) => {
          console.log('Avis ajoutée avec succès :', addedAvis);
          this.avisForm.reset();
          // Appeler emitAvisUpdate après l'ajout d'un avis
          this.avisService.emitAvisUpdate();
          this.router.navigate(['/listAvis']);
        },
        (error) => {
          console.error('Erreur lors de l\'ajout de l\'avis', error);
        }
      );
    }
  }
}
