import GameObject from './gameObject'

class Ui extends GameObject {
    constructor() {
        super()
        this.bar = document.querySelector('#bar')
    }

    render(coffeeCounter, score) {
        this.ctx.fillStyle = 'rgb(250, 250, 250)'
        this.ctx.font = '24px Helvetica'
        this.ctx.textAlign = 'left'
        this.ctx.textBaseline = 'top'
        this.ctx.fillText(`coffee: ${coffeeCounter} awake:`, 64, 64)
        this.bar.style.width = score * 10 + 'px'
    }
}

export default Ui
