/*
Given a dictionary of words dict where each word follows CamelCase notation, 
print all words in the dictionary that match with a given pattern consisting of uppercase characters only.

Note: The order should be such that the output strings should be sorted by the lexicographic order of their abbreviations. 
For strings with same abbreviations the strings should be sorted by the usual lexicographic order. 
So, if Output Strings are Hi and HelloWorld, Hi should come first as H lexiographically is smaller than HW.


Input:
n = 8
dict[] = {Hi,Hello,HelloWorld,HiTech
HiGeek,HiTechWorld,HiTechCity,HiTechLab}
pattern = HA
Output: No match found


Input:
n = 3
dict[]={WelcomeGeek,WelcomeToGeeksForGeeks
GeeksForGeeks}
pattern = WTG
Output: WelcomeToGeeksForGeeks
Explanation: WTG occurs in
WelcomeToGeeksForGeeks.

*/
