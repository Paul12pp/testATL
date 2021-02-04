import { Routes } from '@angular/router';
// import { HomeComponent } from './components/home/home.component';
// import { SearchComponent } from './components/search/search.component';
// import { ArtistaComponent } from './components/artista/artista.component';
import { AppComponent } from './app.component';

export const ROUTES: Routes = [
    {path: 'home', component: AppComponent},
    // {path: 'change', component: PasswordComponent},
    // {path: 'artist/:id', component: ArtistaComponent},
    {path: '', pathMatch : 'full', redirectTo : 'home' },
    // {path: '**', pathMatch : 'full', redirectTo : 'home' }
];