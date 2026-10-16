import { NgClass, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { form } from '@angular/forms/signals';

@Component({
  imports: [NgClass, FormsModule, NgStyle],
  selector: 'app-directive-exp',
  styleUrl: './directive-exp.css',
  templateUrl: './directive-exp.html',
})
export class DirectiveExp {
  div1classname: string = '';

  ischeckactive = false
  num1 = ''
  inputcolorval = ''
  div4css: any = {

  }

  adddiv1classname(className: string) {
    this.div1classname = className
  }

  changetype(type: string) {
    if (type == 'circle') {
      this.div4css = {
        'background-color': 'red',
        height: '200px',
        width: '200px',
        'border-radius': '50%'

      }
    } else {
      this.div4css = {
        'background-color': 'red',
        height: '200px',
        width: '200px',


      }
    }
  }

}
