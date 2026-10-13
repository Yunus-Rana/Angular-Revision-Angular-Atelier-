import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-databinding',
  styleUrl: './databinding.css',
  templateUrl: './databinding.html',
})
export class Databinding {
  productName: string = "Phone"
  productPrice: number = 50000
  maxCharacters: number = 9
  dynamicType = 'radio'

  show () {
    alert("Welcome")
  }

  dropchange () {
    alert("dropdown changed")
  }

}
