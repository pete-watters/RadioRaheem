describe('home page title', function() {
    var ptor = protractor.getInstance();
    it('should be radioraheem', function() {
        ptor.get('/#');
        expect(ptor.getTitle()).toBe('radioraheem');
    });
});
