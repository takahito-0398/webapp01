import pymysql.cursors
from flask import Flask, request, jsonify, make_response
from flask_cors import CORS


conn_cfg = {
    "host": "localhost",
    "user": "iikali",
    "password": "taka",
    "db": "idol",
    "charset": "utf8mb4",
    "cursorclass": pymysql.cursors.DictCursor
}


def conn_db(sql, conn_cfg=conn_cfg):
    conn = pymysql.connect(**conn_cfg)
    try:
        with conn.cursor() as cursor:
            # sql = "select family_name, last_name, birthplace from idol_tb limit 1"
            cursor.execute(sql)
            # sql = "SELECT user_id, user_name FROM users WHERE user_id = %s"
            # cursor.execute(sql, ('123',))
            result = cursor.fetchall()
            # print(result)
    finally:
        conn.close()
        return result


###########################
app = Flask(__name__)
CORS(app)


@app.route("/hoge", methods=['GET'])
def getHoge():
    # URLパラメータ
    params = request.args
    response = {}
    if 'param' in params:
        response.setdefault('res', 'param is : ' + params.get('param'))
    return make_response(jsonify(response))


@app.route("/hoge", methods=['POST'])
def postHoge():
    # ボディ(application/json)パラメータ
    params = request.json
    response = {}
    if 'param' in params:
        response.setdefault('res', 'param is : ' + params.get('param'))
    return make_response(jsonify(response))


if __name__ == '__main__':
    # app.run(host="127.0.0.1", port=5000)
    sql = "select family_name, last_name, birthplace from idol_tb limit 1"

    res = conn_db(sql)
    print(res)
