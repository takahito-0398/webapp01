from flask import Flask, render_template
app = Flask(__name__,
            template_folder="./frontend/dist",
            static_folder="./frontend/dist/static"
            )

name = "takahito"
age = 24


@app.route('/')
def index():
    # return render_template('index.html')
    return render_template('index.html', name=name, age=age)


@app.route('/about')
def about():
    # return render_template('index.html')
    return render_template('index.html', name=name, age=age)


@app.route('/chart')
def chart():
    # return render_template('index.html')
    return render_template('index.html', name=name, age=age)


if __name__ == '__main__':
    app.run()
