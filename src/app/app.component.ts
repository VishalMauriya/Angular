import { BuiltinTypeName } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Form Registration';
  list1:any=[];//"java","php","ionic","mysql"];
select_item_name:any="ionic";
add_item()
{
 // this.list1
}
//   i: number = 1;
// time:any=0;
//   back(temp:any){
//     this.i = temp;
//   }

  // name = "";
  // percent: number = 0;
  // state = "";
  // status = "";

  // getResult(temp:any,num:number, st:string, name:string){
  //   this.i = temp;
  //   this.name = name;
  //   this.percent = num;
  //   this.state = st.toLowerCase();

    // if(st == "Chandigarh"){
    //   if(num >= 90){
    //     this.status = "Application Accepted"
    //   }else if(num >= 80 && num < 90){
    //     this.status = "Application in Waiting List!"
    //   }else if(num < 80){
    //     this.status = "Application Rejected"
    //   }
    // }else if(st == "Other"){
    //   if(num >= 95){
    //     this.status = "Application Accepted"
    //   }else if(num >= 85 && num < 95){
    //     this.status = "Application in Waiting List!"
    //   }else if(num < 85){
    //     this.status = "Application Rejected"
    //   }
    // }else{
    //   this.status = "Invalid Detsils"
    // }


  //   if(this.state == "chandigarh" && num >=90){
  //     this.status = "Application Accepted"
  //   }else if(num >= 80 && num < 90 && this.state == "chandigarh"){
  //     this.status = "Application in Waiting List!"
  //   }else if(num < 80 && this.state == "chandigarh"){
  //     this.status = "Application Rejected"
  //   }else if(this.state != "chandigarh" && num >= 95){
  //     this.status = "Application Accepted"
  //   }else if(num >= 85 && num < 95 && this.state != "chandigarh"){
  //     this.status = "Application in Waiting List!"
  //   }else if(num < 85 && this.state != "chandigarh"){
  //     this.status = "Application Rejected"
  //   }else{
  //     this.status = "Invalid Detsils"
  // }
  // }

  temp:number = 1;
  name = "";
  phNum:number = 0;
  gender = "";
  city = "";
  date = new Date();
  i:number=0;
constructor()
{
  this.i=100;
  setInterval(()=>{this.f1()},500);
}
f1()
{
  this.i++;
}
  submit(temp:any){
   {
    this.temp=temp;
  }
}

hour:number = 0;
min:number = 0;
sec:number = 0;
timeformat = "AM";
value = "Start Clock";
change: number = 1;

start(temp:any){
  this.change = temp;
  this.abc = setInterval(() => {this.add()}, 500);
}

add(){
  this.sec++; 
  if(this.hour < 12){
    this.timeformat = "AM"
  }

  if(this.hour == 24){
    this.hour = 0;
    this.min = 0;
    this.sec = 0;
    this.timeformat = "AM"
  }

  if(this.sec == 60){
    this.min++;
    if(this.min == 60){
      this.hour++;
      if(this.hour >= 12){
        this.timeformat = "PM";
      }
      this.min = 0;
    }
    this.sec = 0;
  }
}

abc:any;
stop(temp:any){
  this.change = temp;
  clearInterval(this.abc);
}

lh:number = 0;
lm:number = 0;
ls:number = 0;

str:string = "";

lap(){
  this.lh = this.hour;
  this.lm = this.min;
  this.ls = this.sec;

  this.str += '\n'+this.hour+":"+this.min+":"+this.sec+'\n';
}
img_path: any = "";
image_no:number=0;



timePic(){
  setInterval(() => {this.secIncrement()}, 500);
}

secIncrement(){
  this.sec++;
  if(this.sec == 5){
    if(this.image_no<5)
      this.image_no++;
    else
      this.image_no=1;

    this.sec = 0;
  }
  this.img_path ="assets/pic"+this.image_no+".jpeg";
}

newpic(caseno:any)
{
console.log("caseno="+caseno);


if(caseno==1)
{
  if(this.image_no<5)
    this.image_no++;
    else
    this.image_no=1;

}
else
{
  if(this.image_no>1)
  this.image_no--;
  else
  this.image_no=5;

}
this.img_path ="assets/pic"+this.image_no+".jpeg";
console.log(this.image_no +"\n"+this.img_path);
}




}
