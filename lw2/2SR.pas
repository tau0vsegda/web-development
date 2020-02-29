 PROGRAM SarahRevere(INPUT, OUTPUT);
 USES
   DOS;
VAR
  QueryString, Answer: STRING;
BEGIN
  WRITELN('Content-Tupe: text/plain');
  WRITELN;
  QueryString := GetEnv('QUERY_STRING');
  Answer := 'Sarah didn''t say';
  IF QueryString ='lanterns=1'
  THEN
    Answer := 'The British are comming by land';
  IF QueryString ='lanterns=2'
  THEN
    Answer := 'The British are comming by sea';
  WRITELN(Answer)
END.
