/**
 * Created by nhatnk on 4/26/17.
 */

function Hero(image, top, left, size, speed) {
  this.image = image;
  this.top = top;
  this.left = left;
  this.size = size;
  this.speed = speed;

  this.getHeroElement = function () {
    return '<img width="' + this.size + '"' +
      ' height="' + this.size + '"' +
      ' src="' + this.image + '"' +
      ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
  }

  this.moveRight = function () {
    this.left += this.speed;
    console.log('ok: ' + this.left);
  }
  this.moveDown = function () {
    this.top += this.speed;

  }

  this.moveLeft = function () {
    this.left -= 2 * this.speed;
    console.log('ok: ' + this.left);
  }

  this.moveUp = function () {
    this.top -= 2 * this.speed;

  }

}

var hero = new Hero('pikachu.png', 0, 1, 100, 30);

function start() {
  if (hero.left > 0 && hero.left < window.innerWidth - hero.size) {
    hero.moveRight();
  }

  if (hero.left >= window.innerWidth - hero.size && hero.top < window.innerHeight - hero.size) {
    hero.moveDown();
  }

  if (hero.top >= window.innerHeight - hero.size && hero.left > 0) {
    hero.moveLeft();
  }

  if (hero.left <= 0 && hero.top  >= 0) {
    hero.moveUp();
  }



  document.getElementById('game').innerHTML = hero.getHeroElement();
  setTimeout(start, 100)
}

start();
setTimeout(location.reload(),2000)