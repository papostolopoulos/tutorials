# //UBER INTERVIEW PREP VIDEOS https://s3.amazonaws.com/ubercandidateprep/index.html
# //Find how performant are the next pieces of code"

# //01. Find Min This is O(n)
min = ...
for (int v : array){
  if(min > v) {
    min = v
  }
}




# //02. Min and Max (This is O(2n)???)
min = ...
max = ...
for (int v : array){
  if(min > v){
    min = v
  }
}

for ( int v : array) {
  if (max < v) {
    max = v
  }
}






# //03. Nested with two arrays (This is O(n^2))
for (int a : A) {
  for (int b : B) {
    if(a * b < a + b){
      print(a * b)
    }
  }
}







# //04. Nested with A, starting at I (This is O(n^2)???)
for i from 0 to N{
  for j from i to N {
      if i * j < K {
        print(i * j);
      }
  }
}





# //05. Max population
int last_death = Integer.min

# Step 1: Get last death
for (Person person : people) {
    last_death = max(last_death, person.death)
}
