select * from cart 
JOIN products ON products.id = cart.productid
where userid = 1