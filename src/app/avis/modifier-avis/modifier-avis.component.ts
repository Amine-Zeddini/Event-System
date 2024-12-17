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
    "Atelier de Développement Web",
    "Séminaire sur la Science des Données",
    "Conférence sur l'Intelligence Artificielle",
    "Formation en Marketing Digital"
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
