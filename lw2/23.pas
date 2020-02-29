PROGRAM Test24(INPUT, OUTPUT);
USES
  DOS;
VAR
  QueryString, Temp1, Temp2, Hello: STRING;
  Parameter, Ampersand: INTEGER;
BEGIN
  WRITELN('Content-Tupe: text/plain');
  WRITELN;
  QueryString := GetEnv('QUERY_STRING');
  Hello := 'Hello Anonymous!';  
  Parameter := LENGTH(QueryString);  
  WHILE (Parameter <> 0) AND (Hello = 'Hello Anonymous!')
  DO  
    BEGIN
      Ampersand := POS('&', QueryString);
      IF Ampersand <> 0
      THEN
        Temp1 := COPY(QueryString, 1, POS('&', QueryString) - 1)
      ELSE
        Temp1 := QueryString;
      Parameter := POS('=', Temp1);
      IF Parameter <> 0
      THEN
        BEGIN
          Temp2 := COPY(Temp1, 1, POS('=', Temp1) - 1);
          IF (Temp2 = 'name')
          THEN
            Hello := 'Hello dear ' + (COPY(Temp1, POS('=', Temp1) + 1, LENGTH(Temp1))) + '!'
        END;
      IF Ampersand <> 0
      THEN
        DELETE(QueryString, 1, POS('&', QueryString))
      ELSE
        QueryString := '';       
      Parameter := LENGTH(QueryString)
    END;
  WRITELN(Hello)
END.
