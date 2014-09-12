describe('trips',function(){
  browser.get('http://localhost:30000');
  it('should exist',function(){
    expect(trips).not.toBe(undefined);
  });
});
describe('reviews',function(){
  browser.get('http://localhost:30000');
  it('should exist',function(){
    expect(reviews).not.toBe(undefined);
  });
});
