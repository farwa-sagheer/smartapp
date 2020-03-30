import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DinningroomPage } from './dinningroom.page';

describe('DinningroomPage', () => {
  let component: DinningroomPage;
  let fixture: ComponentFixture<DinningroomPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DinningroomPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DinningroomPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
