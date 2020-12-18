import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { jeuxVideos } from '../models/jeuxVideos';
import { GenericService } from './generic.service'

@Injectable({
  providedIn: 'root'
})
export class FormulaireService extends GenericService<jeuxVideos,number> {

  constructor(http : HttpClient) {
    super(http,"http://localhost:7010/data");
  }
}
