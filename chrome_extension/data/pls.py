# Using readlines()
file1 = open('new_domains.txt', 'r', encoding="utf8")
Lines = file1.readlines()

file2 = open('domains-final.txt', 'w', encoding="utf8")

for line in Lines:
    if '#' in line:
        start = (line.find('['))
        end = (line.find(']'))
        pp = ("*://{}/*".format(line[start+1:end]))
        file2.write("\"" + pp + "\"" +",\n")
