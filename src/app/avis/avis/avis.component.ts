import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Avis } from 'src/app/model/avis';
import { AvisService } from '../avis.service';

@Component({
  selector: 'app-avis',
  templateUrl: './avis.component.html',
  styleUrls: ['./avis.component.css']
})
export class AvisComponent implements OnInit {

  @Output() modifierAvisClicked: EventEmitter<Avis> = new EventEmitter<Avis>();
  listAvis!: Avis[];

  constructor(private avisService: AvisService) {}

  ngOnInit() {
    this.getAvis();
  }

  getAvis() {
    this.avisService.getAvis().subscribe(data => {
      this.listAvis = data;
    });
  }

  supprimer(id: number) {
    if (window.confirm('Êtes-vous sûr de vouloir supprimer cet avis ?')) {
      this.avisService.supprimer(id).subscribe(() => {
        this.getAvis(); // Mettre à jour la liste après suppression
      });
    }
  }

  modifierAvis(avis: Avis) {
    this.modifierAvisClicked.emit(avis);
  }
}
