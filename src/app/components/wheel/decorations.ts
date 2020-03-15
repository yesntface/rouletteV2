export class Decorations {
  ctx: CanvasRenderingContext2D;
  centreX: number;
  centreY: number;
  startPoint: number = 0;
  endPoint: number = Math.PI * 2;
  radius: number;


  constructor(ctx: CanvasRenderingContext2D, centreX: number, centreY: number, radius: number) {
    this.ctx = ctx;
    this.centreX = centreX;
    this.centreY = centreY;

    this.radius = radius;
  }

  decoration = () => {
    // background
    this.ctx.fillStyle = '#ebdce5';
    this.ctx.beginPath();
    this.ctx.arc(this.centreX, this.centreY, 80, 0, Math.PI * 2);
    this.ctx.fill();
    this.ctx.beginPath();

    // middle ball
    this.ctx.fillStyle = 'black';
    this.ctx.arc(this.centreX, this.centreY, 13, 0, Math.PI * 2);

    // vertical line and balls
    this.ctx.moveTo(this.centreX - 40, this.centreY);
    this.ctx.arc(this.centreX - 30, this.centreY, 7, 0, Math.PI * 2);
    this.ctx.rect(this.centreX - 30, this.centreY - 2.5, 60, 5);
    this.ctx.arc(this.centreX + 30, this.centreY, 7, 0, Math.PI * 2);

    // horizontal line and balls
    this.ctx.moveTo(this.centreX, this.centreY - 40);
    this.ctx.arc(this.centreX, this.centreY - 30, 7, 0, Math.PI * 2);
    this.ctx.rect(this.centreX - 2.5, this.centreY - 30, 5, 60);
    this.ctx.arc(this.centreX, this.centreY + 30, 7, 0, Math.PI * 2);
    this.ctx.fill();
  }

  outerShade = () => {
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgba(0, 0, 0, .2)';
    this.ctx.lineWidth = 20;
    this.ctx.arc(this.centreX, this.centreY, this.radius, 0, Math.PI * 2);
    this.ctx.stroke();
  }

  innerShade = () => {
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgba(0, 0, 0, .2)';
    this.ctx.lineWidth = 60;
    this.ctx.arc(this.centreX, this.centreY, 105, 0, Math.PI * 2);
    this.ctx.stroke();
  }
}
