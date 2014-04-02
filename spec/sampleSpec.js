describe("test case name", function() {
    var foo;
     beforeEach(function() {
         foo = sample.test('hello');
     });

     it("should say ", function (){
        var say = foo.say('hello');
        expect(say).toEqual("say hello");
     });
});
