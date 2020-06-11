# Assignment 2: Job Application Tracker

This project focus on creating front-end of a web application for Job Application Tracker.
There are four main pages which are listed below:
1. Landing Page
2. Login Page
3. Signup Page
4. Job Search Page

We choose Angular as our framework because it provides MVC framework which make it is easier to maintain when working as group project.

I choose to use Bootstrap because it provides robust component such as Navbar. It also has grid system which make it easier to customize the elements in different screen sizes (responsiveness).

Front-end design is based on usability of web application:

* *Navigation*: Provide top navigation bar for users to navigate web application easily.
* *Familiarity & Consistency*: Using similar layout (navigation bar always at the top of the web application) and applying same color scheme for entire web application.
* *Error Prevention & Feedback*: Using form validation to validate user input in login and signup page. Tell user if error occurs such as email format, and password length.
* *Flexibility and Efficiency*: The current front-end is designed for laptop and mobile (no tablet). For mobile, it tested with Android, but not iPhone. The web application is compatible with Google Chrome, Firefox, and Microsoft Edge.

*Color Scheme*

From [1](https://graf1x.com/color-psychology-emotion-meaning-poster/), yellow conveys the enthusiasm which also associated with success and confidence. Therefore, I choose yellow to be a bright accent color with neutral palette.

![Color Scheme](src/assets/images/color-scheme.png)

*Typographic*

I choose Bootstrap default font family because it is Sans Serif which is easier to read for web application.

* *Date Created*: 10 June 2020
* *Last Modification Date*: 11 June 2020

## Authors

* [Jan Chayopathum](nw814986@dal.ca) - *Front-end Developer*

## Deployment

* *GitHub Repository Link*: https://github.com/JanNawa/JobApplicationTracker
* *GitLab Repository Link*: https://git.cs.dal.ca/nawaphan/a2_chayopathum_jan 
(Noted: The name of repository is a2_lastName_firstName because all the assignments have this format.)

Noted that the code in GitHub Repository and GitLab Repository are the same. From the requirement of the assignment, the code need to be on GitLab Repository.

However, Heroku can connected to GitHub and do the automatic deployment. Therefore, the code is also saved to GitHub for simplicity of Heroku deployment.

The project is deployed on Heroku which connected to GitHub repository.

The link for remote access:
* [Landing Page](https://job-application-tracker-a2.herokuapp.com/): Include the tag line that communicate the purpose of web application to the user. The image on landing page may be provided later at upcoming phrase of the project. The purpose of current version is to show the usability and design principle with minimal element.
* [Login Page](https://job-application-tracker-a2.herokuapp.com/login): Provide form validation included email validation. The authorization needs to be connected to back-end. Therefore, it is not implemented in this phrase.
* [Signup Page](https://job-application-tracker-a2.herokuapp.com/signup): Provide form validation included email validation, name validation, and password validation. After all the requirements are met, there will be alert on verifying email.
	* *Email*: Format of email, see "Validation Service" section.
	* *Name*: Minimum characters are 4. Maximum characters are 30. Set number of characters to limit user input.
	* *Password*: Minimum Length are 15 characters because the longer password increases the password combinations which make it's harder to crack.
* [Job Search Page](https://job-application-tracker-a2.herokuapp.com/job-search;keyword=sss;location=;jobkey=12345111): Search for job by keyword (mandatory) and location (optional). It shows job detail related to selected job.
* [Job Detail Page](https://job-application-tracker-a2.herokuapp.com/job-detail;jobkey=12345111): Design for small screen only. The page can only be accessed by clicking on the "Show Job Detail" button on "Job Search" page in small screen.

Noted: 	
* "Site Under Construction" pages link to the page that should exist, but not yet created.
* "Page Not Found" pages link to other pages that not exist on web application.
* The design for "Job Search Page" on large screen and small screen are different. "Job Search Page" on small screen has color on card to help user navigate. If user wants to see detail, user has to click on "Show Job Detail" and it will navigate to new screen which is "Job Detail Page." On the other hand, "Job Search Page" on large screen has no "Show Job Detail" button. The user can navigate by clicking on the card to show the detail in the same screen.

## Project Structure

### Component

I choose to separate component such as navigation bar and search bar to be individual component. The purpose is to reduce redundancy and increase reusability in the framework.

There are currently two types of navigation bar:
* *nav-auth*: This is a navigation bar for authorized user. Current deployment for "nav-auth" is on "Job Search Page."
* *nav-guest*: This is a navigation bar for guest user. Current deployment for "nav-guest" is on "Landing Page."

The purpose is to demonstrate look and feel of the web application with the navigation bar for different user.

I choose to use HTML5 semantic tag as a wrapper and use division tag with Bootstrap's grid system inside for custom design. I decide to use HTML5 semantic tag wrap division tag instead of using everything with HTML5 semantic tag because the more it appears, the less meaning it will be. For example, it is better to have one <main> instead of many <main> in the page to make it easier to focus on the scope of the elements.
Moreover, some element uses Angular Material which have its own tag. In this case, I don't use HTML5 semantic tag.

### Services

Currently, there are two services which are:
* *Job Service*: Current data is modified from JSON example from [indeed API](https://opensource.indeedeng.io/api-documentation/docs/job-search/). JSON example provides one example of data in JSON format. The current data in web application are modified and duplicated to eight datasets in JSON format. The purpose is to test look and feel of elements that resemble the real data via using dummy data.

Some of the content comes from [Lorem Ipsum](https://www.lipsum.com/) to show the data that have a lot of text. It uses to provide job detail which normally have more content than other part of the content.

* *Validation Service*: Customize validation of data that are not provided in Angular. 
	* *Email*: Angular validate email by the existing of "@" which is not enough to validate actual email. For example, "abc@xyz" would be a valid email in Angular framework. Therefore, I customize the email validation that require domain name with "." For example, "abc@xyz" is invalid, but "abc@xyz.ca" is valid.
	* *Password*: Check password mismatch.

## Built With

* [Angular](https://angular.io/) - Web framework used
* [Bootstrap](https://getbootstrap.com/) - CSS framework used

## Sources Used

### nav-auth.component.html

*Lines 5 - 45*

```
      <nav class="navbar navbar-dark navbar-expand-lg bg-dark-blue">
        <aside class="col-1">
          <!-- <a class="navbar-brand" href="#"> -->
          <img class="mg-nav-logo" src="../assets/images/job-tracker-logo.png" alt="Job Tracker">
          <!-- </a> -->
        </aside>
  
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#mainNavbarSupportedContent"
          aria-controls="mainNavbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon">
          </span>
        </button>
  
        <div class="col-10 collapse navbar-collapse" id="mainNavbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link txt-white disabled" routerLink="/dashboard">Dashboard</a>
            </li>
            <li class="nav-item active">
              <a class="nav-link txt-white" routerLink="/job-search">Job Search<span
                  class="sr-only txt-bold">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link txt-white disabled" routerLink="/activities">Activities</a>
            </li>
            <li class="nav-item">
              <a class="nav-link txt-white disabled" routerLink="/contacts">Contacts</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle txt-dark-blue pointer" id="navbarDropdown" data-toggle="dropdown"
                aria-haspopup="true" aria-expanded="false">
                User Account
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" routerLink="/user-profile">User Profile</a>
                  <a class="dropdown-item" routerLink="">Log Out</a>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </nav>
```

The code above was created by adapting the code in [Navbar Bootstrap](https://getbootstrap.com/docs/4.0/components/navbar/) as shown below: 

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Action</a>
          <a class="dropdown-item" href="#">Another action</a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
    <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
```

* The code in [Navbar Bootstrap](https://getbootstrap.com/docs/4.0/components/navbar/) was implemented by Bootstrap documentation to demonstrate the navbar usage.
* [Navbar Bootstrap](https://getbootstrap.com/docs/4.0/components/navbar/)'s Code was used because it provides easy-to-navigate navigation bar for web application.
* [Navbar Bootstrap](https://getbootstrap.com/docs/4.0/components/navbar/)'s Code was modified by adding and adjusting content that related to navigation bar for web application.

### validation.service.ts

*Lines 14 - 46*

```
  emailValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } => {
      if (!control.value) {
        return null;
      }
      const regex = new RegExp('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$');
      const validValue = regex.test(control.value);
      return validValue ? null : { invalidEmail: true };
    };
  }

  matchPassword(password: string, confirmPassword: string) {
    return (formGroup: FormGroup) => {
      const passwordControl = formGroup.controls[password];
      const confirmPasswordControl = formGroup.controls[confirmPassword];

      if (!passwordControl || !confirmPasswordControl) {
        return null;
      }

      if (confirmPasswordControl.errors && !confirmPasswordControl.errors.passwordMismatch) {
        return null;
      }

      if (passwordControl.value !== confirmPasswordControl.value) {
        // password mismatch
        confirmPasswordControl.setErrors({ passwordMismatch: true });
      } else {
        // password match
        confirmPasswordControl.setErrors(null);
      }
    }
  }

```

The code above was created by using the code in [Jason Watmore's Blog](https://jasonwatmore.com/post/2020/04/19/angular-9-reactive-forms-validation-example) as shown below: 

```
// custom validator to check that two fields match
export function MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];
        const matchingControl = formGroup.controls[matchingControlName];

        if (matchingControl.errors && !matchingControl.errors.mustMatch) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
        } else {
            matchingControl.setErrors(null);
        }
    }
}

```
* The code in [Jason Watmore's Blog](https://jasonwatmore.com/post/2020/04/19/angular-9-reactive-forms-validation-example) was implemented by validating the password in registration form.
* [Jason Watmore's Blog](https://jasonwatmore.com/post/2020/04/19/angular-9-reactive-forms-validation-example)'s Code was used because it needs to validate the password match in signup page and validate email in signup and login page.
* [Jason Watmore's Blog](https://jasonwatmore.com/post/2020/04/19/angular-9-reactive-forms-validation-example)'s Code was modified by checking the pattern of email and checking the password whether it is matched.

## Acknowledgments

[1](https://graf1x.com/color-psychology-emotion-meaning-poster/) Graf1x, "Color Meaning and Psychology," Graf1x, [Online]. Available: https://graf1x.com/color-psychology-emotion-meaning-poster/. [Accessed 10 June 2020].

[2](https://opensource.indeedeng.io/api-documentation/docs/job-search/) Indeed, "Job Search API," Indeed, [Online]. Available: https://opensource.indeedeng.io/api-documentation/docs/job-search/. [Accessed 10 June 2020].

[3](https://www.lipsum.com/) Lorem Ipsum, "Lorem Ipsum," Lorem Ipsum, [Online]. Available: https://www.lipsum.com/. [Accessed 10 June 2020].

[4](https://getbootstrap.com/docs/4.0/components/navbar/) Bootstrap, "Navbar," Bootstrap, [Online]. Available: https://getbootstrap.com/docs/4.0/components/navbar/. [Accessed 10 June 2020].

[5](https://jasonwatmore.com/post/2020/04/19/angular-9-reactive-forms-validation-example) J. Watmore, "Angular 9 - Reactive Forms Validation Example," 19 April 2020. [Online]. Available: https://jasonwatmore.com/post/2020/04/19/angular-9-reactive-forms-validation-example. [Accessed 10 June 2020].