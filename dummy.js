  async function asynch(){
            console.log("before timeout inside async");
        var promise = new Promise((s,f)=>{
            setTimeout(function(){
                console.log("timeout done");
            },500)
        });
            console.log("after timeout");
        }
        asynch();
        console.log("started loop");
        for(let i=0;i<10000000;i++)
            {
                ;
            }
        console.log("finished loop");