import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-boardMembers',
  templateUrl: './boardMembers.component.html',
  styleUrls: ['./boardMembers.component.css']
})
export class BoardMembersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }



  boardNumber = [
  {
    name: 'م. محمد الشبراوي عبدالسلام',
    position: 'رئيس مجلس الإدارة',
    job: 'مهندس مدني',
    Image: 'assets/images/mohamed.jpg',
    phone: '01001234567',
    whatsapp: '01001234567'
  },
    {
    name: 'م. توفيق عبدالرحمن الجوهري',
    position: 'الأمين العام',
    job: 'مهندس برمجيات',
    Image: 'assets/images/tawfik.jpg',
    phone: '01001234567',
    whatsapp: '01001234567'
  },
    {
    name: 'أ. عادل علي عبده',
    position: 'أمين الصندوق',
    job: 'معلم أول خبير',
    Image: 'assets/images/adelElgohre.jpg',
    phone: '01001234567',
    whatsapp: '01001234567'
  },
  {
    name: 'أ. عمرو محمد عبده',
    position: 'نائب رئيس مجلس الإدارة',
    job: 'موظف بالوحدة المحلية',
    Image: '../../../assets/images/amrelgohre.jfif',
    phone: '⁦+20 10 09169151⁩',
    whatsapp: '⁦+20 10 09169151⁩'
  },
  {
    name: 'أ. عادل السيد الجوهري',
    position: 'عضو مجلس الإدارة',
    job: 'مدير مصنع  للملابس الجاهزة',
    Image: '../../../assets/images/adelels.jfif',
    phone: '01001234567',
    whatsapp: '01001234567'
  },

  {
    name: 'م. أحمد محمد الشبراوي',
    position: 'عضو مجلس الإدارة',
    job: 'مهندس مدني',
    Image: 'assets/images/file.enc',
    phone: '01001234567',
    whatsapp: '01001234567'
  },

  {
    name: 'أ. فايزة أحمد صالح',
    position: 'عضو مجلس الإدارة',
    job: 'أخصائي نفسي أول',
    Image: 'assets/images/fayza.png',
    phone: '01001234567',
    whatsapp: '01001234567'
  }
];


}
