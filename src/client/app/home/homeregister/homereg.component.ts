import {Component, OnInit, Input, OnChanges  } from '@angular/core';
import {FormGroup, FormArray, FormBuilder, Validators, ReactiveFormsModule, FormControl} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { CustomValidators } from 'ng2-validation';

//import  CustomValidators  from '../../forms/CustomValidators';
import { Register } from '../models/register';
import {RegisterService} from '../services/homeregister/register.service';
import { EmitterService } from '../services/emmiter/emitter.service';
declare var $:any;

@Component({
  moduleId: module.id,
  selector: 'home-homereg',
  templateUrl: './homereg.component.html',
  styleUrls: ['./homereg-component.css'],
})

export class HomeregComponent implements OnInit {
  homeregForm: FormGroup;
  // Local properties
  registers: Register[];
  submitted = Boolean;
  model = new Register(
    new Date(),
    '',
    '',
    ''
  );
  constructor(
    private formBuilder: FormBuilder,
    private regiterService: RegisterService
  ){}


  // Input properties
   @Input() listId: string;
  loadRegisters(){
    // Get all comments
    this.regiterService.getRegisters()
      .subscribe(
        registers => this.registers = registers, //Bind to view
        err => {
          // Log errors if any
          console.log(err);
        });
  }
  ngOnInit() {
    
   $(".validate").validationEngine();
   $('.onlynumber').validateNumbers();


    this.homeregForm = this.formBuilder.group({
      email: ['', [
      Validators.required, 
      CustomValidators.rangeLength([4, 50]),
      CustomValidators.email
        ]
      ],
      nit: ['', [
      Validators.required, 
      CustomValidators.rangeLength([4, 24]),
      CustomValidators.number
        ]
      ],
      terms: ['', Validators.required]

    });

    // Load registers
    this.loadRegisters()
  }

  submitForm(homeregForm:any):void{
   let valids = $("form.validate").validationEngine('validate');

    if(this.homeregForm.valid && valids){

    console.log(valids);

    // Variable to hold a reference of addComment/updateComment
    let registerOperation:Observable<Register[]>;
    // Create a new registros
    registerOperation = this.regiterService.addRegister(this.homeregForm.value)

    // Subscribe to observable
    registerOperation.subscribe(
      registers => {
        // Emit list event
        EmitterService.get(this.listId).emit(registers);
        // Empty model
        this.model = new Register(new Date(), '', '','');
      },
      err => {
        // Log errors if any
        console.log(err);
      });
      this.homeregForm.reset();
    }else{
      this.homeregForm.valid; 
      console.log('no valida');
      
    }


  }

}
