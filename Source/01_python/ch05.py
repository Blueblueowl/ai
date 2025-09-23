# cho5.py    (ch05 모듈) 자동완성핫키 : Ctrl + Alt + Space, Ctrl + Space
# Ctrl + shift + p => select interpreter => python 3.x.x 선택
# 샐행 : cmd 터미널(Contrl+j)에서 python ch05.py
def my_hello(cnt): # cnt번 반복
    print(__name__) # __main__ : 직접실행, ch05 : 모듈로 실행
    for i in range(cnt):    
        print("Hello, Python!", end='\t')
        print('Hello, World') # 줄바꿈
if __name__ == '__main__': # 직접실행
    my_hello(2)