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

  constructor() { }

  ngOnInit(): void {
  }

  deletechld = (data:any) => {
    let convertData = Number(data);
    this.deleteChamp.emit(convertData);
  }
}
