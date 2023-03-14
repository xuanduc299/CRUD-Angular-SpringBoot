import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Personal } from 'src/app/Model/Personal';
import { ServiceService } from 'src/app/Service/service.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  personal: Personal = new Personal();
  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void { }

  savePersonal() {
    this.service.CreatePersonal(this.personal).subscribe(data => {
      console.log(data);
      this.goToPersonalList();
    },
      error => console.log(error));
  }


  goToPersonalList() {
    this.router.navigate(['/list']);
  }

  onSubmit() {
    console.log(this.personal);
    this.savePersonal();
  }

}
