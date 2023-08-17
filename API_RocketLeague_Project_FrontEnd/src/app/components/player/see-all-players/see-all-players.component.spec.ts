import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeAllPlayersComponent } from './see-all-players.component';

describe('SeeAllPlayersComponent', () => {
  let component: SeeAllPlayersComponent;
  let fixture: ComponentFixture<SeeAllPlayersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SeeAllPlayersComponent]
    });
    fixture = TestBed.createComponent(SeeAllPlayersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
