let loop;
let fps = 60;
let cnv, ctx;

let ball = {
    xpos: 0,
    ypos: 0,
    xvel: 5,
    yvel: 5,
    size: 30,
    color: 'white',
    init: function(cnv){
        this.xpos = (cnv.width - this.size) / 2;
        this.ypos = (cnv.height - this.size) / 2;
    },
    draw: function(ctx){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.xpos, this.ypos, this.size, 0, Math.PI*2, true);
        ctx.fill();
    },
    update: function(cnv){
        this.xpos += this.xvel;
        this.ypos += this.yvel;
        this.checkForCollosions(cnv);
    },
    checkForCollosions: function(cnv){
        if(this.xpos + this.size / 2 > cnv.width || this.xpos - this.size / 2 < 0){
            this.xvel = -this.xvel;
        }
        if(this.ypos + this.size / 2 > cnv.height || this.ypos - this.size / 2 < 0){
            this.yvel = -this.yvel;
        }
    }
}

window.onload = function(){
    prepareCanvas();
    ball.init(cnv);
    loop = setInterval(() => {
        update();
        render();
    }, 1000/fps);
}

function fillCanvas(){
    ctx.fillStyle = '#1bafdb';
    ctx.fillRect(0,0,cnv.width, cnv.height);
}

function prepareCanvas(){
    cnv = document.getElementById('cnv');
    ctx = cnv.getContext('2d');
    document.body.style.padding = 0;
    document.body.style.margin = 0;
    cnv.width = window.innerWidth;
    cnv.height = window.innerHeight;
}

function update(){
    ball.update(cnv);
}


function render(){
    fillCanvas();
    ball.draw(ctx);
}














