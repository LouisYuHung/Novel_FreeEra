<?php
class Person {
    private $attributes = [];

    public function __construct($name) {
        $this->attributes['name'] = $name;
    }

    public function setAttribute($name, $value) {
        $this->attributes[$name] = $value;
    }

    public function getAttribute($name) {
        return $this->attributes[$name] ?? null;
    }

}