const CardFactory = Object.create(null, {
    init: {
        value: function () {
            return this
        }
    },
    render: {
        value: function (target) {
            const article = document.createElement("article")
            article.textContent = "Test article"
            target.appendChild(article)
        }
    }
})

export default CardFactory
