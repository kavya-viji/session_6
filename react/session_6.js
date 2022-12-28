//  class MyClass
//  {
//    getName()
//   {
//    console.log("class");
//   }
// }
// var obj = new MyClass();
// obj.getName();


  class MyClass
  {
    constructor ()
    {
    this.name = "kavya";
    }
    getName()
    {
    console.log("class",this.name);
    }
  }
   var obj = new MyClass();
   obj.getName();
 

   class MyClass1 extends MyClass
   {
     constructor ()
     {
      super();
      console.log(this.name );
     // this.name = "kavya";
     }
     get()
     {
      super.getName()  
     //console.log("class",this.name);
     }
   }
    var obj = new MyClass1();
    obj.get();
 
 