import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgReduxModule, NgRedux, DevToolsExtension } from '@angular-redux/store';
import { IAppState, rootReducer, INITIAL_STATE } from './store';
import { createLogger } from 'redux-logger';

import { AppComponent } from './app.component';
import { ListsComponent } from './lists/lists.component';


@NgModule({
  declarations: [
    AppComponent,
    ListsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
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
