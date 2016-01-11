from django.conf.urls import include, url
from django.contrib import admin

urlpatterns = [
    # Examples:
    # url(r'^$', 'biblioteca_virtual.views.home', name='home'),
    # url(r'^blog/', include('blog.urls')),
    url(r'^biblioteca_virtual/$','login.views.login', name='Principal')
]
