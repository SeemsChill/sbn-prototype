# Import AUTh modules.
from django.http import response
from django.utils.decorators import method_decorator
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_protect, csrf_exempt
# Import REST framework.
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
# Import models.
from .models import UserAuth, UserInfo, UserPlatform
# Import plugins.
from .plugins.data_plugins import register_package
from .plugins.response_plugin import handcraft_res
# Import system.
import os
# Create your views here.


@method_decorator(csrf_exempt, name='dispatch')
class SBN_User_API_GET_Routes(APIView):  # get dashboard api middleware.
    permission_classes = [AllowAny]

    def get(self, *args, **kwargs):
        try:
            api_routes = {
                "Register (create)": "api/post/register/create/user/",
                "Register (update)": "api/post/register/update/user/",
                "Delete": "api/delete/user/"
            }
            return handcraft_res(200, api_routes)
        except Exception as error:
            return handcraft_res(400, error)


@method_decorator(csrf_exempt, name="dispatch")
# post register/create user.
class SBN_User_API_POST_Register_Create_User(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        try:
            get_platform, package = register_package(request.data)
            platform = UserPlatform.objects.get(pk=get_platform)
            UserInfo(
                uid=package["uid"],
                username=package["username"],
                email=package["email"],
                platform=platform,
            ).save()
            if get_platform == 1:
                uid = UserInfo.objects.get(
                    uid=package["uid"]
                )
                UserAuth(
                    uid=uid,
                    username=package["username"],
                    email=package["email"],
                    password=package["password"],
                ).save()
            return handcraft_res(201, package["username"])
        except Exception as error:
            if "UNIQUE" in error:
                return handcraft_res(400, error)
            else:
                if UserInfo.objects.filter(uid=package["uid"]).exists():
                    UserInfo.objects.filter(uid=package["uid"]).delete()
                if UserAuth.objects.filter(uid=package["uid"]).exists():
                    UserAuth.objects.filter(uid=package["uid"]).exists()
                return handcraft_res(400, error)


@method_decorator(csrf_exempt, name="dispatch")
# update the user's info after registering.
class SBN_User_API_POST_Register_Update_User(APIView):
    permission_classes = [AllowAny]

    def post(self, request, *args, **kwargs):
        type = register_package(request.data)
        if type == False:
            return handcraft_res(406, "There's something wrong with your request package!")
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


# Ideal: The next ideal about delete api.
# - When the user click on delete account button.
# the browser shows a form which request the user
# to enter the password. If password matches, delete the account.
@method_decorator(csrf_exempt, name="dispatch")
class SBN_User_API_DELETE_Specific_User(APIView):
    permission_classes = [AllowAny]

    def delete(self, request, *args, **kwargs):
        try:
            if UserInfo.objects.filter(uid=request.data["uid"]).exists():
                # Ideal: get the name of the user and pass to the response.
                UserInfo.objects.filter(uid=request.data["uid"]).delete()
                return handcraft_res(202, "Delete")
        except Exception as error:
            return handcraft_res(401, error)
