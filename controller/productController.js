const asyncHandler = require("express-async-handler");
const { getProduct } = require("../helpers/getProduct");

//@desc create product
//@route POST /api/product
//@access public
const createProduct = asyncHandler(async (req, res) => {
    const { product_id } = req.body;
    const created_product = await getProduct(product_id);

    res.status(200).json(product_id)
});



//@desc Update product
//@route PUT /api/product/:product_id
//@access public
const updateProduct = asyncHandler(async(req, res) => {
    const product_id_list  = JSON.parse(req.body.product_id_list);
    const product_detail = Object.fromEntries(
        Object.entries(req.body).filter(([key, value]) => value !== 'undefined')
      );
      const updated_product_detail = {
        ...product_detail,
        product_id_list:product_id_list
      }
      console.log(updated_product_detail)


    res.status(200)
})

// @desc Delete all product
// @route DELETE /api/product/:product_id
// @access public
const deleteProduct = asyncHandler(async (req, res) => {
    const product_id_list  = JSON.parse(req.body.product_id_list);

    console.log(`deleted ${product_id_list}`)
    res.status(200).json(product_id_list)
});


module.exports = {
    createProduct,
    updateProduct,  
    deleteProduct
}