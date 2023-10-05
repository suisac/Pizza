function cartController(){
    return {
        cart(req,res){
            
            res.render("client/cart");
        },
       update(req,res){
           //for the first time creating cart and addiing structure
        if(!req.session.cart){
                req.session.cart={
                    items:{},
                    totalQty:0,
                    totalPrice:0
                }
                
           
            
        }
        let cart=req.session.cart
         //check if item doesnot exist in cart
        // console.log(req.body)
        if(!cart.items[req.body._id]){

            cart.items[req.body._id]={
                item: req.body,
                qty:1
            }
cart.totalQty=cart.totalQty+1;
cart.totalPrice=cart.totalPrice+req.body.prize;


    }else{
        cart.items[req.body._id].qty=cart.items[req.body._id].qty+1;
        cart.totalQty=cart.totalQty+1;
cart.totalPrice=cart.totalPrice+req.body.prize
    }
           return res.json({totalQty:req.session.cart.totalQty})


       }
        
    }
}

module.exports=cartController;