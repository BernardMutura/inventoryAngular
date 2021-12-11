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

  //Defining catogories array
  categories = [
    {"name": "Monitor"},
    {"name": "CPU"},
    {"name": "UPS"},
    {"name": "Laptop"},
    {"name": "Keyboard"},
    {"name": "Mouse"}
  ];

  //Defining tags array
  tags = [
    {"name": "HP"},
    {"name": "SAMSUNG"},
    {"name": "APPLE"},
    {"name": "COMPUTER"},
    {"name": "ACCESSORY"},
    {"name": "DELL"},
    {"name": "LENOVO"},
  ];

  //Creating a form group with individual form controls
  itemsForm = new FormGroup({
    "item-name": new FormControl('',[Validators.required]),
    "item-description": new FormControl('',[Validators.required]),
    "item-state": new FormControl('',[Validators.required]),
    "item-category": new FormControl('',[Validators.required]),
    "item-date": new FormControl('',[Validators.required]),
    "item-img": new FormControl(),
    "item-tag": new FormControl(),
  })

  //subscribing to the UserData Service
  constructor(private userData: UsersDataService) { }

  onSubmit(data: any) {

    //console testing to view submitted form array
    console.warn(data);

    //Adding the item to the endpoint
    this.userData.saveUser(data).subscribe((result)=>{
      console.warn(result)
    })    
  }

}
