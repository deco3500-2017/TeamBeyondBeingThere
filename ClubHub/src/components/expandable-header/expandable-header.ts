import { Component,Input,ElementRef,Renderer } from '@angular/core';


/**
 * Generated class for the ExpandableHeaderComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'expandable-header',
  templateUrl: 'expandable-header.html'
})
export class ExpandableHeaderComponent {

  @Input('scrollArea') scrollArea:any;

  headerHeight:any;
  newHeaderHeight:any;
  constructor(public element:ElementRef,public renderer:Renderer) {
    console.log('Hello ExpandableHeaderComponent Component');
    this.headerHeight=150;

    this.renderer.setElementStyle(this.element.nativeElement,'height',this.headerHeight+'px');
  }

  ngOnInit(){
  	console.log("scrolled");

  	this.scrollArea.ionScroll.subscribe((ev)=>{
  		this.resizeHeader(ev);
  	});
  }


  resizeHeader(ev){
  	ev.domWrite(()=>{
  		console.log(ev.scrollTop);

  		this.newHeaderHeight=this.headerHeight-ev.scrollTop;
  		if(this.newHeaderHeight<0){
  			this.newHeaderHeight=0;
  		}else{

    this.renderer.setElementStyle(this.element.nativeElement,'height',this.newHeaderHeight+'px');
  		}
  	})
  }

}
