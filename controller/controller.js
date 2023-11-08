const Product = require('../models/Product');

const productscontroller =  {
    getAllproduct: async (req, res) =>{
        try {
            const product = await Product.find();
            res.json(product); 
        } catch (error) {
            return(error);
        }
    },

    getByIdproduct: async (req, res) =>{
        const productID = req.params.id;

            try {
                const product = await Product.findById(productID);
                res.json(product);
            } catch (error) {
                return(error);
            }
    },

    createproduct: async(req,res)=> {
        const {name, type, price, image} = req.body;
        const newProduct = new Product({name, type, price, image});

        try {
            const product = await newProduct.save();
            res.json(product);
        } catch (error) {
            return(error);
        }
    },

    deleteproduct: async(req, res) =>{
        const productID = req.params.id;

        try {
            const product = await Product.findByIdAndDelete(productID);
            res.json({message:"Deleted"});
        } catch (error) {
            return(error);
        }
    },

    updateproduct: async(req, res) =>{
        const productID = req.params.id;
        const {name, type, price, image} = req.body;

        try {
            const upproduct = await Product.findByIdAndUpdate(productID, {name, type, price, image});
            res.json(upproduct);
        } catch (error) {
            return(error);
        }
    }
    

};

module.exports = productscontroller;