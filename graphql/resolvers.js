const Recipe = require('../models/Recipe'); 


module.exports ={
    Query:{
        // Giving _ as the first parameter to ignore the parent parameter
        // if we pass an id that exists in database this func will 
        //give us the data of that recipe
        async recipe (_, {ID}){
            return await Recipe.findById(ID)                            
        },
        // take the amount of recipes user need to see and 
        //gives the most recent recipes given in the args
        async getRecipes(_, {amount}) {
            return await Recipe.find().sort({createdAt: -1}).limit(amount)
        }
        
    },

    Mutation:{
        //This function creates the recipe takes the args same as recipeInput
        async createRecipe(_, {recipeInput: {name, description, instructions, ingredients}}) {
            const createdRecipe = new Recipe({
                name: name,
                description: description,
                createdAt: new Date().toISOString(),
                instructions: instructions,
                ingredients: ingredients
            });
            const res = await createdRecipe.save();

            return{
                id: res.id,
                ...res._doc
            }
        },
        // deleting based on id 
        async deleteRecipe(_, {ID}){
            const wasDeleted = (await Recipe.deleteOne({_id: ID})).deletedCount;
            return wasDeleted; //returns 1 if a recipe was deleted, else 0
        },

        async editRecipe (_, {ID, recipeInput: {name, description, instructions, ingredients}}){
            const wasEdited = (await Recipe.updateOne({_id: ID},{name: name, description:description, instructions: instructions, ingredients: ingredients})).modifiedCount;
            return wasEdited; 
        }
    }
}