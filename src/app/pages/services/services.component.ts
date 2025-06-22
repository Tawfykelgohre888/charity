import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  imports: [],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {


   services = [
    {
      icon: 'fas fa-hand-holding-heart',
      title: 'المساعدات الإنسانية',
      description: 'توزيع مساعدات غذائية ومالية للفئات الأكثر احتياجًا شهريًا.'
    },
    {
      icon: 'fas fa-seedling',
      title: 'التوعية البيئية',
      description: 'حملات نظافة وتشجير وتوعية للحفاظ على البيئة في القرى والمدارس.'
    },
    {
      icon: 'fas fa-school',
      title: 'دعم التعليم',
      description: 'توفير شنط مدرسية ودروس تقوية مجانًا للطلاب المحتاجين.'
    },
    {
      icon: 'fas fa-user-nurse',
      title: 'رعاية صحية',
      description: 'تنظيم قوافل طبية مجانية وفحوصات دورية لكبار السن والأطفال.'
    },
    {
      icon: 'fas fa-chalkboard-teacher',
      title: 'تدريب وتأهيل',
      description: 'برامج تدريب مهني وشخصي للشباب لفتح أبواب العمل والفرص.'
    },
    {
      icon: 'fas fa-people-carry',
      title: 'الاستجابة للطوارئ',
      description: 'توفير الدعم العاجل في حالات الأزمات والكوارث الطبيعية.'
    }
  ];

}
