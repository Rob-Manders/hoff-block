# Using readlines()
file1 = open('domains.txt', 'r', encoding="utf8")
Lines = file1.readlines()

file2 = open('myfile.txt', 'w', encoding="utf8")
# file1.writelines(L)
  
count = 0
# Strips the newline character
for line in Lines:
    file2.write("\"{}\",".format(line))

file1.close()
file2.close()
