# User class
```php
<?php

class User
{
    private $username;
    private $email;

    public function setUsername($username)
    {
        $this->username = $username;
    }
        
    public function getUsername()
    {
        return $this->username;
    }

    public function setEmail($email)
    {
        $this->email = $email;
    }

    public function getEmail()
    {
        return $this->email;
    }
}
```
