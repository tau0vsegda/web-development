<?php

header("Content-Type: text/plain");
function getGETParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string) $_GET[$name] : null;
}
function validOfIdentifier(string $identifier): string
{
    return preg_match("/^[A-Za-z]+[A-Za-z0-9]*$/", $identifier) ? "Yes" : "No";
}
$identifier = getGETParameter('identifier');
if ($identifier)
{
    echo $identifier;
    echo "\n";
    echo validOfIdentifier($identifier);
}
else
{
    echo 'not found GET parameter';
}