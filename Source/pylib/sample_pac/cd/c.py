import sys
sys.path.append(r'C:\AI_X_Practice_0911\Source\pylib')
from sample_pac.ab import a

def nice():
    print('sample_pac/cd패키지안의 c모듈안의 nice')
    a.hello()
    
if __name__== '__main__':
    nice()