import { Component, OnInit,  } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
})
export class ProgressBarComponent implements OnInit {
  public progressValue = 100;
  public progressClass = '';
  public dividerPositions = [20,40,60,80];
  public messages = [
    {
      text: 'Precisa de melhorias',
      visible: this.progressValue <= 20,
    },
    {
      text: 'Abaixo do esperado',
      visible: this.progressValue > 20 && this.progressValue <= 40,
    },
    {
      text: 'Adequado',
      visible: this.progressValue > 40 && this.progressValue <= 60,
    },
    {
      text: 'Acima das expectativas',
      visible: this.progressValue > 60 && this.progressValue <= 80,
    },
    {
      text: 'Excepcional',
      visible: this.progressValue > 80,
    }
  ];

  public ngOnInit() {
    this.updateProgressClass();
  }

  private updateProgressClass(): void {
    if (this.progressValue <= 40) {
      this.progressClass = 'progress-warn';
    } else if (this.progressValue > 40 && this.progressValue  <= 60) {
      this.progressClass = 'progress-accent';
    } else {
      this.progressClass = 'progress-primary';
    }
  }

  public updateProgress(value: number): void {
    this.progressValue = value;
    this.updateProgressClass();
  }
}
