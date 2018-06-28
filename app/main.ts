import { platformNativeScriptDynamic } from 'nativescript-angular/platform';
import { AppModule } from './app.module';
import {enableProdMode} from '@angular/core';

enableProdMode();
platformNativeScriptDynamic({ createFrameOnBootstrap: true }).bootstrapModule(AppModule);
