import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit {
  searchJobs: any[] = [
    {  
      jobtitle: "Java Developer",
      company:"XYZ Corp.,",
      city:"Austin",
      state:"TX",
      country:"US",
      formattedLocation:"Austin, TX",
      source:"Dice",
      date:"Mon, 02 Aug 2017 16:21:00 GMT",
      snippet:"looking for an object-oriented Java Developer... Java Servlets,HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable. Familiarity with Tomcat and the Java...",
      url:"https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
      expired:false,
      indeedApply:true,
      formattedLocationFull:"Austin, TX",
      formattedRelativeTime:"11 hours ago"
    },
    {  
      jobtitle: "Java Developer 2",
      company:"XYZ Corp., 2",
      city:"Austin",
      state:"TX",
      country:"US",
      formattedLocation:"Austin, TX",
      source:"Dice",
      date:"Mon, 02 Aug 2017 16:21:00 GMT",
      snippet:"looking for an object-oriented Java Developer... Java Servlets,HTML, JavaScript, AJAX, Struts, Struts2, JSF) desirable. Familiarity with Tomcat and the Java...",
      url:"https://www.indeed.com/viewjob?jk=12345&indpubnum=8343699265155203",
      expired:false,
      indeedApply:true,
      formattedLocationFull:"Austin, TX",
      formattedRelativeTime:"11 hours ago"
    }
  ];
  selectedJob : any = [];

  constructor() { }

  ngOnInit(): void {
  }

  showDetail(job){
    this.selectedJob = job;
  }

}
