import os
input_data = os.path.join(os.path.dirname(__file__), 'input.txt')

box_ids = []
with open(input_data) as f:
    box_ids = f.read().splitlines()

def level1():
    freq2 = 0
    freq3 = 0
    for box_id in box_ids:
        char_dict = {}
        for char in box_id:
            if char not in char_dict:
                char_dict[char] = 1
            else:
                char_dict[char] += 1

        freq2_found = False
        freq3_found = False
        for char_count in char_dict.values():
            if char_count == 2 and not freq2_found:
                freq2_found = True
                freq2 += 1
            elif char_count == 3 and not freq3_found:
                freq3_found = True
                freq3 += 1

    print('Checksum: {}'.format(freq2 * freq3))

def match_ids(a, b):
    differences = 0
    diff_index = None
    for i, char in enumerate(a):
        if char != b[i]:
            diff_index = i
            differences += 1

    if differences == 1:
        return a[:diff_index] + a[diff_index+1:]
    else:
        return False

def level2():
    correct_boxes = False
    for box_id in box_ids:
        if correct_boxes != False:
            break

        box_ids.pop(0)
        for box_id2 in box_ids:
            correct_boxes = match_ids(box_id, box_id2)
            if correct_boxes != False:
                print('Correct IDs: {}'.format(correct_boxes))
                break

level1()
level2()