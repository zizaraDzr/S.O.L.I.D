class News {
    constructor(title, text) {
        this.title = title
        this.text = text
    }
    newsLogic() {}
}

class newsRender {
    constructor(news) {
        this.news = news;
    }
    html() {
        return `
            <div>
                <h1>${this.news.title}</h1>
                <p>${this.news.text}</p>
            </div>
        `
    }
    json() {
        return JSON.stringify({title: this.news.title, text: this.news.text})
    }
}

const news = new newsRender(
    new News('заголовок новости', 'текст новости')
)
console.log(news.json())


