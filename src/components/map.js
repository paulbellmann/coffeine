import GameObject from './gameObject'
import bg from '../images/bg.jpg'

class Map extends GameObject {
    constructor() {
        super()

        this.mapImg = new Image()
        this.mapImg.src = bg
    }

    render() {
        this.ctx.drawImage(this.mapImg, 0, 0)
    }
}

export default Map

