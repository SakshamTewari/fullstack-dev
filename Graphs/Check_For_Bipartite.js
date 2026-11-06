/*
Given an array of strings arr[], and two different strings start and target, representing two words. 
The task is to find the length of the smallest chain from string start to target, such that only one character of the adjacent words differs and each word exists in arr[].

Note: Print 0 if it is not possible to form a chain. Each word in array arr[] is of same size m and contains only lowercase English alphabets.

Examples:

Input: start = "toon", target = "plea", arr[] = ["poon", "plee", "same", "poie", "plea", "plie", "poin"]
Output: 7
Explanation: toon  → poon  → poin  → poie  → plie  → plee  → plea

Input: start = "abcv", target = "ebad", arr[] = ["abcd", "ebad", "ebcd", "xyza"]
Output: 4
Explanation: abcv  → abcd  → ebcd  → ebad
*/
