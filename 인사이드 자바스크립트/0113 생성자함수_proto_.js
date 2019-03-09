function abc(){
        this.name = 'abc';
      }
      abc.prototype.hello = 'world';
      let a = new abc();
      console.dir(a);
