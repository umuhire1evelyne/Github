// import { Component, OnInit } from '@angular/core';

// @Component({
//   selector: 'app-github',
//   templateUrl: './github.component.html',
//   styleUrls: ['./github.component.css']
// })
// export class GithubComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }

import { Component, } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'github',
    templateUrl: 'github.component.html',
    providers:[GithubService]
})
export class GithubComponent { 
    searchName: 'zecollokaris'
    user:any;

    repos:any;

    username:string;

    constructor(private _githubService:GithubService){
        console.log('Github Component Init... ENGINES READY TO SEARCH USER!!');
    }
    search(){
        this._githubService.updateUsername(this.username);

        this._githubService.getUser().subscribe(user => {
            // console.log(users);
            this.user = user;
        });

        this._githubService.getRepos().subscribe(repos => {
            this.repos = repos;
        });
    }


}
