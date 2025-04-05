<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('destinations', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->text('description');
            $table->string('country')->nullable();
            $table->string('city')->nullable();
            $table->decimal('price', 10, 2);
            $table->string('image_url');
            $table->integer('available_seats');
            $table->datetime('departure_date');
            $table->datetime('return_date');
            $table->timestamps();
        });
    }

    public function down()
    {
        Schema::dropIfExists('destinations');
    }
};