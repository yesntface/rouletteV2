import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { Segment } from './segment';

@Component({
  selector: 'app-wheel',
  templateUrl: './wheel.component.html',
  styleUrls: ['./wheel.component.css']
})
export class WheelComponent implements OnInit {
  @ViewChild('canvas', {static: true})
  canvas: ElementRef<HTMLCanvasElement>;
  ctx: CanvasRenderingContext2D;

  centreX;
  centreY;
  startAngle = 0;
  endAngle = Math.PI / 6;
  radius = 200;
  colours = ['black', '#e50325'];
  numbers = ['2', '8', '7', '3', '11', '1', '9', '5', '4', '10', '6', '12'];
  difference = this.endAngle - this.startAngle;
  numberRotateAngle = Math.PI / 2.5;
  wheelAngle = 0;


  constructor() { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.centreX = innerWidth / 2;
    this.centreY = innerHeight / 2;
    this.wheel();
  }

  wheel = () => {
    this.ctx.save();
    this.wheelAngle = (this.wheelAngle - Math.PI / 180) % (Math.PI * 2);
    this.ctx.translate(this.centreX, this.centreY);
    this.ctx.rotate(this.wheelAngle);
    this.ctx.translate(-this.centreX, -this.centreY);
    window.requestAnimationFrame(this.wheel);
    this.ctx.clearRect(0, 0, innerWidth, innerHeight);

    this.segments();
    this.decoration();
    this.ctx.restore();

    this.innerShade();
    this.outerShade();
  }


  segments = () => {
    const arr = [];
    for (let i = 0; i < 12; i++) {
      arr.push(new Segment(this.centreX, this.centreY,
        this.radius, this.startAngle, this.endAngle, this.colours[i % 2], this.numbers[i], this.ctx, this.numberRotateAngle));
      this.startAngle = [this.endAngle, this.endAngle += this.difference][0];
      this.endAngle %= (Math.PI * 2);
      this.numberRotateAngle += (Math.PI / 6);
      this.numberRotateAngle %= (Math.PI * 2);
    }
    arr.forEach(el => el.createArc());
    this.ctx.save();
    arr.forEach(el => el.drawNumbers());
    this.ctx.restore();
  }



  innerShade = () => {
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgba(0, 0, 0, .2)';
    this.ctx.lineWidth = 60;
    this.ctx.arc(this.centreX, this.centreY, 105, 0, Math.PI * 2);
    this.ctx.stroke();
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
  };

  outerShade = () => {
    this.ctx.beginPath();
    this.ctx.strokeStyle = 'rgba(0, 0, 0, .2)';
    this.ctx.lineWidth = 20;
    this.ctx.arc(this.centreX, this.centreY, this.radius, 0, Math.PI * 2);
    this.ctx.stroke();
  };
}
