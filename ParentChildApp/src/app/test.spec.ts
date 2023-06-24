describe ('test',()=>{
    let data:any;
    let a:number;
    let b:number;
    function factorial(num:number){
        let fact=1;
        for(let i=1;i<=num;i++){
            fact=fact*i;
            
        }
        return fact;
    }
    
    let arr: number[] = [];
    arr.push(10);
    arr.push(15);
    arr.push(5);
    arr.push(22);
    arr.sort((a,b)=> a-b);
    function locate(num:number,arr:number[]){
        let j=0;
        let loc=0;
        arr.forEach((i)=>{
            
            if(num===i){
                loc=j;
            }
            j++;
        
        })
        return loc;
    }
    
    let str:string
    beforeEach(()=>{
        console.log('from before');
        data={};
    
});
it('dummy test',()=>{});
it('it should add(10,10) and gives 20',()=>{
    a=10;
    b=10;
    expect(a+b).toBe(20);
});
it('it should return true if fale or true',()=>{ 
    data.flag=false;
    data.flag=true;
    expect(data.flag).toBe(true)
});
it('factorial of number',()=>{
    a=5;
    expect(factorial(5)).toBe(120);
});
it('locating a number',()=>{
    expect(locate(5,arr)).toBe(0);
});
it
});


