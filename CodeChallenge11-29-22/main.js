// In this Kata, you will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.

// For example:
// dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
// dup(["kelless","keenness"]) = ["keles","kenes"].
// (dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo']);
// (dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese']);
// (dup(["kelless","keenness"]), ['keles','kenes']);
// (dup(["Woolloomooloo","flooddoorroommoonlighters","chuchchi"]), ['Wolomolo','flodoromonlighters','chuchchi']);
// (dup(["adanac","soonness","toolless","ppellee"]), ['adanac','sones','toles','pele']);
// (dup(["callalloo","feelless","heelless"]), ['calalo','feles','heles']);
// (dup(["putteellinen","keenness"]), ['putelinen','kenes']);
// (dup(["kelless","voorraaddoosspullen","achcha"]), ['keles','voradospulen','achcha']);

// Strings will be lowercase only, no spaces. See test cases for more examples.
// Good luck!
// If you like this Kata, please try:

function dup(s) {
  return s.map((x) =>
    x
      .split("")
      .filter((k, i, a) => k !== a[i + 1])
      .join("")
  );
}
