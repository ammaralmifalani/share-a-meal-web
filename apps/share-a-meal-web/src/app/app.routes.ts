import { Route } from '@angular/router';


export const appRoutes: Route[] = [
  
      {
        path:'features',
        loadChildren:()=> import ('@avans-nx-workshop/share-a-meal/features').then((esModule)=> esModule.FeaturesModule)

    },
    {
        path:'users', 
        loadChildren:()=> import ('@avans-nx-workshop/share-a-meal/user').then((esModule)=> esModule.UserModule)
    },
    
];
