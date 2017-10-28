import { Component, HostBinding, ElementRef, OnInit } from '@angular/core';
// import { User } from '../../_models/index';
@Component({
    moduleId: module.id,
    selector: 'app-header-cmp',
    templateUrl: 'header.component.html'
})

export class HeaderComponent implements OnInit{
	 currentUser: any= {};
	private nativeElement: Node;
    private toggleButton : any = {};
    private sidebarVisible: boolean;

    constructor(private element : ElementRef) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.nativeElement = element.nativeElement;
        this.sidebarVisible = false;
    }
    ngOnInit(){
        var navbar : HTMLElement = this.element.nativeElement;
        this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    }
	sidebarToggle(){
        var toggleButton = this.toggleButton;
        var body = document.getElementsByTagName('body')[0];

        if(this.sidebarVisible == false){
            setTimeout(function(){
                toggleButton.classList.add('toggled');
            },500);
            body.classList.add('nav-open');
            this.sidebarVisible = true;
        } else {
            this.toggleButton.classList.remove('toggled');
            this.sidebarVisible = false;
            body.classList.remove('nav-open');
        }
    }
}
