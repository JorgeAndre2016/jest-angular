import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataComponent } from './data.component';
import { FakeService } from '../services/fake.service';
import { of, throwError } from 'rxjs';

describe('DataComponent', () => {
  let component: DataComponent;
  let fixture: ComponentFixture<DataComponent>;
  let fakeServiceMock: any;

  beforeEach(() => {
    fakeServiceMock = {
      getDataV1: jest.fn()
    };

    TestBed.configureTestingModule({
      declarations: [DataComponent],
      providers: [
        { provide: FakeService, useValue: fakeServiceMock}
      ]
    });
    fixture = TestBed.createComponent(DataComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should getServiceData set serviceData', () => {
    const expectedData = { id: 1, title: 'test' };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expectedData));
    fixture.detectChanges();
    expect(component.serviceData.id).toBe(expectedData.id);
  });

  it('should getServiceData set errorMessage', () => {
    const expectedError = { statusText: 'test error' };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(throwError(() => expectedError));
    component.getServiceData();
    expect(component.errorMessage).toBe(expectedError.statusText);
  });

  it('should greeting set Good day', () => {
    const expectedData = { id: 1, title: 'test', time: 12 };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expectedData));
    fixture.detectChanges();
    expect(component.greeting).toBe('Good day');
  });

  it('should greeting set Good morning', () => {
    const expectedData = { id: 1, title: 'test', time: 9 };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expectedData));
    fixture.detectChanges();
    expect(component.greeting).toBe('Good morning');
  });

  it('should greeting set Goog evening', () => {
    const expectedData = { id: 1, title: 'test', time: 21 };
    jest.spyOn(fakeServiceMock, 'getDataV1').mockReturnValue(of(expectedData));
    fixture.detectChanges();
    expect(component.greeting).toBe('Good evening');
  });
});
