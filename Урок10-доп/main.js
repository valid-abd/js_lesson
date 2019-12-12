const DomElement = function(options, text){
  this.selector = options.selector;
  this.height = options.height;
  this.width = options.width;
  this.bg = options.bg;
  this.fontSize = options.fontSize;
  this.text = text;
};

DomElement.prototype.createElement = function(){
  if(this.selector[0] === '.'){
    const div = document.createElement('div');
    div.style.cssText = 'height:' + this.height + '; width:' + this.width + '; background: ' + this.bg + '; font-size: ' + this.fontSize;
    div.textContent = this.text;
    document.body.appendChild(div);
  }
  if(this.selector[0] === '#'){
    const p = document.createElement('p');
    p.style.cssText = 'height:' + this.height + '; width:' + this.width + '; background: ' + this.bg + '; font-size: ' + this.fontSize;
    p.textContent = this.text;
    document.body.appendChild(p);
  }
};


const optionsSquareRed = {
  selector: '.square-red',
  height: '100px',
  width: '100px',
  bg: 'red',
  fontSize: '16px'
};
const optionsSquareBlue = {
  selector: '.square-blue',
  height: '100px',
  width: '100px',
  bg: 'blue',
  fontSize: '16px'
};

const squareR = new DomElement(optionsSquareRed, 'Красный');
const squareB = new DomElement(optionsSquareBlue, 'Синий');

squareR.createElement();
squareB.createElement();