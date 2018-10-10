import GameObject from './gameObject'
import mugImg from '../images/mug.png'

class Ui extends GameObject {
    constructor() {
        super()

        this.mugImg = new Image()
        this.mugImg.src = mugImg
    }

    render(coffeeCounter, score) {
        // background
        this.ctx.beginPath()
        this.ctx.rect(0, 480, 512, 50)
        this.ctx.fillStyle = '#000'
        this.ctx.fill()

        // border
        this.ctx.beginPath()
        this.ctx.rect(199, 489, 302, 32)
        this.ctx.strokeStyle = '#fff'
        this.ctx.stroke()

        //bar
        this.ctx.beginPath()
        this.ctx.rect(200, 490, score * 30, 30)
        this.ctx.fillStyle = '#ff0000'
        this.ctx.fill()

        // counter
        this.ctx.beginPath()
        this.ctx.drawImage(this.mugImg, 50, 490)
        this.ctx.fillStyle = 'rgb(250, 250, 250)'
        this.ctx.font = '24px Helvetica'
        this.ctx.textAlign = 'left'
        this.ctx.textBaseline = 'top'
        this.ctx.fillText(`${coffeeCounter}`, 100, 490)
    }
}

export default Ui
