import os
import sys
import subprocess

file_path = '/home/cleiton/Projetos/Jarvis/JARVIS/Musicas'
print(file_path)
mus = file_path + '/Bryan-Adams-Please-Forgive-Me.mp3'
print(mus)
#subprocess.call("xdg-open " + str(mus), shell=True)
os.system('xdg-open ' + str(mus))
print(' Preparando tudo para tocar ', str(mus))
sys.stdout.flush()
