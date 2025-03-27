import { Component,OnInit  } from '@angular/core';
import { CorretoraService } from './Service/corretora.service';
import { FormGroup, FormControl,Validators,FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'app-corretora';
  corretoras = [];

  

  constructor(private corretoraService:CorretoraService){}
  ngOnInit(){
  
   // this.corretoraService.localizarCorretoras().subscribe((data)=>{
    //  console.log(data);
     // this.corretoras = data;
      
   // })  
	}
}
