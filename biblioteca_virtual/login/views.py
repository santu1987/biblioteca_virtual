#encoding:utf-8
from django.shortcuts import render_to_response, RequestContext, HttpResponseRedirect, render, HttpResponse
from datetime import *
from django.utils import timezone
from random import choice
import hashlib
import json

def login(request):
	formulario = ''
	context = { 'formulario': formulario}
	return render_to_response('login.html', context, context_instance=RequestContext(request))