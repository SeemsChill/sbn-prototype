# Import JWT module.
import jwt
# Import time.
import time
# Import modules from other app.
from SBN_User.plugins.response_plugin import handcraft_res
from SBN_User.models import UserAuth

seret_key = "Saigon_By_Night"


def generate_jwt(uid):
    jwt_token = "Bearer {}".format(jwt.encode(
        {"uid": uid, "exp": (int(time.time()) + 60*60)}, seret_key, algorithm="HS256"))
    return jwt_token


def verify_jwt(key):
    list = ["uid", "exp"]
    result = key.split(" ")
    try:
        decoded_key = jwt.decode(result[1], seret_key, algorithms="HS256")
        # Check format.
        for item in list:
            if item not in decoded_key:
                return handcraft_res(401, "Unauthorized jwt key token!")
        # Check the expiration date.
        current_now = int(time.time())
        if current_now > int(decoded_key["exp"]):
            return handcraft_res(403, "Token has expired {} > {}".format(current_now, decoded_key["exp"]))
        if UserAuth.objects.filter(uid=decoded_key["uid"]).exists() == False:
            return handcraft_res(403, "User not found in the database!")
        return decoded_key
    except Exception as error:
        return handcraft_res(401, error)
