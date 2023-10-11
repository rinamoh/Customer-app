import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';
@NgModule({
    declarations: [ CapitalizePipe ],//means it's only available in the shared module area
    exports: [ CapitalizePipe ] //makes it available for other modules to import and use
})
export class SharedModule { }