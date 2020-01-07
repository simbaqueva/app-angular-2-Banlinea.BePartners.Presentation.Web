import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { GithubRoutingModule } from './github-routing.module';
import { GithubService } from './shared/github.service';


import { RepoBrowserComponent } from './repo-browser/repo-browser.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoDetailComponent } from './repo-detail/repo-detail.component';

/**
 * Do not specify providers for modules that might be imported by a lazy loaded module.
 */

@NgModule({
  imports: [CommonModule, RouterModule,GithubRoutingModule],
  declarations: [
    RepoBrowserComponent,
    RepoListComponent,
    RepoDetailComponent
  ],
  providers: [
    GithubService
  ],
  exports: [RepoBrowserComponent, RepoListComponent, RepoDetailComponent, CommonModule, FormsModule, RouterModule]
})
export class GithubModule {

}
