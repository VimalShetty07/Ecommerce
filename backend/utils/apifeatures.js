class Apifeatures{
    constructor(query,querystr){
        this.query = query;
        this.querystr = querystr;
    }

    search(){
        const keyword = this.querystr.keyword ? {
            name:{
                $regex:this.querystr.keyword,
                $options:"i"
            },
        }:{};


        console.log(keyword)

        this.query = this.query.find({...keyword});
        return this;
    }

    filter(){
        const querycopy = {...this.querystr}
        

        const removeFields = ["keyword","page","limit"];
        removeFields.forEach(key => delete querycopy[key]);
        
        this.query = this.query.find(querycopy);
        return this;
    }
}

module.exports = Apifeatures;