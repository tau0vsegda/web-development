<?php

header("Content-Type: text/plain");
function getGETParameter(string $name): ?string
{
    return isset($_GET[$name]) ? (string) $_GET[$name] : null;
}
$password = getGETParameter('password');
if ($password)
{
    echo "Введённый пароль:" . $password;
    echo "\n";
    if (preg_match("/^[A-Za-z0-9]*$/", $password))
    {
        $reliability = 0;
        $len = strlen($password);
        $reliability = $reliability + $len * 4;
        $reliability = $reliability + preg_match_all("/^[0-9]*$/", $password) * 4;
        $reliability = $reliability + ($len - preg_match_all("/^[A-Z]*$/", $password)) * 2;
        $reliability = $reliability + ($len - preg_match_all("/^[a-z]*$/", $password)) * 2;
        $reliability = $reliability - preg_match("/^[A-Za-z]*$/", $password) ? $len : 0;
        $reliability = $reliability - preg_match("/^[0-9]*$/", $password) ? $len : 0;
        $reiteration = (count_chars($password, 1));
        foreach ($reiteration as $key => $value)
        {
            if ($value > 1)
            {
                $reliability = $reliability - $value;
            }
        }
        echo "Надёжность пароля равна " . $reliability;
    }
    else
    {
        echo "В пароле присутствуют недопустимые символы";
    }
}
else
{
    echo 'not found GET parameter';
}
