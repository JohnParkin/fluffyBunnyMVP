import { Component, ViewEncapsulation, ViewChild, ElementRef, OnInit, OnChanges} from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";
import Keyboard from "simple-keyboard";

@Component({
  selector: 'app-customer-component',
  encapsulation: ViewEncapsulation.None,
  templateUrl: './customer.component.html',
  styleUrls: [
    './customer.component.css']
})

export class CustomerComponent  {

  value = '';
  private action;
  private sub;

  private customerEmail = "";
  private Email = "";
  public customerRef = "";
  public customerCourse = "";
  public customerTel = "";

  public attendeeRef = "123";
  public attendeeCourse = "Wild Daze";
  public attendeeTel = "07973 820515";

  keyboard: Keyboard;

  constructor(private router: Router, private route: ActivatedRoute) { }

  //  ngAfterViewInit() {
  //  this.keyboard = new Keyboard({
  //    onChange: input => this.onChange(input),
  //    onKeyPress: button => this.onKeyPress(button)
  //  });
  //}

  onValueChange() {
    if (this.customerEmail.length > 6) {
      console.log(this.customerEmail);
      console.log(this.Email);
      console.log(this.attendees.some(e => e.email === this.customerEmail));
      //console.log(this.attendee.filter(e => e.email === this.customerEmail));
      if (this.attendees.some(e => e.email === this.customerEmail)) {
        alert("hewow: " + this.customerEmail);
      }
      else {
        console.log("not found");
      }
    }
  }

  //onChange = (input: string) => {
  //  this.value = input;
  //  console.log("Input changed", input);
  //}

  onInputFocus() {
    this.keyboard = new Keyboard({
      onChange: input => this.onChange(input),
      onKeyPress: button => this.onKeyPress(button)
    });
  }

  onDeChange() {
    alert("hewrow");
  }

  onKeyPress = (button: string) => {
    console.log("Button pressed", button);

    /**
     * If you want to handle the shift and caps lock buttons
     */
    if (button === "{shift}" || button === "{lock}") this.handleShift();
  }

  onInputChange = (event: any) => {
    alert("hewrwow");
    this.keyboard.setInput(event.target.value);
  }

  handleShift = () => {
    let currentLayout = this.keyboard.options.layoutName;
    let shiftToggle = currentLayout === "default" ? "shift" : "default";

    this.keyboard.setOptions({
      layoutName: shiftToggle
    });
  };

  private ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.action = params['act'];
    });
  }

  public startOver() {
    this.router.navigate(['']);
  }

  public powers = ['Really Smart', 'Super Flexible',
    'Super Hot', 'Weather Changer'];

  public courses = ['', 'Wild Days', 'Wild Daze', 'Daze Of Wild', 'Level-1', 'Level-2', 'Level-3'];

  public attendees = [
    {
      bookingref: "23",
      firstname: "Tanya",
      surname: "Lee",
      guardianfirstname: "Steve",
      guardiansurname: "Lee",
      email: "steve.lee@wokingham.gov.uk",
      contactTel: "07973820515",
      status: "Expected",
      droppedoff: "",
      pickedup: ""
    },
    {
      bookingref: "34",
      firstname: "Jack",
      surname: "Walling",
      guardianfirstname: "Jack",
      guardiansurname: "Sparrow",
      email: "jack.sparrow@wokingham.gov.uk",
      contactTel: "07973820515",
      status: "Checked - In",
      droppedoff: "",
      pickedup: ""
    },
    {
      bookingref: "45",
      firstname: "John",
      surname: "Parkin",
      guardianfirstname: "Jeff",
      guardiansurname: "Parkin",
      email: "jeff.parkin@wokingham.gov.uk",
      contactTel: "07973820515",
      status: "Running - Late",
      droppedoff: "",
      pickedup: ""
    },
    {
      bookingref: "56",
      firstname: "Anna",
      surname: "Able",
      guardianfirstname: "Adrian",
      guardiansurname: "Able",
      email: "adrian.able@wokingham.gov.uk",
      contactTel: "07973820515",
      status: "Not - Comming",
      droppedoff: "",
      pickedup: ""
    },
    {
      bookingref: "67",
      firstname: "Bannana",
      surname: "Bable",
      guardianfirstname: "Bert",
      guardiansurname: "Bable",
      contactTel: "07973820515",
      email: "bert.bable@wokingham.gov.uk",
      status: "Expected",
      droppedoff: "",
      pickedup: ""
    },
    {
      bookingref: "78",
      firstname: "Cora",
      surname: "Cable",
      guardianfirstname: "Colin",
      guardiansurname: "Cable",
      email: "colin.cable@wokingham.gov.uk",
      contactTel: "07973820515",
      status: "Expected",
      droppedoff: "",
      pickedup: ""
    },
    {
      bookingref: "89",
      firstname: "Dora",
      surname: "Dable",
      guardianfirstname: "Domoniq",
      guardiansurname: "Dable",
      email: "domoniq.dable@wokingham.gov.uk",
      contactTel: "07973820515",
      status: "Expected",
      droppedoff: "",
      pickedup: ""
    },
    {
      bookingref: "90",
      firstname: "Erica",
      surname: "Edible",
      guardianfirstname: "Eric",
      guardiansurname: "Edible",
      email: "eric.edible@wokingham.gov.uk",
      contactTel: "07973820515",
      status: "Expected",
      droppedoff: "",
      pickedup: ""
    },
    {
      bookingref: "01",
      firstname: "Fern",
      surname: "Ferrit",
      guardianfirstname: "Father",
      guardiansurname: "Ferrit",
      email: "father.ferrit@wokingham.gov.uk",
      contactTel: "07973820515",
      status: "Expected",
      droppedoff: "",
      pickedup: ""
    },
    {
      bookingref: "12",
      firstname: "Gertie",
      surname: "Gamble",
      guardianfirstname: "Gerald",
      guardiansurname: "Gamble",
      email: "gerald.gamble@wokingham.gov.uk",
      contactTel: "07973820515",
      status: "Expected",
      droppedoff: "",
      pickedup: ""
    }
  ];
}
