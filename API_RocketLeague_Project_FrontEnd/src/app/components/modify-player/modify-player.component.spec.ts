import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifyPlayerComponent } from './modify-player.component';

describe('ModifyPlayerComponent', () => {
  let component: ModifyPlayerComponent;
  let fixture: ComponentFixture<ModifyPlayerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifyPlayerComponent]
    });
    fixture = TestBed.createComponent(ModifyPlayerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
