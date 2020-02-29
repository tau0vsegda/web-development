PROGRAM Test(INPUT, OUTPUT);
USES
  DOS;
FUNCTION GetQueryStringParameter(Key: STRING): STRING;
VAR
  QueryString, Temp1, Temp2, Temp3: STRING;
  Parameter, Ampersand: INTEGER;
BEGIN
  Parameter := LENGTH(QueryString);
  QueryString := GetEnv('QUERY_STRING');
  Temp3 := 'unknown';
  WHILE (Parameter <> 0) AND (Temp3 = 'unknown')
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
          IF (Temp2 = Key) AND (Temp3 = 'unknown')
          THEN
            Temp3 := COPY(Temp1, POS('=', Temp1) + 1, LENGTH(Temp1))
        END;
      IF Ampersand <> 0
      THEN
        DELETE(QueryString, 1, POS('&', QueryString))
      ELSE
        QueryString := '';       
      Parameter := LENGTH(QueryString)
    END;
  GetQueryStringParameter := Temp3  
END;
BEGIN 
  WRITELN('Content-Tupe: text/plain');
  WRITELN;
  WRITELN('First Name: ', GetQueryStringParameter('first_name'));
  WRITELN('Last Name: ', GetQueryStringParameter('last_name'));
  WRITELN('Age: ', GetQueryStringParameter('age'))
END.
