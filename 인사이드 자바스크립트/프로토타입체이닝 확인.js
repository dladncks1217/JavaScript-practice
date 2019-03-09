  Object.prototype.hello = function() {
      console.log("this is object prototype");
    };

      var Person = function(name){
        this.name = name;

      };

      var newperson = new Person('ÀÓ¿ìÂù');

      console.log(newperson.constructor);

      Person.prototype = {
        age : 21,
      };

      var newprototype = new Person(21);

      console.log(newprototype.constructor);

      Person.prototype = {
        age : 21,
        grade : 2,
        practice : hello()
      };

      var newprototype2 = new Person();

      console.log(newprototype.grade);
      console.dir(newperson);
      console.dir(newprototype);
      console.dir(newprototype2);


      newprototype.hello();
      console.dir(Object.prototype);
