import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormulaireService } from '../services/formulaire.service'
import { jeuxVideos } from '../models/jeuxVideos'

@Component({
  selector: 'app-formulaire',
  templateUrl: './formulaire.component.html',
  styleUrls: ['./formulaire.component.css']
})
export class FormulaireComponent implements OnInit {

  jeuxVideos : jeuxVideos;
  valideMessage : string =  "";

  jeuxVideosForm = new FormGroup ({
    name : new FormControl('',Validators.required),
    price : new FormControl('',Validators.required),
    type : new FormControl('',Validators.required),
    rating : new FormControl('',Validators.required),

  })

 

  constructor(private service : FormulaireService,private router : Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.service.post(this.jeuxVideosForm.value).subscribe(data => {
      this.jeuxVideosForm.reset();
      this.router.navigateByUrl('/crud')
    })
  } 

}

