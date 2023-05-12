app.component("app", {
    template:'<ng-outlet></ng-outlet>',
    $routeConfig: [
        {path:'/login', 
        name: 'Login', 
        component: 'loginComp', 
        useAsDefault: true},
        {path: '/dashboard', 
        name: 'Dashboard', 
        component: 'dashboard'},
        {path: '/details',
        name: 'Detail',
        component: 'detailComp'}
      ]
})