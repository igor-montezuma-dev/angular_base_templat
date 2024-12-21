import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-audio-upload',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './audio-upload.component.html',
  styleUrl: './audio-upload.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class AudioUploadComponent {

}
