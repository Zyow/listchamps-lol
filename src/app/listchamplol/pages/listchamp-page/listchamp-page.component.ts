import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Listchamp } from '../../model/listchamp';
import { ListchampService } from '../../service/listchamp.service';

@Component({
  selector: 'app-listchamp-page',
  templateUrl: './listchamp-page.component.html',
  styleUrls: ['./listchamp-page.component.css']
})
export class ListchampPageComponent implements OnInit {

  listchamps: Array<Listchamp> = [];

  constructor(private listchampService: ListchampService) { }

  //Init de la page
  ngOnInit(): void {
    this.listchampService.getListChamp();
    this.getListchamps();
  }

  //Récupérer la liste des champions
  getListchamps = (): void => {
    this.listchampService.listchampstream.subscribe( data => {
      this.listchamps = data
    },
      err => console.error(err)
    )
  }

  //Ajouter un nouveau champion
  newChampPrt = (champname:string): void => {
    let obj = { name: champname, active: true};

    this.listchampService.addChamp(obj).subscribe(data => {
      this.listchampService.getListChamp();
    },
      err => console.error(err)
    )
  }


  //Supprimer un champion
  delChampPrt = (data:number): void => {
    this.listchampService.deleteChamp(data).subscribe(data =>{
      this.listchampService.getListChamp()
    },
      err => console.error(err)
    )
  }

}
