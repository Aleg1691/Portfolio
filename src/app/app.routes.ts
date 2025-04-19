import { Routes } from '@angular/router';
import { ImprintComponent } from './imprint/imprint.component';
import { MaincontentComponent } from './main/maincontent/maincontent.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MaincontentComponent },
    { path: 'imprint', component: ImprintComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
];
