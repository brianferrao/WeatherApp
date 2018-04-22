import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExtendedComponent } from './extended/extended.component';

export const AppRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'extended', component: ExtendedComponent},
    {path: '**', redirectTo: '/'}
];
