<?php

header("Content-Type: text/plain");
function getGETParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string) $_GET[$name] : null;
}
$text = getGETParameter('text');
if ($text === null)
{
    echo 'not found GET parameter';
}
else
{
    echo $text;
    echo "\n";
    $flag = 'N';
    $result = '';
    for ($counter = 0; $counter < strlen($text); $counter++)
    {
        $symbol = $text[$counter];
        if (($symbol === ' ') && ($flag === 'U'))
        {
            $flag = 'S';
        }
        else
        {
           if (!($symbol === ' '))
           {
               if ($flag === 'S')
               {
                   $result = $result . ' ';
               }
           $flag = 'U';
           $result = $result . $symbol;
           }
        }
    }
    echo $result;
}
echo "\n";  