<?php

function display_format_address($city, $street_name, $street_num, $apartment){
    return $street_num.' '.$street_name.' St., Apt. '.$apartment.', '.$city;
}

function db_format_address($city,$street_name,$street_num,$apartment){
    return implode('+',[$city,$street_name,$street_num,$apartment]);
}

function db_format_to_display_format($db_address){
    $address_array = explode('+',$db_address);
    $city = $address_array[0];
    $street_name = $address_array[1];
    $street_num = $address_array[2];
    $apartment = $address_array[3];
    return display_format_address($city, $street_name, $street_num, $apartment);
}

function datetime_to_date_and_time($datetime){
    return explode('T',$datetime);
}