def safe_index(lst, item):        # 내가 만들고자 하는 함수
    """첫 번째 매개 변수 lst에서 item요소가 있는 index를 반환.
    item 요소가 없으면 -1 반환"""  # shift tab tab 할 때 나오는 것 작성 중
    if item in lst:
        return lst.index(item)
    return -1