import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-champ',
  templateUrl: './add-champ.component.html',
  styleUrls: ['./add-champ.component.css']
})
export class AddChampComponent implements OnInit {

  @Output() newChamp: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  addChamp = (data:string): void => {
    this.newChamp.emit(data);
  }

}
