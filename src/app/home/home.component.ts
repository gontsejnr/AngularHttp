import { Component, OnInit } from '@angular/core';
import { KeyProviderService } from '../key-provider.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  list;

  constructor(private keyService: KeyProviderService) {
    this.keyService.getData().subscribe((data) =>{
      this.list = data
    })
  }

  ngOnInit() {
  }

}
