module.exports={
    rateLimitConf:{
        time: process.env.LIMIT_TIME_MIN,
        hits: process.env.LIMIT_HITS,
    },
    tamponConf:{
        regular:{
            cotton: 100,
            hemp:50,
            string: 30,
            wrapper: 40
        },
        super:{
            cotton: 200,
            hemp:10,
            string: 30,
            wrapper: 50
        }
    },
    rawMaterial:{
        cotton:10000,
        hemp:4000,
        string: 4000,
        wrapper: 3000
    }
}