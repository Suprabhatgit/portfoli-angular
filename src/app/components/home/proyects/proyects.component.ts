import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  Projects = [
    {
      imgs:[
        '../../../../assets/images/netflix/Screenshot (60).png',
        '../../../../assets/images/netflix/Screenshot (61).png',
        '../../../../assets/images/netflix/Screenshot (62).png',
        '../../../../assets/images/netflix/Screenshot (63).png',
        '../../../../assets/images/netflix/Screenshot (64).png',
        '../../../../assets/images/netflix/Screenshot (65).png',
        '../../../../assets/images/netflix/Screenshot (66).png'
      ],
      Title:'NETFLIX CLONE',
      Description:'Developed a fully functional clone of the popular streaming website NETFLIX using server-Side Rendering and Next.js with scrollable flex containers for movie lists. Users can choose different genres of movies. Responsive design with Tailwind CSS and TMDB API for movies data with server-side rendering so that the app stays updated 24/7 with latest movies for much better Customer Experience.',
      Technologies:['NEXT JS','TypeScript','Material UI', 'Stripe', 'Web-Hook'],
      ghLink:'https://github.com/Suprabhatgit/Richpanel',
      demoLink:'https://netflx-web.vercel.app/'
    },

    {
      imgs:[
        '../../../../assets/images/Amazon/Screenshot (67).png',
        '../../../../assets/images/Amazon/Screenshot (68).png',
        '../../../../assets/images/Amazon/Screenshot (69).png',
        '../../../../assets/images/Amazon/Screenshot (70).png'
      ],
      Title:'AMAZON WEB STORE',
      Description:'It is a fully functional E-COMMERCE web store with Stripe payment gateway for a seamless and secure payment experience, utilizing Full Stack Development with NEXT.JS using Server Side Rendering.  Log In/Log Out Authentication with NextAuth.JS and implemented a fully functional shopping cart with Basket Functionality using Redux',
      Technologies:['ReactJs','Tailwind','Firebase' , 'Redux'],
      ghLink:'https://github.com/Suprabhatgit/ECOMMERCE',
      demoLink:'https://amazon-eight-theta.vercel.app/'
    },
    {
      imgs:[
      
        '../../../../assets/images/recipe-book/screenshot (1).png',
        '../../../../assets/images/recipe-book/screenshot (2).png',
        '../../../../assets/images/recipe-book/screenshot (3).png',
      ],
      Title:'Recipe Book',
      Description:'Users can add new recipes to their collection and categorize them based on different types of cuisines or meal types. Each recipe includes a comprehensive list of ingredients required for the dish, making it convenient for users to shop for the necessary items.',
      Technologies:['Angular','Css','Angular-Material' , 'RxJS','firebase'],
      ghLink:'https://github.com/Suprabhatgit/ECOMMERCE',
      demoLink:'https://recipe-book-theta-blue.vercel.app'
    },
    {
      imgs:[
        '../../../../assets/images/design-show/1.png',
        '../../../../assets/images/design-show/2.png',
        '../../../../assets/images/design-show/4.PNG',
      ],
      Title:'Design Show',
      Description:'Design Show provides a user-friendly interface that enables artists and designers to upload high-quality images and multimedia content, along with detailed project descriptions. This allows viewers to explore the creative process and context behind each artwork.',
      Technologies:['Html','SCSS','JavaScript' , 'Jquery', 'animation-libraries'],
      ghLink:'https://github.com/Suprabhatgit/ECOMMERCE',
      demoLink:'https://design-show.netlify.app/'
    },

  
    {
      imgs:[
      
        '../../../../assets/images/typing-speed/1.png',
   
      ],
      Title:'Typing Speed Test',
      Description:` The application measures the number of words or characters typed per minute (words per minute - WPM or characters per minute - CPM) to determine the user's typing speed. In addition to speed, the test evaluates typing accuracy by calculating the number of errors made during the typing exercise.`,
      Technologies:['Html','CSS','JavaScript' , 'Jquery'],
      ghLink:'https://github.com/Suprabhatgit/ECOMMERCE',
      demoLink:'https://typingspeedgamee.netlify.app/'
    },

    


  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
