# Import AUTh modules.
from django.http import response
from django.utils.decorators import method_decorator
from django.middleware.csrf import get_token
from django.views.decorators.csrf import csrf_exempt
# Import REST framework.
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView
from rest_framework.response import Response
# Import plugins.
from .plugins.auth_plugins import verify_jwt
# Import other plugins.
from SBN_User.plugins.response_plugin import handcraft_res
# Create your views here.
from SBN_User.models import UserInfo


@method_decorator(csrf_exempt, name="dispatch")
class SBN_Auth_API_GET_CSRF_Token(APIView):  # get CSRF token middleware.

    def get(self, request, format=None):
        response = Response({"message": "retrieved token successfully!"})
        response["X-CSRFToken"] = get_token(request)
        return response

@method_decorator(csrf_exempt, name="dispatch")
class SBN_Auth_API_GET_Verify_JWT_Token(APIView):
    
    def get(self, request, format=None):
        try: 
            bundle = verify_jwt(request.headers["Authorization"])
            return handcraft_res(200, { "package": UserInfo.objects.filter(uid=bundle["uid"]).values("username", "avatar") })
        except Exception as error:
            return handcraft_res(401, error)