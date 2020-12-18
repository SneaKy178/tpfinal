import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tutoriel',
  templateUrl: './tutoriel.component.html',
  styleUrls: ['./tutoriel.component.css']
})
export class TutorielComponent implements OnInit {

  idTutoriel: number;

  constructor(private route: ActivatedRoute, private routeur: Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(myMap => {
      this.idTutoriel = myMap.id;
      
    });
  }

}
