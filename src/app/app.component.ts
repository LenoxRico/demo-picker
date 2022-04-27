import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Yoshi Team';
  team = [
    {
      id: 1,
      role: 'Web UI Developer, Software Designer',
      name: 'Lenox',
      lastname: 'Almonacid',
      lead: 1,
      enable: false,
    },
    {
      id: 2,
      role: 'Web UI Developer, Sr.',
      name: 'Andrés',
      lastname: 'Muñoz',
      lead: 1,
      enable: false,
    },
    {
      id: 3,
      role: 'QA',
      name: 'Cesar',
      lastname: 'Landeros',
      lead: 4,
      enable: false,
    },
    {
      id: 4,
      role: 'NodeJS, Software Designer',
      name: 'José',
      lastname: 'León',
      lead: 4,
      enable: false,
    },
    {
      id: 5,
      role: 'Bussiness Analyst',
      name: 'Daniela',
      lastname: 'Herreño',
      lead: 1,
      enable: false,
    },
    {
      id: 6,
      role: 'Web UI Developer, Sr.',
      name: 'Alejandro',
      lastname: 'Mengana',
      lead: 1,
      enable: false,
    },
    {
      id: 7,
      role: 'QA',
      name: 'Juan',
      lastname: 'Arriaga',
      lead: 4,
      enable: false,
    },
    {
      id: 8,
      role: 'NodeJs, Sr.',
      name: 'Juan',
      lastname: 'Ascanio',
      lead: 4,
      enable: false,
    },
    {
      id: 9,
      role: 'UX/UI',
      name: 'Julian',
      lastname: 'Martínez',
      lead: 1,
      enable: false,
    },
    {
      id: 10,
      role: 'Web UI Developer, SSr.',
      name: 'Raúl',
      lastname: 'Campos',
      lead: 1,
      enable: false,
    },
    {
      id: 11,
      role: 'NodeJs, Sr.',
      name: 'Mario',
      lastname: 'Álvarez',
      lead: 4,
      enable: false,
    },
    {
      id: 12,
      role: 'Product Manager',
      name: 'Ana',
      lastname: 'Álvarez',
      lead: 4,
      enable: false,
    },
  ];
  selectedMember = { name: '', lastname: '' };
  loading = false;

  selectAll() {
    this.team.map((item) => {
      item.enable = true;
      return item;
    });
    this.selectedMember = { name: '', lastname: '' };
  }
  clearAll() {
    this.team.map((item) => {
      item.enable = false;
      return item;
    });
    this.selectedMember = { name: '', lastname: '' };
  }
  chooseRandom() {
    const enableMembers = this.team.filter((item) => item.enable);
    if (enableMembers.length) {
      this.loading = true;
      const random = Math.floor(Math.random() * enableMembers.length);
      setTimeout(() => {
        this.selectedMember = enableMembers[random];
        this.loading = false;
      }, 1500);
    }
  }
}
