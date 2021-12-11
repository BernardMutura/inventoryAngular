import { Component } from '@angular/core';
import { UsersDataService } from '../users-data.service';

import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent {

  users: any;

  categories = [
    {"name": "Monitor"},
    {"name": "CPU"},
    {"name": "UPS"},
    {"name": "Laptop"},
    {"name": "Keyboard"},
    {"name": "Mouse"}
  ];

  tags = [
    {"name": "HP"},
    {"name": "SAMSUNG"},
    {"name": "APPLE"},
    {"name": "COMPUTER"},
    {"name": "ACCESSORY"},
    {"name": "DELL"},
    {"name": "LENOVO"},
  ];

  itemsForm = new FormGroup({
    "item-name": new FormControl('',[Validators.required]),
    "item-description": new FormControl('',[Validators.required]),
    "item-state": new FormControl('',[Validators.required]),
    "item-category": new FormControl('',[Validators.required]),
    "item-date": new FormControl('',[Validators.required]),
    "item-img": new FormControl(),
    "item-tag": new FormControl(),
  })

  constructor(private userData: UsersDataService) { }

  onSubmit(data: any) {
    console.warn(data);
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result)
    })    
  }

}
