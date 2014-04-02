describe("test case name_", function() {
    var foo;
     beforeEach(function() {
         foo = sample.test('hello');
     });

     it("should say ", function (){
        var say = foo.say('hello__');
        expect(say).toEqual("say hello_");
     });
});
