(function () {
    var points
    var time
    var gameIntervalId

    function addPoint() {
        points++
        displayPoints(points)
    }

    function reduceTime() {
        time--
        displayTime(time)
        if (time === 0) {
            endGame()
        }
    }

    function displayPoints(pointsParam) {
        var pointsContainer = document.querySelector('.points')
        pointsContainer.innerText = "Score: " + pointsParam
    }

    function displayTime(timeParam) {
        var pointsContainer = document.querySelector('.time')
        pointsContainer.innerText = "Time: " + timeParam
    }

    function flashBackground() {
        var body = document.querySelector('body')
        body.style.backgroundColor = 'red'
        setTimeout(
            function () {
                body.style.backgroundColor = 'green'
            },
            100
        )
    }

    function makeMole() {
        var molePosX = Math.round(
            Math.random() * (window.innerWidth - window.innerHeight / 10)
        )
        var molePosY = Math.round(
            Math.random() * (window.innerHeight - window.innerHeight / 10)
        )
        var mole = document.createElement('div')
        mole.classList.add('mole')
        mole.style.left = molePosX + 'px'
        mole.style.top = molePosY + 'px'

        mole.addEventListener(
            'click',
            function () {
                mole.remove()
                addPoint()
                flashBackground()
            }
        )
        document.querySelector('body').appendChild(mole)

        return mole
    }

    function endGame() {
        clearInterval(gameIntervalId)
        mole.remove()

        document.querySelector('.end-modal .score')
            .innerText = points + ' punktów!'
        document.querySelector('.end-modal')
            .style.display = 'block'

        document.querySelector('.end-modal')
            .addEventListener(
                'click',
                function(){
                    document.querySelector('.end-modal')
                        .style.display = 'none'
                    init()
                    startGame()
                }
            )
    }

    function startGame() {
        mole = makeMole()
        gameIntervalId = setInterval(
            function () {
                mole.remove()
                mole = makeMole()
                reduceTime()
            },
            1000
        )
    }

    function init() {
        points = 0
        time = 3
        mole = null
        displayPoints(points)
        displayTime(time)

        document.querySelector('.start-modal button')
            .addEventListener(
                'click',
                function () {
                    document.querySelector('.start-modal')
                        .style.display = 'none'
                    startGame()
                }
            )
    }

    init()
})()