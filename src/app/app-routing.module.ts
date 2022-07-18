import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuscriptorMqttComponent } from './components/suscriptor-mqtt/suscriptor-mqtt.component';

const routes: Routes = [
  { path: '', component: SuscriptorMqttComponent },
  { path: 'stream', component: SuscriptorMqttComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
