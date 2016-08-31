import { NgModule }           from '@angular/core';
import { CommonModule }       from '@angular/common';
import { FormsModule }        from '@angular/forms';

import { ContactComponent }   from './contact.component';
import { ContactService }     from './contact.service';
import { AwesomePipe }        from './awesome.pipe';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  imports: [ CommonModule, FormsModule ],
  declarations: [ 
     HighlightDirective, AwesomePipe, ContactComponent
  ],
  providers: [ ContactService ]  
})
export class ContactModule { }
