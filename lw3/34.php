<?php

header("Content-Type: text/plain");
function getGETParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string) $_GET[$name] : null;
}
$data =
[
    'First Name' => getGETParameter('first_name'),
    'Last Name' => getGETParameter('last_name'),
    'Email' => getGETParameter('email'),
    'Age' => getGETParameter('age')
];