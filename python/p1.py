print("Hello Python")
# strings in python
name = "John Doe"  # string is a sequence of characters.
age = 30           # integer, positive or negative whole number.
weight = 75.5     # float, decimal numbers.
is_married = True   # boolean, represents true or false values.
print(type(name))    # <class 'str'>
# concatenating strings using + operator
full_name = name + " " + str(age)                       # John Doe 30
salutation = "Hello, " + full_name + ", how are you?" # Hello
# accessing individual characters in the string
first_char = name[0]                # J
last_two_chars = name[-2:]          # oe
reversed_string = name[::-1]        # eodnIJoh
capitalized_name = name.upper()     # JOHN DOE
lowercase_name = name.lower()       # john doe
title_cased_name = name.title()      # John Doe
# finding length of a string
length = len(name)                 # 8
# checking if a substring exists in a string
has_j = "j" in name                 # True
starts_with_j = name.startswith("j") # False
ends_with_d = name.endswith("d")   # False
# replacing substrings within a string
new_name = name.replace("o", "*")   # Jhn* D*e
# splitting a string into a list of substrings
words = name.split()               # ['Jhon', 'Doe']
sentence = "Python is awesome."
words_list = sentence.split(".")    # ['Python is awesom' , ''
# joining lists into a single string with a separator
joined_words = "-".join(words_list) # Python-is-awesome
# sets in python
fruits = {"apple", "banana", "cherry"}         # set contains unique elements
set_of_numbers = {45, 67, 98}
# adding and removing items from sets
fruits.add("grape")                            # {'apple', 'banana', 'cher
fruits.remove("banana")                       # {'apple', 'cherry'}
# performing operations on sets
union_set = fruits | set_of_numbers             # {'apple', 'banana
intersection_set = fruits & set_of_numbers     # {}
difference_set = fruits - set_of_numbers       # {'apple', 'cher
symmetric_difference_set = fruits ^ set_of_numb# {'apple
# tuples in python
my_tuple = (1, "John", 30)                    # (1,
# access tuple element by index
element1 = my_tuple[0]                         # 1
# iterate over tuple
for i in my_tuple:
    print(i)                                   # 1
    
