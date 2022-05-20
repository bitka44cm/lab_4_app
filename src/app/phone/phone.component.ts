import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'msg',
    template: '<h1>{{ message }}</h1>'
})
export class PhoneComponent implements OnInit {
    message = 'Hello, world ! =)';
    
    ngOnInit() {
    }
}