import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  file : File
  arrayBuffer : any
  filelist : any
  currentDate: number
  name: String;
  email : string;
  mobileNumber: string;
  password: string;

  constructor() { }

  ngOnInit(): void {
  }

incomingfile(event) 
  {
  this.file= event.target.files[0]; 
  }

 Upload() {
      let fileReader = new FileReader();
        fileReader.onload = (e) => {
            this.arrayBuffer = fileReader.result;
            var data = new Uint8Array(this.arrayBuffer);
            var arr = new Array();
            for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
            var bstr = arr.join("");
            var workbook = XLSX.read(bstr, {type:"binary"});
            var first_sheet_name = workbook.SheetNames[0];
            var worksheet = workbook.Sheets[first_sheet_name];
            console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
        }
        fileReader.readAsArrayBuffer(this.file);
}

//   addfile(event)     
//   {    
//   this.file= event.target.files[0];     
//   let fileReader = new FileReader();    
//   fileReader.readAsArrayBuffer(this.file);     
//   fileReader.onload = (e) => {    
//       this.arrayBuffer = fileReader.result;    
//       var data = new Uint8Array(this.arrayBuffer);    
//       var arr = new Array();    
//       for(var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);    
//       var bstr = arr.join("");    
//       var workbook = XLSX.read(bstr, {type:"binary"});    
//       var first_sheet_name = workbook.SheetNames[0];    
//       var worksheet = workbook.Sheets[first_sheet_name];    
//       console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));    
//         var arraylist = XLSX.utils.sheet_to_json(worksheet,{raw:true});     
//             this.filelist = [];    
//             console.log(this.filelist) 
// }
//   }
date(){
  this.currentDate = Date.now();
}
}
