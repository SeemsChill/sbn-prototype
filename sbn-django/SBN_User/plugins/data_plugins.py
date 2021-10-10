from .response_plugin import handcraft_res

def register_package(data):
    platforms = {"facebook": 2, "github": 3}

    keys = ["full_name", "first_dest",
                         "second_dest", "third_dest", "detail_adr", "phone_number"]

    if "platform" in data:
        platform = platforms.get(data["platform"], 1)
        return platform, data
    else:
        # Register update package is not empty and mistype.
        for item in keys:
            if item not in data:
                return False
        for key, val in data.items():
            if val == "" or str(type(val)) == "<class 'int'>":
                return False
        return True


def login_package(data):
    keys = ["email", "password"]

    for item in keys:
        if item not in data:
            return handcraft_res(401, { "error": "Package unauthorized!" })
        return data