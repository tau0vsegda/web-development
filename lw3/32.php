<?php

header("Content-Type: text/plain");
function getGETParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string) $_GET[$name] : null;
}
$identifier = getGETParameter('identifier');
if ($identifier === null)
{
    echo 'not found GET parameter';
}
else
{
    echo $identifier;
    echo "\n";
    echo preg_match("/^[A-Za-z]+[A-Za-z0-9]*$/", $identifier) ? "Yes" : "No";
}