// ============================================
// SKETCH 1: RANA LOCA
// ============================================
new p5(function(p) {
    p.setup = function() {
        let canvas = p.createCanvas(400, 400);
        canvas.parent('proyecto-rana');
        p.angleMode(p.DEGREES);
    };

    p.draw = function() {
        var x = 200;
        var y = 250;

        p.background(255);
        p.noStroke();
        p.fill(30, 204, 91);
        p.ellipse(x, y, 200, 100);
        p.ellipse(x - 50, y - 50, 40, 40);
        p.ellipse(x + 50, y - 50, 40, 40);

        p.fill(255, 255, 255);
        p.ellipse(x - 50, y - 50, 30, 30);
        p.ellipse(x + 50, y - 50, 30, 30);

        p.fill(0, 0, 0);
        p.ellipse(x, y, 150, 50);
        p.rect(x - 50, y - 50, 10, 10);
        p.rect(x + 50, y - 50, 10, 10);
    };
});

// ============================================
// SKETCH 2: DIENTES DE CONEJO
// ============================================
new p5(function(p) {
    p.setup = function() {
        let canvas = p.createCanvas(400, 400);
        canvas.parent('proyecto-conejo');
    };

    p.draw = function() {
        var eye = 20;
        var long = 20;

        p.background(255);
        p.stroke(0);
        p.fill(255);
        p.ellipse(150, 70, 60, 120);
        p.ellipse(240, 70, 60, 120);

        p.ellipse(200, 170, 150, 150);

        p.fill(0, 0, 0);
        p.ellipse(170, 150, eye, eye);
        p.ellipse(230, 150, eye, eye);

        p.line(150, 200, 250, 200);

        p.noFill();
        p.rect(185, 200, 15, long);
        p.rect(200, 200, 15, long);
    };
});

// ============================================
// SKETCH 3: ¿QUÉ HAY DE CENA?
// ============================================
new p5(function(p) {
    p.setup = function() {
        let canvas = p.createCanvas(400, 400);
        canvas.parent('proyecto-cena');
        p.angleMode(p.DEGREES);
    };

    p.draw = function() {
        p.background(186, 145, 20);
        p.noStroke();
        p.fill(255);
        p.ellipse(200, 200, 350, 350);
        p.ellipse(200, 200, 300, 300);

        p.fill(255, 204, 0);
        p.ellipse(200, 200, 300, 300);

        p.stroke(150, 75, 0);
        p.strokeWeight(3);
        p.line(200, 200, 200, 50);
        p.line(200, 200, 350, 200);
        p.line(200, 200, 200, 350);
        p.line(200, 200, 50, 200);

        p.fill(200, 0, 0);
        p.noStroke();

        p.ellipse(150, 150, 30, 30);
        p.ellipse(250, 150, 30, 30);
        p.ellipse(250, 100, 30, 30);
        p.ellipse(300, 150, 30, 30);
        p.ellipse(100, 150, 30, 30);
        p.ellipse(150, 100, 30, 30);
        p.ellipse(100, 250, 30, 30);
        p.ellipse(150, 300, 30, 30);
        p.ellipse(150, 250, 30, 30);
        p.ellipse(250, 250, 30, 30);
        p.ellipse(300, 250, 30, 30);
        p.ellipse(250, 300, 30, 30);
    };
});

// ============================================
// SKETCH 4: DÍA NEVADO SOLEADO
// ============================================
new p5(function(p) {
    p.setup = function() {
        let canvas = p.createCanvas(400, 400);
        canvas.parent('proyecto-nieve');
    };

    p.draw = function() {
        p.background(0, 251, 255);

        p.noStroke();
        p.fill(163, 255, 43);
        p.rect(0, 300, 400, 100);

        p.fill(213, 255, 0);
        p.ellipse(80, 64, 100, 100);

        p.fill(255, 255, 255);
        p.ellipse(200, 300, 150, 150);
        p.ellipse(200, 200, 100, 100);
        p.ellipse(200, 120, 75, 75);
    };
});

// ============================================
// SKETCH 5: MUÑECO DE NIEVE QUE SALUDA
// ============================================
new p5(function(p) {
    p.setup = function() {
        let canvas = p.createCanvas(400, 400);
        canvas.parent('proyecto-muneco');
    };

    p.draw = function() {
        p.background(200, 230, 255);

        p.noStroke();
        p.fill(255);
        p.rect(0, 350, 399, 49);

        p.ellipse(200, 300, 150, 150);
        p.ellipse(200, 200, 100, 100);
        p.ellipse(200, 120, 75, 75);

        p.stroke(0);
        p.strokeWeight(2);
        p.line(160, 200, 100, 150);
        p.line(240, 200, 300, 150);
    };
});