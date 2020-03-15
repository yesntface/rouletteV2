export class Segment {
  ctx;
  centreX1;
  centreY1;
  centreX2;
  centreY2;
  radius;
  startAngle;
  endAngle;
  color;
  digit;
  numberRotateAngle = Math.PI / 2.5;

  constructor(centreX, centreY, radius, startAngle, endAngle, color, digit, ctx, numberRotateAngle) {
    this.centreX1 = centreX;
    this.centreY1 = centreY;
    this.radius = radius;
    this.endAngle = endAngle;
    this.startAngle = startAngle;
    this.color = color;
    this.digit = digit;
    this.ctx = ctx;
    this.numberRotateAngle = numberRotateAngle;
  }

  createArc() {
    this.ctx.fillStyle = this.color;
    this.ctx.beginPath();
    this.ctx.moveTo(this.centreX1, this.centreY1);
    this.centreX2 = this.centreX1 + Math.cos(this.startAngle) * this.radius;
    this.centreY2 = this.centreY1 + Math.sin(this.startAngle) * this.radius;
    this.ctx.lineTo(this.centreX2, this.centreY2);
    this.ctx.arc(this.centreX1, this.centreY1, this.radius, this.startAngle, this.endAngle, false);
    // if(ch) {
    //   if(ctx.isPointInPath(balls.x, balls.y)) {
    //     console.log(this.number);
    //     ch = false;
    //   }
    // }
    this.ctx.fill();
  }

  drawNumbers() {
    const x = this.centreX1 + Math.cos(this.startAngle - Math.PI / 12) * (this.radius / 1.3);
    const y = this.centreY1 + Math.sin(this.startAngle - Math.PI / 12) * (this.radius / 1.3);
    this.ctx.save();
    this.ctx.translate(x, y);
    this.ctx.rotate(this.numberRotateAngle);
    this.ctx.beginPath();
    this.ctx.font = '30px Comic Sans MS';
    this.ctx.fillStyle = 'white';
    this.ctx.textAlign = 'center';
    this.ctx.fillText(this.digit, 0, 0);
    this.ctx.restore();
  }


}
