new Vue({
    el:'#vue-app',
    data:{
        name:'Hello Mr./Mrs.',
        greet:'How are You',
        website:'https://nikunj3011.github.io',
        websitetag:'<a href="https://nikunj3011.github.io">Me- blog</a>',
        age:10,
        x:0,
        y:0
    },
    methods:{
        greets:function(){
            return 'Bello';
        },
        greett:function(time){
            return 'Good' +time+' ,'+ this.name;
        },
        add:function(inc){
            this.age+=inc;
        },
        sub:function(dec){
            this.age-=dec;
        },
        updateXY:function(event){
            this.x=event.offsetX;
            this.y=event.offsetY;           

        }
    }
});
