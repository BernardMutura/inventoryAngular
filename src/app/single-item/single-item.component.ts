import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostService } from '../post.service';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(pdfMake as any).vfs=pdfFonts.pdfMake.vfs;


@Component({
  selector: 'app-single-item',
  templateUrl: './single-item.component.html',
  styleUrls: ['./single-item.component.css']
})


export class SingleItemComponent implements OnInit {

  
  post: any;

  date: any;



  //code to generate a pdf file
  generatePdf() {
    const documentDefinition: any = {
      content: [
        {
          text: 'ITEM NAME : ' + this.post['item-name'],
          style: 'header',
          alignment: 'center'
        },
        {
          text: 'Item Category : ' + this.post['item-category'],
          style: 'subheader',
          alignment: 'center'
        },
        {
          text: 'Item State : ' + this.post['item-state'],
          style: 'subheader',
          alignment: 'center',
          lineHeight: 10,
        },
        {
          text: '[Item Image(if it is hosted in the same origin)]',
          alignment: 'center',
          lineHeight: 10,
        },
        {
          text: 'Description',
          style: 'subheader',
          alignment: 'center',
          lineHeight: 2
        },
        {
          text: this.post['item-description'],
          alignment: 'center',
          lineHeight: 5
        },
        {
          text: 'Date of Purchase : ' + this.date,
          style: ['quote', 'small']
        }
      ],
      styles: {
        header: {
          fontSize: 18,
          bold: true
        },
        subheader: {
          fontSize: 12,
          bold: true
        }
      }
    };
    pdfMake.createPdf(documentDefinition).open();
  }


  //Acquire route parameters to get a single item
  constructor(private route: ActivatedRoute, private service: PostService) { }

  ngOnInit(){
      const routeParams = this.route.snapshot.paramMap;
      const itemIdFromRoute = Number(routeParams.get('itemId'));
      this.service.getDetails(itemIdFromRoute).subscribe(response => {
      this.post=response;

      //testing for response

      console.log(this.post);


      //convert timestamp to date

      this.date=new Date(this.post['item-date']);

    });
  }

}
