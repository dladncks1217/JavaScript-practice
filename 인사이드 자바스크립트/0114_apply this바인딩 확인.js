var applyf = function(name,date){
        this.name = name;
        this.date = date;

      };

      var emptyfunc ={};
      applyf.apply(emptyfunc,['�ӿ���','1217']);
      console.dir(emptyfunc);
      