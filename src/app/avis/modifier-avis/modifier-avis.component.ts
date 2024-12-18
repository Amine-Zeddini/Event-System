import { Component, OnInit } from '@angular/core';
import { AvisService } from '../avis.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Avis } from 'src/app/model/avis';

@Component({
  selector: 'app-modifier-avis',
  templateUrl: './modifier-avis.component.html',
  styleUrls: ['./modifier-avis.component.css']
})
export class ModifierAvisComponent implements OnInit {

  avisForm!: FormGroup;
  avisId!: number; // Le type doit être number
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
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.avisForm = this.fb.group({
      titre: ['', Validators.required],
      description: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.avisId = +this.route.snapshot.paramMap.get('id')!; // Convertir l'ID en nombre
    this.avisService.getAvisById(this.avisId).subscribe((avis: Avis) => {
      this.avisForm.patchValue(avis); // Patch les valeurs de l'avis récupéré dans le formulaire
    });
  }

  onSubmit() {
    if (this.avisForm.valid) {
      const formData = this.avisForm.value;
      this.avisService.updateAvis(this.avisId, formData).subscribe(
        (updatedAvis: Avis) => {
          console.log('Avis modifié avec succès :', updatedAvis);
          this.router.navigate(['/listAvis']);
        },
        (error) => {
          console.error('Erreur lors de la modification de l\'avis', error);
        }
      );
    }
  }
}
