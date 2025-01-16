const asyncHandler = require("express-async-handler");


//@desc create product
//@route POST /api/product
//@access public
const createProduct = asyncHandler(async (req, res) => {
    console.log(req.headers)
    console.log(req.body)
    const { product_id } = req.body;
    console.log(`created ${product_id}`)
    res.status(200).json(product_id)
});




//@desc Update product
//@route PUT /api/product/:product_id
//@access public
const updateProduct = asyncHandler(async(req, res) => {
    console.log(req.body)
    const { product_id } = req.body;
    console.log(`updated ${product_id}`)

    res.status(200).json(product_id)
})



// @desc Delete all product
// @route DELETE /api/product/:product_id
// @access public
const deleteProduct = asyncHandler(async (req, res) => {
    const { product_id } = req.body;
    console.log(req.body)
    console.log(`deleted ${product_id}`)
    res.status(200).json(product_id)
});


module.exports = {
    createProduct,
    updateProduct,  
    deleteProduct
}