import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutComponent } from './about.component';

describe('AboutComponent', () => {
  let component: AboutComponent;
  let fixture: ComponentFixture<AboutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AboutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AboutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should emit the about event with the correct data', () => {
    spyOn(component.sendData, 'emit');
    component.send();
    expect(component.sendData.emit).toHaveBeenCalledWith(5);
  });
  it('should emit the about event with the correct data', () => {
    spyOn(component.sendData2, 'emit');
    component.send2();
    expect(component.sendData2.emit).toHaveBeenCalledWith(10);
  });

});
