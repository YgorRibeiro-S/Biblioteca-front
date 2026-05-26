import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivrosStatusComponent } from './livros-status.component';

describe('LivrosStatusComponent', () => {
  let component: LivrosStatusComponent;
  let fixture: ComponentFixture<LivrosStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivrosStatusComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LivrosStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
