#-*- coding:utf-8 -*-

title = """"""

text = """""".replace("\n", r"\n")


template = """\t*-*"title": "{}", "content": "{}"-*-"""

complete_text = template.format(title, text).replace("*-*", "{").replace("-*-", "}")

file = open("aktar.txt", "a", encoding="utf-8")
file.write(complete_text+",\n")
file.close()