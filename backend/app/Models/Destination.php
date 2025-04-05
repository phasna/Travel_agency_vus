<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Destination extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'description',
        'country',
        'city',
        'price',
        'image_url',
        'available_seats',
        'departure_date',
        'return_date'
    ];

    protected $casts = [
        'price' => 'decimal:2',
        'available_seats' => 'integer',
        'departure_date' => 'datetime',
        'return_date' => 'datetime'
    ];
}
