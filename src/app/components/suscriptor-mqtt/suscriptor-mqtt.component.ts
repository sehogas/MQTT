import { Component, OnInit } from '@angular/core';
import { IMqttMessage } from 'ngx-mqtt';
import { Subscription } from 'rxjs';
import { EventosMqttService } from 'src/app/services/eventos-mqtt.service';

@Component({
  selector: 'app-suscriptor-mqtt',
  templateUrl: './suscriptor-mqtt.component.html',
  styleUrls: ['./suscriptor-mqtt.component.scss']
})
export class SuscriptorMqttComponent implements OnInit {


  eventos: string[]= [];
  private deviceId!: string;
  subscription!: Subscription;

  constructor(private readonly eventosMqttService: EventosMqttService) { }

  ngOnInit() {
    this.suscribirAEventos();
}

ngOnDestroy(): void {
    if (this.subscription) {
        this.subscription.unsubscribe();
    }
}

private suscribirAEventos() {
    this.subscription = this.eventosMqttService.topico(this.deviceId)
        .subscribe((data: IMqttMessage) => {
            //let item = JSON.parse(data.payload.toString());
            let item = data.payload.toString();
            this.eventos.push(item);
        }, err => console.error(err));
}

}
