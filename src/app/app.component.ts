import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Yoshi Team';
  frontTeam = 'FrontEnd';
  backTeam = 'BackEnd';
  uxTeam = 'Ux/Ui';
  qaTeam = 'QA';
  team = [
    {
      id: 1,
      role: 'Web UI Developer, Software Designer',
      name: 'Lenox',
      lastname: 'Almonacid',
      lead: 1,
      title: this.frontTeam,
      enable: false,
    },
    {
      id: 2,
      role: 'Web UI Developer, Sr.',
      name: 'Andrés',
      lastname: 'Muñoz',
      lead: 1,
      title: this.frontTeam,
      enable: false,
    },
    {
      id: 3,
      role: 'QA',
      name: 'Cesar',
      lastname: 'Landeros',
      lead: 4,
      title: this.qaTeam,
      enable: false,
    },
    {
      id: 4,
      role: 'NodeJS, Software Designer',
      name: 'José',
      lastname: 'León',
      lead: 4,
      title: this.backTeam,
      enable: false,
    },
    {
      id: 5,
      role: 'Bussiness Analyst, SSr.',
      name: 'Milagros',
      lastname: 'Infante',
      lead: 1,
      title: this.frontTeam,
      enable: false,
    },
    {
      id: 6,
      role: 'FullStack Developer, Sr.',
      name: 'Gabriel',
      lastname: 'Perez',
      lead: 1,
      title: this.backTeam,
      enable: false,
    },
    {
      id: 7,
      role: 'QA',
      name: 'Juan',
      lastname: 'Arriaga',
      lead: 4,
      title: this.qaTeam,
      enable: false,
    },
    {
      id: 8,
      role: 'NodeJs, SSr.',
      name: 'Marcelim',
      lastname: 'Rondon',
      lead: 4,
      title: this.backTeam,
      enable: false,
    },
    {
      id: 9,
      role: 'UX/UI, SSr.',
      name: 'Julian',
      lastname: 'Martínez',
      lead: 1,
      title: this.uxTeam,
      enable: false,
    },
    {
      id: 10,
      role: 'Web UI Developer, SSr.',
      name: 'Raúl',
      lastname: 'Campos',
      lead: 1,
      title: this.frontTeam,
      enable: false,
    },
    {
      id: 11,
      role: 'NodeJs, Sr.',
      name: 'Mario',
      lastname: 'Álvarez',
      lead: 4,
      title: this.backTeam,
      enable: false,
    },
    {
      id: 12,
      role: 'Product Manager',
      name: 'Alejandra',
      lastname: 'Ventre',
      lead: 4,
      title: this.backTeam,
      enable: false,
    },
    {
      id: 13,
      role: 'Web UI Developer, SSr. Advance',
      name: 'Joaquin',
      lastname: 'Zamora',
      lead: 1,
      title: this.frontTeam,
      enable: false,
    },
  ].sort((a, b) => a.name.localeCompare(b.name));
  selectedMember = { id: 0, name: '', lastname: '', role: '' };
  loading = false;
  formation: any = [];

  selectAll() {
    this.team.map((item) => {
      item.enable = true;
      return item;
    });
    this.resetParams();
  }
  clearAll() {
    this.team.map((item) => {
      item.enable = false;
      return item;
    });
    this.resetParams();
  }
  resetParams() {
    this.formation = [];
    this.selectedMember = { id: 0, name: '', lastname: '', role: '' };
  }
  shuffle(array: any) {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex > 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
    return array;
  }
  chooseRandom() {
    const enableMembers = this.team.filter((item) => item.enable);
    if (enableMembers.length) {
      this.loading = true;
      const random = Math.floor(Math.random() * enableMembers.length);
      setTimeout(() => {
        this.selectedMember = enableMembers[random];
        const shuffleFrontTeam = this.shuffle(
          enableMembers.filter(
            (item) =>
              item.id !== this.selectedMember.id &&
              item.title === this.frontTeam
          )
        );
        const shuffleBackTeam = this.shuffle(
          enableMembers.filter(
            (item) =>
              item.id !== this.selectedMember.id && item.title === this.backTeam
          )
        );
        const shuffleUxTeam = this.shuffle(
          enableMembers.filter(
            (item) =>
              item.id !== this.selectedMember.id &&
              (item.title === this.uxTeam || item.title === this.qaTeam)
          )
        );
        const result = this.shuffle([
          shuffleFrontTeam,
          shuffleBackTeam,
          shuffleUxTeam,
        ]).flat();
        this.formation = [result[0]];
        this.loading = false;
      }, 1500);
    }
  }
}
