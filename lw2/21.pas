PROGRAM PrintVariable(INPUT, OUTPUT);
USES
  DOS;
BEGIN {PrintHello}
  WRITELN('Content-Tupe: text/plain');
  WRITELN;
  WRITELN('HTTP_HOST: ', GetEnv('HTTP_HOST'));
  WRITELN('HTTP_USER_AGENT: ', GetEnv('HTTP_USER_AGENT'));
  WRITELN('CONTENT_LENGTH: ', GetEnv('CONTENT_LENGTH'));
  WRITELN('QUERY_STRING: ', GetEnv('QUERY_STRING'));
  WRITELN('REQUEST_METHOD: ', GetEnv('REQUEST_METHOD'))
END. {PrintHello}
