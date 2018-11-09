import { Routes, RouterModule } from "@angular/router";
import { WelcomeComponent } from "./pages/welcome/welcome.component";
import {PageGenericTwoComponent} from "./pages/page-generic-two/page-generic-two.component";
import {PageGenericOneComponent} from "./pages/page-generic-one/page-generic-one.component";

const APP_ROUTES: Routes = [
  { path: '', component: WelcomeComponent },
  { path: 'sample/1', component: PageGenericOneComponent },
  { path: 'sample/2', component: PageGenericTwoComponent },
  ];

export const routing = RouterModule.forRoot( APP_ROUTES );
