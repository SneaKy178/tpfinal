import { Component, OnInit } from '@angular/core';
import { jeuxVideos } from '../../models/jeuxVideos';
import { FormulaireService } from '../../services/formulaire.service';

@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  listJeuxVideos: Array<jeuxVideos>
  public headElements = ['id','name','price','type','rating','boutons'];


  constructor(private service : FormulaireService) { }

  ngOnInit(): void {
    this.getAllJeuxVideos();
  }

  getAllJeuxVideos():void {
    this.service.getAll().subscribe(res => {
      this.listJeuxVideos=res;
    },(error) => {
      console.log(error)
    }
  );
  }


public delete(id : number) {
  if ( window.confirm('Are you sure?')) {
    this.service.deleteById(id).subscribe(resultat => {
      this.listJeuxVideos = this.listJeuxVideos.filter(record => record.id !==id);
    }, (error) => {
      console.log(error);
 } )
  }
}


public delete2(id:number,i:any) {
  if ( window.confirm('Are you sure?' )) {
    this.service.deleteById(id).subscribe(res => {
      this.listJeuxVideos.splice(i, 1);
    }, (error) => {
      console.log(error);

    } )
  }
}

}
