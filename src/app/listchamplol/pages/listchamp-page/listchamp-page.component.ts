import { Component, OnInit } from '@angular/core';
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

}
