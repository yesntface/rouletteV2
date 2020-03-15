import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import { Segment } from './segment';
import {Decorations} from './decorations';

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
  decorations;


  constructor() { }

  ngOnInit(): void {
    this.ctx = this.canvas.nativeElement.getContext('2d');
    this.centreX = this.canvas.nativeElement.width / 2;
    this.centreY = this.canvas.nativeElement.height / 2;
    this.decorations = new Decorations(this.ctx, this.centreX, this.centreY, this.radius);
    this.wheel();
  }

  wheel = () => {
    window.requestAnimationFrame(this.wheel);
    this.ctx.save();
    this.wheelAngle = (this.wheelAngle - Math.PI / 180) % (Math.PI * 2);
    this.ctx.translate(this.centreX, this.centreY);
    this.ctx.rotate(this.wheelAngle);
    this.ctx.translate(-this.centreX, -this.centreY);
    this.ctx.clearRect(0, 0, innerWidth, innerHeight);

    this.segments();
    this.decorations.decoration();
    this.ctx.restore();

    this.decorations.innerShade();
    this.decorations.outerShade();
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

}
