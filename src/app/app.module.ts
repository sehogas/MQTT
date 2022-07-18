import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IMqttServiceOptions, MqttModule } from 'ngx-mqtt';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SuscriptorMqttComponent } from './components/suscriptor-mqtt/suscriptor-mqtt.component';
import { EventosMqttService } from './services/eventos-mqtt.service';

const MQTT_SERVICE_OPTIONS: IMqttServiceOptions = {
  hostname: environment.mqtt.server,
  port: environment.mqtt.port,
  protocol: (environment.mqtt.protocol === "wss") ? "wss" : "ws",
  path: '',
};

console.log(MQTT_SERVICE_OPTIONS);

@NgModule({
  declarations: [
    AppComponent,
    SuscriptorMqttComponent
  ],
  imports: [
    BrowserModule,
    MqttModule.forRoot(MQTT_SERVICE_OPTIONS),
    AppRoutingModule
  ],
  providers: [EventosMqttService],
  bootstrap: [AppComponent]
})
export class AppModule { }
