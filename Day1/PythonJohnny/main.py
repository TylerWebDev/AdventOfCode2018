import os
input_data = os.path.join(os.path.dirname(__file__), 'input.txt')

frequencies = []
with open(input_data) as f:
    frequencies = f.read().splitlines()

def level1():
    ending_freq = 0
    for freq in frequencies:
        ending_freq += int(freq)
    print('Ending Frequency: {}'.format(ending_freq))

def level2():
    freq_dict = {}
    calculated_freq = 0
    high_freq_found = False
    while not high_freq_found:
        for freq in frequencies:
            calculated_freq += int(freq)
            if calculated_freq not in freq_dict:
                freq_dict[calculated_freq] = 1
            else:
                high_freq_found = True
                print('First Duplicated Frequency: {}'.format(calculated_freq))
                break

level1()
level2()