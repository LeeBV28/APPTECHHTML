/*
 Định nghĩa 1 dạng object cho sản phẩm gồm các thông tin: tên, ảnh sp, mô tả, giá, số lượng, danh mục (đối tượng)
 và các hành vi:
 - thêm sp vao gio hàng ( có 1 biến cart là 1 array bên ngoài)
 - xóa sp khỏi giỏ hàng
 - tăng số lượng sản phẩm
 - điều chỉnh giá sp
 */ 
var cart=[];
var product = {
    id: 1,
    name: "product name",
    image: "images/ass6.jpg",
    description: "product description",
    peice: 0,
    qty: 1,
    category:{
        name: "category name",
        image: "images/lebv.jpg",
    },
    addtocart: function(){
        if(this.qty == 0){
            console.log("San pham hết hàng");
        }else{
            if(checkcart(this)){
                for(var i=0; i<cart.length; i++){
                    if(cart[i].id == this.id){
                        cart[i].qty++;
                        this.qty=this.qty- 1;
                    }
                }
            }else{
                cart.pus(this);
                this.qty=this.qty -1;
            }
        }
    },
    removefromcart: function(){
        if(checkcart(this)){
            for(var i=0; i<cart.length; i++){
                if(cart[i].id==this.id){
                    cart.splice(i,1);
                    this.qty=this.qty+ cart[i].qty;
                }
            }
        }
    },
    changeStock: function(num){
        this.qty = this.qty + num; 
        this.qty=this.qty>0?thisqty:"0";       
    },
    changepeice: function(change){
        this.peice+= change;
        this.peice=this.peice>0?this.peice:"0";
    },
};

function checkcart(p){
    for(var i=0; i<cart.length; i++){
        if(this.cart[i]== p.id){
            return true;
        }
    }
        return false;
    
}