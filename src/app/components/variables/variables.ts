import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  imports: [DatePipe],
  selector: 'app-variables',
  styleUrl: './variables.css',
  templateUrl: './variables.html',
})
export class Variables {

  studentName: string = "Younus Saleem";
  studentAge: number = 21;
  isStudentActive: boolean = true;
  currentDate: Date = new Date();
  cityList: string[] = ["Lahore", "Karachi", "Peshawar", "Islamabad"];
  rollList: number[] = [1, 2, 3 , 4 , 5 , 6 , 7]
  student = {
    grade: "A+",
    CGPA: 3.66,
    city: "Lahore",
    bloodgroup: "O+",
    education: "Bachelors of Science in Computer Science"
  }
  studentList = [
    {
      grade: "A",
      CGPA: 3.71,
      city: "Lahore",
      bloodgroup: "N/A",
      education: "Bachelor of Science in Computer Science"
    },
    {
      grade: "A+",
      CGPA: 3.82,
      city: "Lahore",
      bloodgroup: "N/A",
      education: "Intermediate in Computer Science"
    },
    {
      grade: "A+",
      CGPA: 3.66,
      city: "Lahore",
      bloodgroup: "N/A",
      education: "Matriculation"
    }
  ];

  constructor(){
    // logging data...
  }


}
