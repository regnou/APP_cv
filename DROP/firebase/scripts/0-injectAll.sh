#!/bin/bashs

main (){
  # echo "first param is: $0"
  arr=('places' 'artists' 'becas'  'cursos'  'danza'  'exposiciones'  'festival'  'literatura'  'revistas' 'otros' )
  for t in "${arr[@]}"; do
  csvToFirestore "$t"
  done
}

csvToFirestore (){
  # "script-importLocalJsonToFirebase":
  #  "cd SCRIPTS &&
  echo "all-listado-MS - $1.csv"
  node ./1-index--convert-csv-to-json --filename="$1" && node --experimental-json-modules ./2-index--import-localJson-To-Firebase.js --tablename="$1";
}

main

# node ./1-index--convert-csv-to-json --filename="exposiciones" && node --experimental-json-modules ./2-index--import-localJson-To-Firebase.js --tablename="exposiciones";