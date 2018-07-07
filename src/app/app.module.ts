import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

<<<<<<< HEAD
import { NgReduxModule, NgRedux } from '@angular-redux/store';
=======
import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { createLogger } from 'redux-logger';
>>>>>>> 977d5af... reducer 적용 및 component에서 사용하기

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';


@NgModule({
  declarations: [
    AppComponent,
    ListsComponent
  ],
  imports: [
    BrowserModule,
    NgReduxModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(ngRedux: NgRedux<IAppState>, devTools: DevToolsExtension) {
    ngRedux.configureStore(
      rootReducer,
      INITIAL_STATE,
      [createLogger()],
      devTools.isEnabled() ? [ devTools.enhancer() ] : []
    );
  }
}
