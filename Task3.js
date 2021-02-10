const obj = {
    name: "Mohamed",
    address: "Cairo",
    age: 26,
}

const handler={
    set: function (target, prop, value) {

        switch (prop) {
            case "name": {
               
                
                if (value.length != 7 || typeof(value) != "string")
                    throw new Error('name must be a string of 7 characters');
                target[prop] = value;
                break;
            }
            case "address":{
                
                if (typeof(value) != "string")
                    throw new Error('address must be a string');
                target[prop] = value;
               break;
            }
                
            case "age":{
               
                 if (typeof(value) != "number" || (value <=25 || value>=60))
                     throw new Error('age must be a number between 25 and 60');
                 target[prop] = value;
                 break;
            }
        }
    
    },
 
    
 
}

const objProxy = new Proxy(obj,handler);

objProxy.address = 23;
//objProxy.age=21;
//objProxy.name="mario";

