const mongoose=require("mongoose")

const express=require("express")

const app=express()


const Movie_schema= new mongoose.Schema({
    movie_name:String,
    release_date:Number,
    language:String,
    rating:Number,
    blockbuster:Boolean,
    cast:String
})

const Movies=mongoose.model("Movie",Movie_schema)


async function Movie_detail(){

    const connect=mongoose.connect("mongodb://localhost:27017/IMDB")
        console.log("connected")

    // const detail= await new Movies(
        
        // {
        //     movie_name: "sholay",
        //     release_date: 12 - 01 - 1999,
        //     language: "hindi",
        //     rating: 10,
        //     blockbuster: true,
        //     cast: "amithab bacchan, dharbendar"
        // },
        // },
        // {
        //     movie_name: "kashmir files",
        //     release_date: 22 - 11 - 2022,
        //     language: "hindi",
        //     rating: 10,
        //     blockbuster: true,
        //     cast: "anupam kher,mithoon chakravarthy"
        // }
        // },
        // {
        //     movie_name: "Laal sing chadda",
        //     release_date: 4 - 3 - 2022,
        //     language: "hindi",
        //     rating: 2,
        //     blockbuster: false,
        //     cast: "amir khan, kareena kapoor"
        // }
        // {
        //     movie_name: "Raksha bandhan",
        //     release_date: 4 - 4 - 2022,
        //     language: "hindi",
        //     rating: 7,
        //     blockbuster: false,
        //     cast: "Akshay kumar"
        // }

        // {
        //     movie_name: "Karthekeyya 2",
        //     release_date: 1 - 8 - 2022,
        //     language: "telugu",
        //     rating: 10,
        //     blockbuster: true,
        //     cast: "Nikhil reddy, Anupama"
        // }
        
    // )
     
  
    // await detail.save()

    //  connect.disconnect()
}


Movie_detail()

app.get("/",async (req,res)=>{
    const find= await Movies.find()
    console.log(find)
    res.send(find)
})

app.get("/filter_by_title",async (req,res)=>{
    const find= await Movies.find().sort({movie_name:-1})
    console.log(find)
    res.send(find)
})

app.get("/filter_by_rating",async(req,res)=>{
    const find= await Movies.find().sort({rating:-1})
    console.log(find)
    res.send(find)
})


app.get("/search/:query",async(req,res)=>{
    let store=req.params.query
    console.log(store)
    const find= await Movies.find({movie_name:{$regex:`${store}`}})
    console.log(find)
    res.send("done")
})

app.listen(3000)