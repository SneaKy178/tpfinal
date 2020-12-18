import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { jeuxVideos } from '../../models/jeuxVideos';
import { FormulaireService } from '../../services/formulaire.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

  id:number;
  jeuxVideos:jeuxVideos;
  updateJeuxVideosForm: FormGroup;

  constructor(private service : FormulaireService,private router: Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.service.getById(this.id).subscribe(resultat => {
      this.jeuxVideos = resultat;
    }, (error) => {
      console.log(error);
    })
    this.updateJeuxVideosForm  = new FormGroup ({
      name : new FormControl('',Validators.required),
      price : new FormControl('',Validators.required),
      type : new FormControl('',Validators.required),
      rating : new FormControl('',Validators.required),
  
    })

  }

public updateJeuxVideos() {
  this.service.put(this.id,this.updateJeuxVideosForm.value).subscribe(resultat => {
    this.router.navigateByUrl('crud')
  }, (error) => {
    console.log(error);
  })
}


}
