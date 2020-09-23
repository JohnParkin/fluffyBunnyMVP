import { Component } from '@angular/core';

@Component({
  selector: 'app-attendees-component',
  templateUrl: './attendees.component.html',
  styleUrls: ['./attendees.component.css']
})
export class AttendeesComponent {

  public attendees = [
    {
      bookingref: "23",
      firstname: "Tanya",
      surname: "Lee",
      guardianfirstname: "Steve",
      guardiansurname: "Lee",
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
      contactTel: "07973820515",
      status: "Expected",
      droppedoff: "",
      pickedup: ""
    }
  ]
}                     
