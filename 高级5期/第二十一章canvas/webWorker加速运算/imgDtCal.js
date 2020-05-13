onmessage = function(event){
    const {data}=event.data;
    for(let i=0;i<data.length;i+=4){
        let [r,g,b]=[
            data[i],
            data[i+1],
            data[i+2]
        ];
        const lm =0.299*r+0.587*g+0.114*b ;
        data[i]=lm;
        data[i+1]=lm;
        data[i+2]=lm;

        //加大运算
        let num=0;
        for(let i = 0; i<1000;i++){
            num += i;
        }
    }
    postMessage(event.data);
};