import GameObject from './gameObject'
import sugarImg from '../images/sugar.png'

class Sugar extends GameObject {
    constructor() {
        super()
        this.sugarImg = new Image()
        this.sugarImg.src = sugarImg
        this.respawn()
    }

    render() {
        this.ctx.drawImage(this.sugarImg, this.x, this.y)
    }

    respawn() {
        this.x = -100
        this.y = -100
        setTimeout(() => {
            this.x = this.getRndMinMax(64, 512 - 64)
            this.y = this.getRndMinMax(64, 480 - 64)
        }, 5000)
    }
}

export default Sugar
