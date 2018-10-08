import GameObject from './gameObject'
import mugImg from '../images/mug.png'

class Mug extends GameObject {
    constructor() {
        super()
        this.mugImg = new Image()
        this.mugImg.src = mugImg
        this.x = this.getRndMinMax(64, 512 - 64)
        this.y = this.getRndMinMax(64, 480 - 64)
    }

    render() {
        this.ctx.drawImage(this.mugImg, this.x, this.y)
    }

    respawn() {
        this.x = this.getRndMinMax(64, 512 - 64)
        this.y = this.getRndMinMax(64, 480 - 64)
    }
}

export default Mug
