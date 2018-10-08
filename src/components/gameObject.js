class GameObject {
    constructor() {
        this.canvas = document.querySelector('#game')
        this.ctx = this.canvas.getContext('2d')
        this.x = -100
        this.y = -100
    }

    getRndMinMax(min, max) {
        return Math.floor(Math.random() * (max - min) + min)
    }
}

export default GameObject
