import { ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { AppModule } from '../app.module';

import { ResultsComponent } from './results.component';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultsComponent ],
      imports: [ AppModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });

  it('title in h1 tag is "Here are your results!"', waitForAsync(() => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Here are your results!');
  }));

  it('click song title opens spotify website', fakeAsync(() => {
    spyOn(window, 'open');
    let button = fixture.debugElement.nativeElement.querySelector('#song1');
    button.click();
    tick();
    expect(window.open).toHaveBeenCalledWith('https://open.spotify.com/','_blank');
  }));
});
