import Game from './components/game'
import './scss/main.scss'

const game = new Game()

const main = () => {
    game.render()
    game.update()
    window.requestAnimationFrame(main)
}

const init = () => {
    const canvas = document.querySelector('#game')

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
}

init()
main()
