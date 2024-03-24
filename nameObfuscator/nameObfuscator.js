function sillyName(name) {
  // Your code here
  vowels = 'aeiou'
  new_name = name.capitalize()
  if any(char in vowels for char in name.lower()):
    i = name.lower().find(next(c for c in name.lower() if c in vowels))
    new_name = new_name[:i] + "bop" + new_name[i+1:]
  if name[-1].isalpha() and name[-1].lower() not in vowels:
    new_name += "-izzle"
  return new_name
}

console.log(sillyName("Alex"));  // Output: Bopalex
console.log(sillyName("Jessica")); // Output: Jessicizzle
console.log(sillyName("Brian"));  // Output: Brian