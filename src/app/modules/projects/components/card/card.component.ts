import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'os-project-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class ProjectCardComponent {
  @Input() projectData;
  @Input() toastDuration: number = 3000;
  @Output() onCopy = new EventEmitter();
  isCopied = false;

  copyToClipboard() {
    const el = document.createElement('textarea');
    el.value = this.projectData.ref;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    this.notify();
    this.onCopy.emit(this);
  }

  showToast() {
    this.isCopied = true;
  }

  hideToast() {
    this.isCopied = false;
  }

  private notify() {
    this.showToast();
    setTimeout(this.hideToast.bind(this), this.toastDuration);
  }
}
