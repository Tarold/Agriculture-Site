var app = new Vue({
    el:".items, .item, .contactUs",
    data: {
        products:[
            {id:1, title:"Bell Pepper", short_text:"Relatively large in size, the bell-shaped pepper in its immature state is green.", image:"1.jpg", desc:"Relatively large in size, the bell-shaped pepper in its immature state is green with a slightly bitter flavor. Relatively large in size, the bell-shaped pepper in its immature state is green with a slightly bitter flavor. Relatively large in size, the bell-shaped pepper in its immature state is green with a slightly bitter flavor. "},
            {id:2, title:"Poblano Pepper", short_text:"Somewhat large and heart-shaped, the poblano is common in Mexican dishes.", image:"2.jpg", desc:"Somewhat large and heart-shaped, the poblano is common in Mexican dishes such as chiles rellenos. Somewhat large and heart-shaped, the poblano is common in Mexican dishes such as chiles rellenos. Somewhat large and heart-shaped, the poblano is common in Mexican dishes such as chiles rellenos."},
            {id:3, title:"Anaheim Pepper", short_text:"The Anaheim turns deep red and are referred to a chile Colorado.", image:"3.jpg", desc:"When mature, the Anaheim turns deep red and are referred to a chile Colorado or California red chile. When mature, the Anaheim turns deep red and are referred to a chile Colorado or California red chile. When mature, the Anaheim turns deep red and are referred to a chile Colorado or California red chile."},
            {id:4, title:"Serrano Pepper", short_text:"Just a couple of inches long, with a tapered end.", image:"4.jpg", desc:"Just a couple of inches long, with a tapered end, this small pepper packs quite a bit of heat. Just a couple of inches long, with a tapered end, this small pepper packs quite a bit of heat. Just a couple of inches long, with a tapered end, this small pepper packs quite a bit of heat."},
            {id:5, title:"Habañero Pepper", short_text:"Small and bulbous, this chile, in the same family as the Scotch bonnet.", image:"5.jpg", desc:"Small and bulbous, this chile, in the same family as the Scotch bonnet, is one of the hottest on the Scoville scale. Small and bulbous, this chile, in the same family as the Scotch bonnet, is one of the hottest on the Scoville scale. Small and bulbous, this chile, in the same family as the Scotch bonnet, is one of the hottest on the Scoville scale."}
        ],
        product:[],
        cart:[],
        cartIds:[],
        contactFields:[],
        btnVisible: 0,
        orderVisible: 0
    },
    mounted:function() {
        console.log(window.localStorage.getItem('prod'));
        this.getProducts();
        this.checkInCart();
        this.getCart();
        console.log(this.cartIds);
        console.log(this.contactFields);
    },
    methods: {
        addItem:function(id){
            window.localStorage.setItem('prod',id)
        },
        getProducts:function(){
            if(window.location.hash) {
                var id = window.location.hash.replace('#','');
                if(this.products && this.products.length > 0) {
                for(i in this.products) {
                    if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                } 
                }
            }
        },
        addToCart:function(id) {
            var cart = [];
            if(window.localStorage.getItem('cart')) {
                cart = window.localStorage.getItem('cart').split(',');
            }
            if(cart.indexOf(String(id))==-1) {
                cart.push(id);
                window.localStorage.setItem('cart', cart.join());
                this.btnVisible=1;
            }
        },
        checkInCart:function() {
            if(this.product && this.product.id && window.localStorage.getItem('cart').split(',').indexOf(String(this.product.id)) !=-1 ) this.btnVisible=1;
        },
        getCart:function() {
            for(i in localStorage.getItem('cart')) {
                for(p in this.products) {
                    if(this.products[p].id == localStorage.getItem('cart').split(',')[i]) {
                       this.cart.push(this.products[p]);
                       this.cartIds.push(this.products[p].id);
                    }
                }
            }
        },
        removeFromCart:function(id) {
            for(i in this.cart) {
                if(this.cart[i].id == id) {
                    this.cart.splice(i, 1);
                    this.cartIds.splice(i, 1);
                    window.localStorage.setItem('cart', this.cartIds.join());
                }
            }
        },
        makeOrder:function() {
            this.orderVisible = 1;
            this.cart = [];
            this.cartIds = [];
            window.localStorage.removeItem('cart');
        }
    }
});