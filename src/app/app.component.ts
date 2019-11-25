import { Component } from '@angular/core';
import {  dropdown } from 'src/app/models/data';
import { DataService } from './services/data.service';
import { UrlService } from './services/url.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'components';
  menuitem = {};
  availableFrom = new dropdown();
  images: any[];
  val1: number;
  data: any;
  cars: any[];
  responsiveOptions;
  date1: Date;
  files2: any[];
  cols: any[];
  constructor(private dataService: DataService,
    private url: UrlService) {
    this.images = [];
   
    this.images.push({source:'assets/images.jfif', thumbnail: 'assets/images.jfif', title:'Sopranos 4'});

    this.data = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'First Dataset',
              data: [65, 59, 80, 81, 56, 55, 40]
          },
          {
              label: 'Second Dataset',
              data: [28, 48, 40, 19, 86, 27, 90]
          }
      ]
  }

  this.responsiveOptions = [
    {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
    },
    {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
    },
    {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
    }
];

  }
  dropdownData = [
    {label: 'New York', code: 'NY'},
    {label: 'Rome', code: 'RM'},
    {label: 'London', code: 'LDN'},
    {label: 'Istanbul', code: 'IST'},
    {label: 'Paris', code: 'PRS'}
];
ngOnInit() {
  this.menuItemslist(); 
this.cars = [ 
      {"brand": "1", "year": 2012, "color": "Orange", "vin": "dsad231ff"},
      {"brand": "2", "year": 2011, "color": "Black", "vin": "gwregre345"},
      {"brand": "3", "year": 2005, "color": "Gray", "vin": "h354htr"},
      {"brand": "2", "year": 2003, "color": "Blue", "vin": "j6w54qgh"},
      {"brand": "3", "year": 1995, "color": "Orange", "vin": "hrtwy34"},
      {"brand": "4", "year": 2005, "color": "Black", "vin": "jejtyj"}
  ]
this.tableData();
this.cols = [
  { field: 'name', header: 'Name' },
  { field: 'size', header: 'Size' },
  { field: 'type', header: 'Type' }
];

}

selected(event) {
console.log(event)
}
  menuSelect(item){
    this.menuItemslist(); 
    this.menuitem[item] = true;
  }

  menuItemslist(){
    this.menuitem = {
      dropdown: false,
      accordion: false,
      lightBox: false,
      rating: false,
      slider: false,
      charts: false,
      carousel: false,
      calendar: false,
      treeTable: false
    }
  }

  tableData(){
this.dataService.getdataList(this.url.urlConfig().tableList).subscribe(res => {
  console.log(res);
  this.files2 = res['data'];
});
  }
}
