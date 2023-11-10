import { Route } from '@angular/router';
import { AboutComponent } from '@avans-nx-workshop/share-a-meal/features';

export const appRoutes: Route[] = [
    {
        path:'about', 
        pathMatch:'full',
        component:AboutComponent
    }
    //  {
    //     path:'features',
    //     loadChildren:()=> import ('@avans-nx-workshop/share-a-meal/features').then((esModule)=> esModule.FeaturesModule)

    // }
];
