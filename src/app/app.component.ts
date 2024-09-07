import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ScriptLoaderService } from './services/script-loader.service';
import { CommonModule } from '@angular/common';
import { LoadStyleService } from './services/load-style.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,

    CommonModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  
  title = 'pets';
  menuState: string = 'close'; // Valor inicial del menú
  constructor( 
  public scriptLoader: ScriptLoaderService,
  private loadStyleService: LoadStyleService
  // public auth:PocketAuthService,
  // public pocketbase: PocketbaseService,
  // public global: GlobalService
) {
 
}
ngOnInit(): void {
  // Cargar estilos de forma dinámica

  this.loadStyleService.loadStyle('assets/css/vendors/iconsax.css');
  this.loadStyleService.loadStyle('assets/css/vendors/bootstrap.css');
  this.loadStyleService.loadStyle('assets/css/vendors/swiper-bundle.min.css');
  this.loadStyleService.loadStyle('assets/css/style.css');


  this.scriptLoader
        .loadScripts([
          'assets/js/iconsax.js',
          'assets/js/bootstrap.bundle.min.js',
          'assets/js/sticky-header.js',
          'assets/js/swiper-bundle.min.js',
          // 'assets/js/custom-swiper.js',
          'assets/js/template-setting.js',
          'assets/js/script.js',      
        ])
        .then((data) => {
          console.log('Todos los scripts se han cargado correctamente', data);
        })
        .catch((error) => console.error('Error al cargar los scripts', error));

}

}
