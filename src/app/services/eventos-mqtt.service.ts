import { Injectable } from '@angular/core';
import { IMqttMessage, MqttService } from 'ngx-mqtt';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosMqttService {

  private endpoint: string;

  constructor(private _mqttService: MqttService) { 
    this.endpoint = '/eventos';
  }

  topico(deviceId: string): Observable<IMqttMessage> {
    //let topicName = `/${this.endpoint}/${deviceId}`;     
    let topicName = `${this.endpoint}`;     
    return this._mqttService.observe(topicName);
  }
}
