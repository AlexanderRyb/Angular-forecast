import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsBlock } from './settings-block';

describe('SettingsBlock', () => {
  let component: SettingsBlock;
  let fixture: ComponentFixture<SettingsBlock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SettingsBlock]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingsBlock);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
