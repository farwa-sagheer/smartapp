import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LivingPage } from './living.page';

describe('LivingPage', () => {
  let component: LivingPage;
  let fixture: ComponentFixture<LivingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LivingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LivingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
