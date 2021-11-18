import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Listchamp } from '../../model/listchamp';

@Component({
  selector: 'app-display-listchamp',
  templateUrl: './display-listchamp.component.html',
  styleUrls: ['./display-listchamp.component.css']
})
export class DisplayListchampComponent implements OnInit {

  @Input() data: Listchamp[] = [];
  @Output() deleteChamp:EventEmitter<number> = new EventEmitter<number>();
  @Output() stateChamp:EventEmitter<Listchamp> = new EventEmitter<Listchamp>();

  constructor() { }

  ngOnInit(): void {
  }

  deletechld = (data:any) => {
    let convertData = Number(data);
    this.deleteChamp.emit(convertData);
  }

  changeStateChamp = (data:Listchamp) => {
    data.active == false ? data.active = true : data.active = false
    this.stateChamp.emit(data);
  }
}
