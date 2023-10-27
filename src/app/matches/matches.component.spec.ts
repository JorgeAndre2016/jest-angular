import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchesComponent } from './matches.component';

describe('MatchesComponent', () => {
  let component: MatchesComponent;
  let fixture: ComponentFixture<MatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatchesComponent]
    });
    fixture = TestBed.createComponent(MatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('two plus two is four', () => {
    expect(2+2).toEqual(4);
  });

  it('objects values', () => {
    const data = { one: 1 };
    expect(data).toEqual({ one: 1 });
  });

  // Truthiness
  it('null', () => {
    const n = null;
    expect(n).toBeNull();
    expect(n).toBeDefined();
    expect(n).not.toBeUndefined();
    expect(n).not.toBeTruthy();
    expect(n).toBeFalsy();
  });

  it('zero', () => {
    const z = 0;
    expect(z).not.toBeNull();
    expect(z).toBeDefined();
    expect(z).not.toBeUndefined();
    expect(z).not.toBeTruthy();
    expect(z).toBeFalsy();
  });

  // Numbers
  it('two plus two', () => {
    const value = 2 + 2;
    expect(value).toBeGreaterThan(3);
    expect(value).toBeGreaterThanOrEqual(3.5);
    expect(value).toBeLessThan(5);
    expect(value).toBeLessThanOrEqual(4.5);

    // toBe and toEqual are equivalent for numbers
    expect(value).toBe(4);
    expect(value).toEqual(4);
  });

  it('adding floating point numbers', () => {
    const value = 0.1 + 0.2;
    // expect(value).toBe(0.3);           This won't work because of rounding error
    expect(value).toBeCloseTo(0.3); // This works.
  });

  // Strings
  it('there is no D in techops', () => {
    expect('techops').not.toMatch(/D/);
  });

  it('but there is a "world" in techops', () => {
    expect('techopsworld').toMatch(/world/);
  });

  // Arrays and iterables
  it('the shopping list has beer on it', () => {
    const shoppingList = [
      'diapers',
      'kleenex',
      'trash bags',
      'paper towels',
      'beer'
    ];
    expect(shoppingList).toContain('beer');
    expect(new Set(shoppingList)).toContain('beer');
  });

  // Exceptions
  it('compiling android goes as expected', () => {
    expect(() => component.compiAndroidCode()).toThrow();
    expect(() => component.compiAndroidCode()).toThrow(Error);

    // You can also use the exact error message or a regexp
    expect(() => component.compiAndroidCode()).toThrow('Method not implemented.');
    expect(() => component.compiAndroidCode()).toThrow(/Method/);
  });
});
