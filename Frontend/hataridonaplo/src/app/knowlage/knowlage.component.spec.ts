import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KnowlageComponent } from './knowlage.component';

describe('KnowlageComponent', () => {
  let component: KnowlageComponent;
  let fixture: ComponentFixture<KnowlageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KnowlageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KnowlageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
