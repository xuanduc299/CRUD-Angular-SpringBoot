import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Personal } from 'src/app/Model/Personal';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  personal: Personal[] | undefined;
  constructor(private service: ServiceService, private router: Router) { }

  ngOnInit() {
    this.getPersonal();
  }

  private getPersonal() {
    this.service.getPersonal().subscribe(data => {
      this.personal = data;
    });
  }

  updatePersonal(personal: Personal) {
    localStorage.setItem("id", personal.id.toString());
    this.router.navigate(["edit"]);
  }


  deletePersonal(personal: Personal) {
    this.service.deletePersonal(personal).subscribe(data => {
      this.personal = this.personal!.filter(p => p !== personal);
      alert("delete successfull")
    })
  }

  // deletePersonal(id: number) {
  //   this.service.deletePersonal(id).subscribe(data => {
  //     console.log(data);
  //     this.getPersonal();
  //   })
  // }





}
