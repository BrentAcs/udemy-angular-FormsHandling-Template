import { Component, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  @ViewChild("f") signupForm: NgForm;
  defaultQuestion = "pet";
  answer = "";
  genders = ['male', 'female'];

  suggestUserName() {
    const suggestedName = "Superuser";

    // example setting every value on the form, not always the best approach.
    // this.signupForm.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: "",
    //   },
    //   secret: "teacher",
    //   questionAnswer: "",
    //   gender: "female",
    // });

    this.signupForm.form.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }

  // onSubmit(form: HTMLFormElement) {
  //   console.log(form);
  // }

  onSubmit() {
    console.log(this.signupForm);
  }
}
