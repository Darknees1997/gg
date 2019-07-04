import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'pagina2', loadChildren: './pagina2/pagina2.module#Pagina2PageModule' },
  { path: 'img1', loadChildren: './img1/img1.module#Img1PageModule' },
  { path: 'img2', loadChildren: './img2/img2.module#Img2PageModule' },
  { path: 'img3', loadChildren: './img3/img3.module#Img3PageModule' },
  { path: 'img4', loadChildren: './img4/img4.module#Img4PageModule' },
  { path: 'img5', loadChildren: './img5/img5.module#Img5PageModule' },
  { path: 'page1', loadChildren: './page1/page1.module#Page1PageModule' },
  { path: 'page2', loadChildren: './page2/page2.module#Page2PageModule' },
  { path: 'page3', loadChildren: './page3/page3.module#Page3PageModule' },
  { path: 'page4', loadChildren: './page4/page4.module#Page4PageModule' },
  { path: 'page5', loadChildren: './page5/page5.module#Page5PageModule' },
  { path: 'qsomos', loadChildren: './qsomos/qsomos.module#QsomosPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
