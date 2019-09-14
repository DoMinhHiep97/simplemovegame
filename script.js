function Hero(image, top, left, size) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };
    this.moveRight = function () {
        this.left += 20;
        console.log('ok: ' + this.left);
    };
    this.moveDown = function () {
        this.top += 20;
        console.log(this.top);
    };
    this.moveLeft = function () {
        this.left -= 20;
        console.log("no: "+this.left)
    };
    this.moveUp = function () {
        this.top -= 20;
    }
}

var hero = new Hero('pikachu.png', 0, 0, 200);
//var hero2=new Hero("pikachu.png",500,1110,200);
function start() {
    if (hero.left < window.innerWidth-hero.size && (window.innerHeight/2)>hero.top > 0) {
        hero.moveRight();
    }
    if (hero.left > window.innerWidth-hero.size && hero.top < window.innerHeight - hero.size) {
        hero.moveDown();
    }
    if (hero.left >0 && hero.top > window.innerHeight-hero.size) {
      hero.moveLeft();
    }
    if(hero.left<20&&hero.top>0){
      hero.moveUp();
    }
        document.getElementById('game').innerHTML = hero.getHeroElement();
        setTimeout(start, 20);

}
// function start2() {
//   if(hero.left>0){
//     hero.moveLeft();
//   }
//   document.getElementById('game').innerHTML = hero2.getHeroElement();
//   setTimeout(start2, 20);
// }
start();
//start2();