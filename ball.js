class Ball {

    constructor() {
        this.xpos = 0;
        this.ypos = 0;
        this.xvel = 5;
        this.yvel = 5;
        this.size = 30;
        this.color = 'white';
    }

    init(cnv) {
        this.xpos = (cnv.width - this.size) / 2;
        this.ypos = (cnv.height - this.size) / 2;
        this.resize(cnv);
    }

    // onresize(cnv) {
    //     console.log('onresize ball');
    //     this.cnv.width = window.innerWidth;
    //     this.cnv.height = window.innerHeight;
    //     this.resize();
    // }

    resize(cnv) {
        console.log('ball resizing');
        this.size = cnv.width * 0.01 + 10;
    }

    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.xpos, this.ypos, this.size, 0, Math.PI*2, true);
        ctx.fill();
    }

    update(cnv) {
        this.xpos += this.xvel;
        this.ypos += this.yvel;
        this.checkForCollosions(cnv);
    }

    checkForCollosions(cnv){
        if(this.xpos + this.size / 2 > cnv.width || this.xpos - this.size / 2 < 0){
            this.xvel = -this.xvel;
        }
        if(this.ypos + this.size / 2 > cnv.height || this.ypos - this.size / 2 < 0){
            this.yvel = -this.yvel;
        }
    }

    
    


}