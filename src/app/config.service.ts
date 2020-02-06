import { Injectable } from '@angular/core';
import {configration} from './configration';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  config = configration;

  constructor() { }
  getConfig(){
   return this.config;
  }
}
