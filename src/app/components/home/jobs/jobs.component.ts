import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'Evalusereve',
      Title: 'ITC Intern',
      Date: 'Feb 2024 – present',
      Description: [
        'ITC Intern at Evalueserve.Com Pvt Ltd.',
        'Skilled in Full-Stack development using NEXT Js and SSR. I am currently attending training bootcamp of .NET full-stack development at Evalueserve.',
        
      ]
    },
    {
      Tab: 'IBM',
      Title: 'Software Developer',
      Date: 'Jan 2023 - july 2023',
      Description: [
        'Dynamic Forms : The system is able to create forms and allows the user to control validation, input types, design without write code. ',
        'Implementing continuous improvements, working on frontend',
        'Functional programming in templates and plugins to add the necessary monitoring features.'
      ]
    },
    {
      Tab: 'Education',
      Title: 'Bachelor of Engineering',
      Date: '2019 — 2023',
      Description: [
        'I am currently persuing my Bachelor of Engineering from Chandigarh University in Computer Science and Engineering',
        'I have secured a CGPA of 8.4 till the 7th semester',
        'I have completed my higher secondary education from kksv with 87% marks and secondary with 94% marks'
      ]
    }
  ];
  active = 0
  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
