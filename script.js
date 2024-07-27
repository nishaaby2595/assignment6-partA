$('#tip').click(function(){

    const CalculateTipVal = (BV) =>{
        const TC = BV >30 && BV <300 ? '15' : '20';

        const Tip = BV * TC/100 ;
        const Total = Tip +BV 
        console.log(`The bill was ${BV}, the tip was ${Tip}, and the total value is ${Total}`); 
    };
     
        
    const BillArray = [200,28,430];

    BillArray.forEach(temp => CalculateTipVal(temp));
})