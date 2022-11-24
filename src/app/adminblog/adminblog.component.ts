import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

export interface PeriodicElement {
  id: number;
  title: string;
  body: string;
  image: string;
  published_at: Date;
}

const imageTemplate = 'https://material.angular.io/assets/img/examples/shiba2.jpg';


@Component({
  selector: 'material-adminblog',
  templateUrl: './adminblog.component.html',
  styleUrls: ['./adminblog.component.css']
})
export class AdminblogComponent implements OnInit {
  displayedColumns: string[] = ['id', 'title', 'image', 'published_at', 'actions'];
  dataSource : PeriodicElement[] = [
    {
      id: 1,
      title: 'Hydrogen',
      body: `Lorem ipsum dolor sit amet
            consectetur adipiscing elit
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: imageTemplate,
      published_at: new Date()
    },
    {
      id: 2,
      title: 'Helium',
      body: `Lorem ipsum dolor sit amet
            consectetur adipiscing elit
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: imageTemplate,
      published_at: new Date()
    },

    {
      id: 3,
      title: 'Lithium',
      body: `Lorem ipsum dolor sit amet
            consectetur adipiscing elit
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: imageTemplate,
      published_at: new Date()
    },

    {
      id: 4,
      title: 'Beryllium',
      body: `Lorem ipsum dolor sit amet
          consectetur adipiscing elit
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: imageTemplate,
      published_at: new Date()
    },
    {
      id: 5,
      title: 'Boron',
      body: `Lorem ipsum dolor sit amet
          consectetur adipiscing elit
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: imageTemplate,
      published_at: new Date()
    },

    {
      id: 6,
      title: 'Carbon',
      body: `Lorem ipsum dolor sit amet
          consectetur adipiscing elit
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: imageTemplate,
      published_at: new Date()
    },
    {
      id: 7,
      title: 'Nitrogen',
      body: `Lorem ipsum dolor sit amet
          consectetur adipiscing elit
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
          sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: imageTemplate,
      published_at: new Date()
    },
    {
      id: 8,
      title: 'Oxygen',
      body: `Lorem ipsum dolor sit amet
            consectetur adipiscing elit
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: imageTemplate,
      published_at: new Date()
    },
    {
      id: 9,
      title: 'Fluorine',
      body: `Lorem ipsum dolor sit amet
            consectetur adipiscing elit
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      published_at: new Date()
    },
    {
      id: 10,
      title: 'Neon',
      body: `Lorem ipsum dolor sit amet
            consectetur adipiscing elit
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident
            sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      image: 'https://material.angular.io/assets/img/examples/shiba1.jpg',
      published_at: new Date()
    },
  ];

  constructor(public dialog: MatDialog) { }

  openDialog(id: number, enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogBoxComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });

    dialogRef.afterClosed().subscribe(result => {
      alert(result + id);
      if (result === true) {
        this.dataSource = this.dataSource.filter(data => data.id != id);
      }
    })
  }

  delete(id: number) {
    this.openDialog(id, '0ms', '0ms');
  }

  ngOnInit(): void {
  }

}


