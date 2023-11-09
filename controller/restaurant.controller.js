const Restaurant = require('../models/restaurant.model');

const Restaurantscontroller =  {
    getAllRestaurant: async (req, res) =>{
        try {
            const restaurant = await Restaurant.find();
            res.json(restaurant); 
        } catch (error) {
            return(error);
        }
    },

    getByIdRestaurant: async (req, res) =>{
        const restaurantId = req.params.id;

            try {
                const restaurant = await Restaurant.findById(restaurantId);
                res.json(restaurant);
            } catch (error) {
                return(error);
            }
    },

    createRestaurant: async(req,res)=> {
        const {name, type, price, image} = req.body;
        const newRestaurant = new Restaurant({name, type, price, image});

        try {
            const restaurant = await newRestaurant.save();
            res.json(restaurant);
        } catch (error) {
            return(error);
        }
    },

    deleteRestaurant: async(req, res) =>{
        const restaurantID = req.params.id;

        try {
            const restaurant = await Restaurant.findByIdAndDelete(restaurantId);
            res.json({message:"Deleted"});
        } catch (error) {
            return(error);
        }
    },

    updateRestaurant: async(req, res) =>{
        const restaurantID = req.params.id;
        const {name, type, price, image} = req.body;

        try {
            const uprestaurant = await Restaurant.findByIdAndUpdate(restaurantId, {name, type, price, image});
            res.json(uprestaurant);
        } catch (error) {
            return(error);
        }
    }
    

};

module.exports = Restaurantscontroller;
