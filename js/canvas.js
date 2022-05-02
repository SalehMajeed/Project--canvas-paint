class Rectangles {
	constructor(x, y, color) {
		this.canvas = document.body.querySelector('canvas');
		this.ctx = this.canvas.getContext('2d');
		this.color = color;
		this.positionX = x;
		this.positionY = y;
		this.width = null;
		this.height = null;
	}
	createRectangle(width, height) {
		this.width = width;
		this.height = height;
		this.ctx.fillStyle = this.color;
		this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
	}
	checkAccess(x, y) {
		const checkWidth = x >= this.positionX && x <= this.positionX + this.width;
		const checkHeight = y >= this.positionY && y <= this.positionY + this.height;
		if (checkWidth && checkHeight) {
			return true;
		}
	}

	updateRectangleSize(w, h) {
		this.width = w;
		this.height = h;

		this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
	}
	remove() {
		this.ctx.clearRect(this.positionX, this.positionY, this.width, this.height);
	}

	updatePosition(x, y) {
		console.log('in');
		this.ctx.clearRect(this.positionX, this.positionY, this.width, this.height);

		this.positionX = x;
		this.positionY = y;
		this.ctx.fillRect(this.positionX, this.positionY, this.width, this.height);
	}
}

class ModuleOne {
	constructor() {
		this.color = [
			'rgba(0, 0, 0)',
			'rgba(255,255,255)',
			'rgba(255,0,0)',
			'rgba(0,255,0)',
			'rgba(0,0,255)',
			'rgba(255,255,0)',
			'rgba(0,255,255)',
			'rgba(255,0,255)',
			'rgba(192,192,192)',
			'rgba(128,128,128)',
			'rgba(128,0,0)',
			'rgba(128,128,0)',
			'rgba(0,128,0)',
			'rgba(128,0,128)',
			'rgba(0,128,128)',
			'rgba(0,0,128)',
			'rgba(128,0,0)',
			'rgba(139,0,0)',
			'rgba(165,42,42)',
			'rgba(178,34,34)',
			'rgba(220,20,60)',
			'rgba(255,0,0)',
			'rgba(255,99,71)',
			'rgba(255,127,80)',
			'rgba(205,92,92)',
			'rgba(240,128,128)',
			'rgba(233,150,122)',
			'rgba(250,128,114)',
			'rgba(255,160,122)',
			'rgba(255,69,0)',
			'rgba(255,140,0)',
			'rgba(255,165,0)',
			'rgba(255,215,0)',
			'rgba(184,134,11)',
			'rgba(218,165,32)',
			'rgba(238,232,170)',
			'rgba(189,183,107)',
			'rgba(240,230,140)',
			'rgba(128,128,0)',
			'rgba(255,255,0)',
			'rgba(154,205,50)',
			'rgba(85,107,47)',
			'rgba(107,142,35)',
			'rgba(124,252,0)',
			'rgba(127,255,0)',
			'rgba(173,255,47)',
			'rgba(0,100,0)',
			'rgba(0,128,0)',
			'rgba(34,139,34)',
			'rgba(0,255,0)',
			'rgba(50,205,50)',
			'rgba(144,238,144)',
			'rgba(152,251,152)',
			'rgba(143,188,143)',
			'rgba(0,250,154)',
			'rgba(0,255,127)',
			'rgba(46,139,87)',
			'rgba(102,205,170)',
			'rgba(60,179,113)',
			'rgba(32,178,170)',
			'rgba(47,79,79)',
			'rgba(0,128,128)',
			'rgba(0,139,139)',
			'rgba(0,255,255)',
			'rgba(0,255,255)',
			'rgba(224,255,255)',
			'rgba(0,206,209)',
			'rgba(64,224,208)',
			'rgba(72,209,204)',
			'rgba(175,238,238)',
			'rgba(127,255,212)',
			'rgba(176,224,230)',
			'rgba(95,158,160)',
			'rgba(70,130,180)',
			'rgba(100,149,237)',
			'rgba(0,191,255)',
			'rgba(30,144,255)',
			'rgba(173,216,230)',
			'rgba(135,206,235)',
			'rgba(135,206,250)',
			'rgba(25,25,112)',
			'rgba(0,0,128)',
			'rgba(0,0,139)',
			'rgba(0,0,205)',
			'rgba(0,0,255)',
			'rgba(65,105,225)',
			'rgba(138,43,226)',
			'rgba(75,0,130)',
			'rgba(72,61,139)',
			'rgba(106,90,205)',
			'rgba(123,104,238)',
			'rgba(147,112,219)',
			'rgba(139,0,139)',
			'rgba(148,0,211)',
			'rgba(153,50,204)',
			'rgba(186,85,211)',
			'rgba(128,0,128)',
			'rgba(216,191,216)',
			'rgba(221,160,221)',
			'rgba(238,130,238)',
			'rgba(255,0,255)',
			'rgba(218,112,214)',
			'rgba(199,21,133)',
			'rgba(219,112,147)',
			'rgba(255,20,147)',
			'rgba(255,105,180)',
			'rgba(255,182,193)',
			'rgba(255,192,203)',
			'rgba(250,235,215)',
			'rgba(245,245,220)',
			'rgba(255,228,196)',
			'rgba(255,235,205)',
			'rgba(245,222,179)',
			'rgba(255,248,220)',
			'rgba(255,250,205)',
			'rgba(250,250,210)',
			'rgba(255,255,224)',
			'rgba(139,69,19)',
			'rgba(160,82,45)',
			'rgba(210,105,30)',
			'rgba(205,133,63)',
			'rgba(244,164,96)',
			'rgba(222,184,135)',
			'rgba(210,180,140)',
			'rgba(188,143,143)',
			'rgba(255,228,181)',
			'rgba(255,222,173)',
			'rgba(255,218,185)',
			'rgba(255,228,225)',
			'rgba(255,240,245)',
			'rgba(250,240,230)',
			'rgba(253,245,230)',
			'rgba(255,239,213)',
			'rgba(255,245,238)',
			'rgba(245,255,250)',
			'rgba(112,128,144)',
			'rgba(119,136,153)',
			'rgba(176,196,222)',
			'rgba(230,230,250)',
			'rgba(255,250,240)',
			'rgba(240,248,255)',
			'rgba(248,248,255)',
			'rgba(240,255,240)',
			'rgba(255,255,240)',
			'rgba(240,255,255)',
			'rgba(255,250,250)',
			'rgba(0,0,0)',
			'rgba(105,105,105)',
			'rgba(128,128,128)',
			'rgba(169,169,169)',
			'rgba(192,192,192)',
			'rgba(211,211,211)',
			'rgba(220,220,220)',
			'rgba(245,245,245)',
			'rgba(255,255,255)',
		];
		this.canvas = null;
		this.rectangles = [];
		this.init();
		this.current_rectangle = '';
		this.isMoveMove = false;
	}
	init() {
		this.canvas = this.createCanvas();
		this.createButton();
	}

