from django.urls import path

from . import consumers

websocket_urlpatterns = [
    # other websocket URLs here
    path(
        r"/ws/chatgpt/",
        consumers.ChatConsumer.as_asgi(),
        name="chatgpt",
    ),
]
