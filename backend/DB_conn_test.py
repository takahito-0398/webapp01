import pymysql.cursors

conn = pymysql.connect(
    host="localhost",
    user="iikali",
    password="taka",
    db="idol",
    charset="utf8mb4",
    cursorclass=pymysql.cursors.DictCursor
)

try:
    with conn.cursor() as cursor:
        sql = "select family_name, last_name, birthplace from idol_tb limit 10"
        cursor.execute(sql)
        # sql = "SELECT user_id, user_name FROM users WHERE user_id = %s"
        # cursor.execute(sql, ('123',))
        result = cursor.fetchall()
        print(result)
finally:
    conn.close()
