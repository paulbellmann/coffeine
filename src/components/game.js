import Map from './map'
import Player from './player'
import Sugar from './sugar'
import Mug from './mug'
import Ui from './ui'
import backgroundMusic from '../sounds/background.mp3'
import popSound from '../sounds/pop.mp3'

class Game {
    constructor() {
        this.map = new Map()
        this.player = new Player({
            x: 200,
            y: 200,
        })
        this.sugar = new Sugar()
        this.mug = new Mug()
        this.ui = new Ui()
        this.score = 10

        setInterval(() => {
            this.score--
        }, 750)

        this.coffeeCounter = 0

        this.backgroundMusic = new Audio(backgroundMusic)
        this.backgroundMusic.volume = .3
        this.backgroundMusic.play()

        this.popSound = new Audio(popSound)
        this.popSound.volume = .2
    }

    render() {
        this.map.render()
        this.player.render()
        this.sugar.render()
        this.mug.render()
        this.ui.render(this.coffeeCounter, this.score)
    }

    update() {
        this.player.update()

        if (
            this.player.x <= this.mug.x + 32 &&
            this.mug.x <= this.player.x + 32 &&
            this.player.y <= this.mug.y + 32 &&
            this.mug.y <= this.player.y + 32
        ) {
            this.mug.respawn()
            this.coffeeCounter++
            this.popSound.play()

            if (this.score <= 9) this.score++
        }

        if (
            this.player.x <= this.sugar.x + 32 &&
            this.sugar.x <= this.player.x + 32 &&
            this.player.y <= this.sugar.y + 32 &&
            this.sugar.y <= this.player.y + 32
        ) {
            this.sugar.respawn()
            this.player.boost()
        }

        if (this.score <= 0) this.reset()
    }

    reset() {
        this.score = 10
        this.coffeeCounter = 0
        this.player.x = 200
        this.player.y = 200
    }
}

export default Game
