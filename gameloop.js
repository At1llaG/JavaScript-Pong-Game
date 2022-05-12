class GameLoop {

    constructor() {
        this.fps = 60;
        this.ctx = null;
        this.cnv = null;
        this.loop = null;
    }

    prepareCanvas() {
        this.cnv = document.getElementById('cnv');
        this.ctx = this.cnv.getContext('2d');
        document.body.style.margin = 0;
        document.body.style.padding = 0;
        this.onresize();
    }

    start() {
        this.toggleScreen('start-screen', false);
        this.toggleScreen('cnv', true);
        this.toggleScreen('gameover-screen', false);
        this.prepareCanvas();
        this.init();
        this.loop = setInterval(() => {
            this.update();
            this.render();
        }, 1000/this.fps)
    }

    stop() {
        //console.log('stop game');
        clearInterval(this.loop);
        this.toggleScreen('start-screen', false);
        this.toggleScreen('cnv', false);
        this.toggleScreen('gameover-screen', true);
    }

    mainMenu() {
        this.toggleScreen('start-screen', true);
        this.toggleScreen('cnv', false);
        this.toggleScreen('gameover-screen', false);
    }

    toggleScreen(id,toggle) {
        let element = document.getElementById(id);
        let display = (toggle) ? 'block' : 'none';
        element.style.display = display;
    }

    onresize() {
        if(this.cnv == null)
            return;
        
        //console.log('resizing canvas');
        this.cnv.width = window.innerWidth;
        this.cnv.height = window.innerHeight;
        this.resize();
    }

    init() {
        console.log('init called');
    }

    resize() {
        console.log('gameloop resizing');
    }

    update() {

    }

    render() {
        console.log('gameloop rendering');
    }


}