	createCanvas() {
		const canvas = document.createElement('canvas');
		canvas.width = document.documentElement.clientWidth - 50;
		canvas.height = document.documentElement.clientHeight - 50;
		canvas.style.border = '1px solid black';
		document.body.append(canvas);
		canvas.addEventListener('mousedown', this.fromFirstModuleCanvasMouseDown);
		canvas.addEventListener('dblclick', this.fromFirstModuleCanvasDoubleClick);
		return canvas;
	}

	createButton() {
		const button = document.createElement('button');
		button.innerText = 'Clear/Reset';
		button.id = 'clear-reset';
		document.body.append(button);
		button.addEventListener('click', this.buttonClickHandler);
	}

	buttonClickHandler = () => {
		this.rectangles.forEach((each_rectangel, index, arr) => {
			each_rectangel.remove();
			delete arr[index];
		});
		this.rectangles = [];
	};

	fromFirstModuleCanvasDoubleClick = e => {
		for (let i = 0; i < this.rectangles.length; i++) {
			if (this.rectangles[i].checkAccess(e.offsetX, e.offsetY) == true) {
				for (let i = 0; i < this.rectangles.length; i++) {
					if (this.rectangles[i].checkAccess(e.offsetX, e.offsetY) == true) {
						this.rectangles[i].remove();
						this.canvas.removeEventListener('mousemove', this.fromFirstModuleCanvasMouseMove);
						break;
					}
				}
			}
		}
	};

	fromFirstModuleCanvasMouseDown = e => {
		this.current_rectangle = new Rectangles(
			e.offsetX,
			e.offsetY,
			this.color[Math.floor(Math.random() * this.color.length)]
		);
		this.current_rectangle.createRectangle();
		this.canvas.addEventListener('mousemove', this.fromFirstModuleCanvasMouseMove);
		this.canvas.addEventListener('mouseup', this.fromFirstModuleCanvasMouseUp, { once: true });
	};

	fromFirstModuleCanvasMouseMove = e => {
		this.isMoveMove = true;
		console.log('in move');
	};

	fromFirstModuleCanvasMouseUp = e => {
		this.canvas.removeEventListener('mousemove', this.fromFirstModuleCanvasMouseMove);
		if (this.isMoveMove == false) {
			return;
		}
		this.isMoveMove = false;
		console.log('in');
		this.current_rectangle.updateRectangleSize(e.offsetX, e.offsetY);
		this.rectangles.push(this.current_rectangle);
	};
}

class ModuleTwo extends ModuleOne {
	constructor() {
		super();
		this.currentElement = '';
	}

	fromSecondModuleCanvasMouseDown = e => {
		for (let i = 0; i < this.rectangles.length; i++) {
			if (this.rectangles[i].checkAccess(e.offsetX, e.offsetY) == true) {
				this.currentElement = this.rectangles[i];
				this.canvas.addEventListener('mousemove', this.fromSecondModuleCanvasMouseMove);
				break;
			}
		}
	};

	fromSecondModuleCanvasMouseMove = e => {
		this.currentElement.updatePosition(e.offsetX, e.offsetY);
		this.canvas.addEventListener('mouseup', this.fromSecondModuleCanvasMouseUp, { once: true });
	};

	fromSecondModuleCanvasMouseUp = e => {
		this.currentElement.updatePosition(e.offsetX, e.offsetY);
		this.canvas.removeEventListener('mousemove', this.fromSecondModuleCanvasMouseMove);
	};
}

document.addEventListener('DOMContentLoaded', () => {
	new ModuleTwo();
});
