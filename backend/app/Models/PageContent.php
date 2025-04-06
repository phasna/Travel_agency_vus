<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PageContent extends Model
{
    use HasFactory;

    protected $fillable = [
        'page_name',
        'title',
        'subtitle',
        'content',
        'meta_data',
    ];

    protected $casts = [
        'meta_data' => 'array',
    ];
}
