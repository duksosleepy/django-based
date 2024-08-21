from django.template.response import TemplateResponse


def chat(request):
    return TemplateResponse(request, "chat/single_chat.html")
