class students{
    constructor(){
        this.firstname = "Nam Tien";
        this.lastname = "Hoang";
    }
    get namestudent(){
        return this.firstname + " " + this.lastname;
    }
    hello1 =()=>{
        return "Xin chao " + this.firstname;
    };
}
 let sdA = new students()
 console.log(sdA.namestudent);
 console.log(sdA.hello1());
 
