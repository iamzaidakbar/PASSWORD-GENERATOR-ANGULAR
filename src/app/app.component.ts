import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'password-generator';

  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;
  password = ''

  onChangeLength(value: string) {
    const parsedValue = parseInt(value);
    if (!isNaN(parsedValue)) {
      this.length = parsedValue;
    }
  }

  onChangeLetters() {
    this.includeLetters = !this.includeLetters
  }

  onChangeNumbers() {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeSymbols() {
    this.includeLetters = !this.includeSymbols
  }
  
  onButtonCLick() {
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const numbers = '0123456789'
    const symbols = '!@#$%^&*()'
    
    let wrapper = ''
     if(this.includeLetters){
        wrapper += letters
     }
     if(this.includeNumbers){
       wrapper += numbers
     }
     if(this.includeSymbols){
       wrapper += this.includeSymbols
     }

     let generatedNumbers = ''
    for(let i=0;i < this.length;i++){
       const randomNumbers = Math.floor(Math.random() * wrapper.length)
       generatedNumbers += wrapper[randomNumbers]
    }
    this.password = generatedNumbers
  }


}
