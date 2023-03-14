import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personal } from 'src/app/Model/Personal';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
  personal: Personal = new Personal();
  constructor(private router: Router, private service: ServiceService) { }
  ngOnInit(): void { this.edit(); }

  edit() {
    let id = Number(localStorage.getItem("id") || "");
    this.service.getPersonalId(id)
      .subscribe(data => {
        this.personal = data;
      })
  }

  onSubmit() {
    this.service.updatePersonal(this.personal).subscribe(data => {
      this.personal = data;
      alert("eidt successfulll");
      this.router.navigate(["list"]);
    })
  }
}
