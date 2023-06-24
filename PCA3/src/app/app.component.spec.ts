import { TestBed ,ComponentFixture} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { FormsModule } from '@angular/forms';
describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [AppComponent, ChildComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

 

  it('should add an item to the items array', () => {
    const item = 'Test Item';
    component.addItem(item);

    expect(component.items).toContain(item);
    expect(component.items.length).toBe(1);
  });

  it('should delete an item from the items array', () => {
    component.items = ['Item 1', 'Item 2', 'Item 3'];

    const index = 1;
    component.deleteItem(index);

    expect(component.items).not.toContain('Item 2');
    expect(component.items.length).toBe(2);
  });

  
});
