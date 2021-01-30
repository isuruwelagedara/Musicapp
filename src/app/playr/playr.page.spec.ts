import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PlayrPage } from './playr.page';

describe('PlayrPage', () => {
  let component: PlayrPage;
  let fixture: ComponentFixture<PlayrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PlayrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
