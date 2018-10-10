import GameObject from './gameObject'
import heroImg from '../images/heroNormal.png'
import heroLeft from '../images/heroLeft.png'
import heroRight from '../images/heroRight.png'
import heroUp from '../images/heroUp.png'
import heroDown from '../images/heroDown.png'

class Player extends GameObject {
    constructor(startPos) {
        super()
        this.speed = 5
        this.x = startPos.x
        this.y = startPos.y
        this.heroImg = new Image()
        this.heroImg.src = heroImg
        this.move()
    }

    render() {

        this.ctx.drawImage(this.heroImg, this.x, this.y)
    }

    update() {
        if (this.directions.left) {
            this.x -= this.speed
            this.heroImg.src = heroLeft
            if (this.x <= 20) this.x = 20
        }
        if (this.directions.right) {
            this.x += this.speed
            this.heroImg.src = heroRight
            if (this.x >= 460) this.x = 460
        }
        if (this.directions.up) {
            this.y -= this.speed
            this.heroImg.src = heroUp
            if (this.y <= 20) this.y = 20
        }
        if (this.directions.down) {
            this.y += this.speed
            this.heroImg.src = heroDown
            if (this.y >= 415) this.y = 415
        }
    }

    move() {
        this.directions = {
            'left': false,
            'right': false,
            'up': false,
            'down': false,
        }

        addEventListener('keydown', e => {
            if (e.code === 'KeyA' || e.code === 'ArrowLeft') this.directions.left = true
            if (e.code === 'KeyD' || e.code === 'ArrowRight') this.directions.right = true
            if (e.code === 'KeyW' || e.code === 'ArrowUp') this.directions.up = true
            if (e.code === 'KeyS' || e.code === 'ArrowDown') this.directions.down = true
        })

        addEventListener('keyup', e => {
            if (e.code === 'KeyA' || e.code === 'ArrowLeft') this.directions.left = false
            if (e.code === 'KeyD' || e.code === 'ArrowRight') this.directions.right = false
            if (e.code === 'KeyW' || e.code === 'ArrowUp') this.directions.up = false
            if (e.code === 'KeyS' || e.code === 'ArrowDown') this.directions.down = false
        })
    }

    boost() {
        this.speed = 10
        setTimeout(() => this.speed = 5, 1000)
    }
}

export default Player
