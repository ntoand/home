#!/usr/bin/env python
# -*- coding: utf-8 -*-

import sys

print sys.argv
in_filename = ''
if len(sys.argv) != 2:
    sys.exit('Error: not enough inputs. usage: publication-csv2html in_file.csv')

in_filename = sys.argv[1]
out_filename = in_filename + '.html'
print "Input: " + in_filename
print "Output: " + out_filename

count = 0
with open(in_filename, 'rt') as fin, open(out_filename, 'wt') as fout:
    for line in fin:
        if count == 0:
            count = count + 1
            continue
        values = line.split(';')
        if len(values) < 3:
            continue

        str_class = 'class=\"mix y' + values[0].strip() + '\" '
        str_order = 'data-order= ' + '\"' + str(count) + '\">'
        str_authors = values[1].strip()
        str_authors = str_authors.replace('Toan Dinh Nguyen', '<b>Toan Dinh Nguyen</b>')
        str_authors = str_authors.replace('Toan D Nguyen', '<b>Toan D Nguyen</b>')
        str_authors = str_authors.replace('Nguyen TD', '<b>Nguyen TD</b>')
        str_title = ', \"' + values[2].strip() + ',\" '
        str_publisher = '<i>' + values[3].strip() + '</i>, '
        str_date = values[4].strip()
        if len(values) > 5 and values[5].strip() != '':
            str_other = ', ' + values[5].strip()
        else:
            str_other = ''

        fout.write('<li ' + str_class + str_order + str_authors + str_title + str_publisher + str_date + str_other + '</li>\n'  )
        count = count + 1

print "== summary =="
print "# lines:" + str(count)
