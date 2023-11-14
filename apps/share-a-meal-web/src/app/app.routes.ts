import { Route } from '@angular/router';
import { AboutComponent, DashboardComponent } from '@avans-nx-workshop/share-a-meal/features';


export const appRoutes: Route[] = [
    {
        path:'', 
        pathMatch:'full',
        redirectTo:'dashboard',
    },
    {
        path:'dashboard', 
        pathMatch:'full',
        component:DashboardComponent
    },
    //   {
    //     path:'features',
    //     loadChildren:()=> import ('@avans-nx-workshop/share-a-meal/features').then((esModule)=> esModule.FeaturesModule)

    // },
    {
        path:'about', 
        pathMatch:'full',
        component:AboutComponent
    },
    {
        path:'users', 
        loadChildren:()=> import ('@avans-nx-workshop/share-a-meal/user').then((esModule)=> esModule.UserModule)
    },
    
];
