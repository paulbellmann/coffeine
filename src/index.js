import Game from './components/game'
import './scss/main.scss'

const game = new Game()

const main = () => {
    game.render()
    game.update()
    window.requestAnimationFrame(main)
}

main()
