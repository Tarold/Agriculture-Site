var app = new Vue({
    el:".items",
    data: {
        products:[
            {id:1, title:"Bell Pepper", short_text:"Relatively large in size, the bell-shaped pepper in its immature state is green.", image:"1.jpg", desc:" Relatively large in size, the bell-shaped pepper in its immature state is green with a slightly bitter flavor."},
            {id:2, title:"Poblano Pepper", short_text:"Somewhat large and heart-shaped, the poblano is common in Mexican dishes.", image:"2.jpg", desc:"Somewhat large and heart-shaped, the poblano is common in Mexican dishes such as chiles rellenos."},
            {id:3, title:"Anaheim Pepper", short_text:"The Anaheim turns deep red and are referred to a chile Colorado.", image:"3.jpg", desc:"When mature, the Anaheim turns deep red and are referred to a chile Colorado or California red chile."},
            {id:4, title:"Serrano Pepper", short_text:"Just a couple of inches long, with a tapered end.", image:"4.jpg", desc:"Just a couple of inches long, with a tapered end, this small pepper packs quite a bit of heat."},
            {id:5, title:"Habañero Pepper", short_text:"Small and bulbous, this chile, in the same family as the Scotch bonnet.", image:"5.jpg", desc:"Small and bulbous, this chile, in the same family as the Scotch bonnet, is one of the hottest on the Scoville scale."}
        ],
    },
    mounted:function() {
        console.log(window.localStorage.getItem('prod'));
        this.getProducts();
    },
    methods: {
        addItem:function(id){
            window.localStorage.setItem('prod',id)
        },



        getProducts:function(){
            if(window.location.hash) {
                var id = window.location.hash.replace('#','');
                if(this.products && this.products) {
                for(i in this.products) {
                    if(this.products[i] && this.products[i].id && id==this.products[i].id) this.product=this.products[i];
                } 
                }
            }
        }
    }   
});