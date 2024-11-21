import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageService } from '../../services/image.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  missionImage: string;
  valuesImage: string;
  teamImages: { [key: string]: string };
  imagesLoaded = false;

  constructor(private imageService: ImageService) {
    this.missionImage = this.imageService.getImagePath('mission.jpeg');
    this.valuesImage = this.imageService.getImagePath('values.jpeg');
    this.teamImages = {
      team1: this.imageService.getImagePath('team-1.jpeg'),
      team2: this.imageService.getImagePath('team-2.jpeg'),
      team3: this.imageService.getImagePath('team-3.jpeg')
    };
  }

  async ngOnInit() {
    try {
      // Preload all images
      await Promise.all([
        this.imageService.preloadImage(this.missionImage),
        this.imageService.preloadImage(this.valuesImage),
        ...Object.values(this.teamImages).map(img => this.imageService.preloadImage(img))
      ]);
      this.imagesLoaded = true;
    } catch (error) {
      console.error('Failed to load images:', error);
    }
  }
}
