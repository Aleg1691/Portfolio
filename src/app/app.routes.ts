import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MaincontentComponent } from './main/maincontent/maincontent.component';

export const routes: Routes = [
    { path: '', component: MaincontentComponent },
    { path: 'imprint', component: ImprintComponent },
];
