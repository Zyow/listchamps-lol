import { Component, Input, OnInit } from '@angular/core';
import { Listchamp } from '../../model/listchamp';

@Component({
  selector: 'app-display-listchamp',
  templateUrl: './display-listchamp.component.html',
  styleUrls: ['./display-listchamp.component.css']
})
export class DisplayListchampComponent implements OnInit {

  @Input() data: Listchamp[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
