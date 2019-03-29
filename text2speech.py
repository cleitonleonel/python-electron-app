#!/usr/bin/python
# -*- coding: utf-8 -*-

import sys
import os


def speek(rand):
    phrase = str(rand).replace('"','')
    os.system('espeak -vpt-br -k -20 ' + '"' + phrase + '"')


if __name__ == "__main__":

    args = sys.argv
    print(args)
    rand = args[1]
    start = speek(rand)
    sys.stdout.flush()
