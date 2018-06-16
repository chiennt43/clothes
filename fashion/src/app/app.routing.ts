import { HomeComponent } from './home/home.component';
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
export const APP_ROUTES: Routes = [
    {path:'',component:HomeComponent }
]

export const Routing:ModuleWithProviders = RouterModule.forRoot(APP_ROUTES)