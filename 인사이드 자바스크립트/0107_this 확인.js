var a = {
        b:'helloasdf',
        c:function(){
          console.log(this.b);
        }
      }
      a.c();
      console.log(this.focus);