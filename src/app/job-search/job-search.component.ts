import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras, ParamMap, Params, Data } from '@angular/router'
import { JobService } from '../services/job.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent implements OnInit, OnDestroy{

  subscription: Subscription;

  clickedCard: boolean[];
  searchJobs$: any;
  selectedJob: any;
  jobsLength: number;
  clickedIndex: number = 0;

  // splicedJob: any[];
  // pageSize: number = 5;

  constructor(private _jobService: JobService, private _router: Router, private _activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.subscription = this._jobService.getJobs().subscribe(jobs => {
      this.searchJobs$ = jobs.results;
    });

    this.jobsLength = this.searchJobs$.length;
    // this.splicedJob = this.searchJobs$.slice(((0 + 1) - 1) * this.pageSize).slice(0, this.pageSize);

    this.clickedCard = new Array(this.searchJobs$.length);

    var queryParamJobKey = this._activatedRoute.snapshot.paramMap.get('jobkey');
    var queryJobKey = queryParamJobKey == null ? null : +queryParamJobKey;

    // showing job detail
    if(this.searchJobs$.length > 0){
      if(queryJobKey != null){ // showing job in jobkey on URL
        let count = 0;
        for (let job of this.searchJobs$){
          if (job.jobkey == +queryJobKey){
            this.onClickCard(count);
            this.showDetail(job);
            break;
          }
          count = count + 1;
        }
      } else { // showing first job in the list
        this.onClickCard(this.clickedIndex);
        this.showDetail(this.searchJobs$[this.clickedIndex]);
      }
    }
  }

  onClickCard(index){
    this.resetCard();
    // set clicked card background color
    this.clickedCard[index] = !this.clickedCard[index];
    this.clickedIndex = index;
  }

  resetCard(){
    // reset all card to be unclick
    for(var i = 0; i<this.clickedCard.length; i++) { 
      this.clickedCard[i] = false;
    }
  }

  getSearchJobsLength(){
    if (this.jobsLength == 0){
      return "No Job Found.";
    } else if (this.jobsLength == 1){
      return this.jobsLength + " Job Found";
    } else {
      return this.jobsLength + " Jobs Found";
    }
  }

  // pageChangeEvent(event) {
  //   const offset = ((event.pageIndex + 1) - 1) * event.pageSize;
  //   this.splicedJob = this.searchJobs$.slice(offset).slice(0, event.pageSize);
  //   // click the first card when change page
  //   this.onClickCard(0);
  //   this.showDetail(this.searchJobs$[offset]);
  // }

  showDetail(job){
    this.selectedJob = job;

    var queryParamKeyword = this._activatedRoute.snapshot.paramMap.get('keyword');
    var queryParamLocation = this._activatedRoute.snapshot.paramMap.get('location');

    var queryKeyword = queryParamKeyword == null ? '' : queryParamKeyword;
    var queryLocation = queryParamLocation == null ? '' : queryParamLocation;


    this._router.navigate(['/job-search', { keyword: queryKeyword, location: queryLocation, jobkey: job.jobkey }]);

    // work but it is http://localhost:4200/job-search/12345
    // this._router.navigate(['job-search', job.jobkey]);
     
    // need to click search button, http://localhost:4200/job-search;keyword=ppp;location=, no job key
    // this._router.navigate(job.jobkey, { relativeTo: this._activatedRoute }); 

    // not working
    // this._router.navigate([job.jobkey]);
    // this._router.navigate([job.jobkey, { relativeTo: this._activatedRoute }]);
    // not work, http://localhost:4200/job-search;keyword=yy;location=/12345111/12345111 ---> page not found
    // this._router.navigate([job.jobkey], { relativeTo: this._activatedRoute }); 
  }

  goToJobDetail(selectedJobkey){
    this._router.navigate(['/job-detail', { jobkey: selectedJobkey }]);
  }

  saveToWishList(){
    alert("Save to Wish List");
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
