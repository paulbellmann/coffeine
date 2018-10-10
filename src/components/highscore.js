import GameObject from './gameObject'
import Cookies from 'js-cookie'

class Highscore extends GameObject {
    constructor() {
        super()
    }

    render() {
        this.drawHeadline()
        this.drawTable()
    }

    drawHeadline() {
        this.ctx.fillStyle = 'rgb(0, 0, 0)'
        this.ctx.font = '44px Helvetica'
        this.ctx.textAlign = 'left'
        this.ctx.textBaseline = 'top'
        this.ctx.fillText('Highscore', 550, 25)
    }

    drawTable() {
        //this.ctx.clearRect(550, 100, 500, 1000)
        this.ctx.fillStyle = 'rgb(0, 0, 0)'
        this.ctx.font = '24px Helvetica'
        this.ctx.textAlign = 'left'
        this.ctx.textBaseline = 'top'
        this.ctx.fillText('Points', 550, 100)
        this.ctx.fillText('Timestamp', 800, 100)

        this.ctx.font = '20px Helvetica'
        const highscore = this.getHighscore()
        highscore.forEach((e, i) => {
            this.ctx.fillText(e.points, 550, 140 + i * 30)
            this.ctx.fillText(e.timestamp, 800, 140 + i * 30)
        })

    }

    getHighscore() {
        return Cookies.get('highscore') ? Cookies.getJSON('highscore') : []
    }

    setHighscore(points) {
        let timestamp = new Date().toLocaleString(),
            highscore = this.getHighscore()

        highscore = [...highscore, { points, timestamp,}]
        highscore.sort((a, b) => {
            if (a.points < b.points) return 1
            if (a.points > b.points) return -1
            return 0
        })
        highscore = highscore.slice(0, 5)
        Cookies.set('highscore', highscore, { expires: 365 })
    }
}

export default Highscore
