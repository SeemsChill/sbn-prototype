# Import AUTh modules.
from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt
# Import REST framework.
from rest_framework.views import APIView
# Import models.
from .models import UserAuth, UserInfo, UserPlatform
# Import plugins.
from .plugins.data_plugins import register_package, login_package
from .plugins.response_plugin import handcraft_res
# Import JWT plugins.
from SBN_Auth.plugins.auth_plugins import generate_jwt, verify_jwt
# Import system.
from uuid import uuid4
# Create your views here.


# @method_decorator(csrf_exempt, name='dispatch')
class SBN_User_API_GET_Routes(APIView):  # get dashboard api middleware.
    #permission_classes = [AllowAny]

    def get(self, *args, **kwargs):
        try:
            api_routes = {
                "Register (create)": "api/post/register/create/user/",
                "Register (update)": "api/post/register/update/user/",
                "Login (update)": "api/post/login/",
                "Delete": "api/post/delete/user/"
            }
            return handcraft_res(200, api_routes)
        except Exception as error:
            return handcraft_res(400, error)


@method_decorator(csrf_exempt, name="dispatch")
# post register/create user.
class SBN_User_API_POST_Register_Create_User(APIView):
    #permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):

        # bundle = json.loads(request.body.decode("utf-8"))
        uuid = uuid4().hex
        try:
            get_platform, package = register_package(request.data)
            if UserInfo.objects.filter(email=package["email"]).exists():
                return handcraft_res(400, "Email is invalid or already taken.")
            platform = UserPlatform.objects.get(pk=get_platform)
            UserInfo(
                uid=uuid,
                username=package["username"],
                email=package["email"],
                platform=platform,
            ).save()
            if get_platform == 1:
                uid = UserInfo.objects.get(
                    uid=uuid
                )
                UserAuth(
                    uid=uid,
                    username=package["username"],
                    email=package["email"],
                    password=package["password"],
                ).save()
            token = generate_jwt(uuid)
            return handcraft_res(201, {"success": "{} has been created!".format(package["username"]), "token": "{}".format(token), "uid": "{}".format(uuid)})
        except Exception as error:
            if UserInfo.objects.filter(uid=uuid).exists():
                UserInfo.objects.filter(uid=uuid).delete()
            if UserAuth.objects.filter(uid=uuid).exists():
                UserAuth.objects.filter(uid=uuid).exists()
            return handcraft_res(400, error)


@method_decorator(csrf_exempt, name="dispatch")
# update the user's info after registering.
class SBN_User_API_POST_Register_Update_User(APIView):

    def post(self, request, *args, **kwargs):
        type = register_package(request.data)
        if type == False:
            return handcraft_res(406, "There's something wrong with your request package.")
        else:
            try:
                if UserInfo.objects.filter(uid=request.data["uid"]).exists():
                    UserInfo.objects.filter(uid=request.data["uid"]).update(
                        full_name=request.data["full_name"],
                        first_dest=request.data["first_dest"],
                        second_dest=request.data["second_dest"],
                        third_dest=request.data["third_dest"],
                        detail_adr=request.data["detail_adr"],
                        phone_number=request.data["phone_number"],
                    )
                if UserAuth.objects.filter(uid=request.data["uid"]).exists():
                    UserAuth.objects.filter(
                        uid=request.data["uid"]).update(is_updated=True)
                return handcraft_res(202, "Update {}".format(request.data["uid"]))
            except Exception as error:
                return handcraft_res(401, error)


@method_decorator(csrf_exempt, name="dispatch")
# login platform.
class SBN_User_API_POST_Login(APIView):

    def post(self, request, *args, **kwargs):
        bundle = login_package(request.data)
        try:
            if UserInfo.objects.filter(email=bundle["email"]).exists() and UserAuth.objects.filter(password=bundle["password"]).exists():
                auth_uid = UserInfo.objects.get(email=bundle["email"]).uid
                auth_username = UserInfo.objects.get(
                    email=bundle["email"]).username
                token = generate_jwt(auth_uid)
                return handcraft_res(202, {"success": "Welcome back! {}".format(auth_username), "token": "{}".format(token), "uid": "{}".format(auth_uid)})
            else:
                return handcraft_res(401, "Incorrect email or password.")
        except Exception as error:
            return handcraft_res(401, error)

# Ideal: The next ideal about delete api.
# - When the user click on delete account button.
# the browser shows a form which request the user
# to enter the password. If password matches, delete the account.


@method_decorator(csrf_exempt, name="dispatch")
class SBN_User_API_DELETE_Specific_User(APIView):

    def post(self, request, *args, **kwargs):
        try:
            bundle = verify_jwt(request.headers["Authorization"])
            if UserInfo.objects.filter(uid=bundle["uid"]).exists():
                auth_pass = UserAuth.objects.get(uid=bundle["uid"]).password
                auth_username = UserInfo.objects.get(
                    uid=bundle["uid"]).username
                if auth_pass == request.data["password"]:
                    UserInfo.objects.filter(uid=bundle["uid"]).delete()
                    return handcraft_res(202, {"success": "{} delete successfully.".format(auth_username)})
                else:
                    return handcraft_res(401, "Incorrect password.")
        except Exception as error:
            return handcraft_res(401, error)
