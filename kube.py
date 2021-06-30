#!/usr/bin/python3
import subprocess as sp 
import cgi
print("content-type: text/html")
print()

a=cgi.FieldStorage()
cmd=a.getvalue("var")

 
output=sp.getoutput(cmd)
 
print(output)