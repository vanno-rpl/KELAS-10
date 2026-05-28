<?php

use Illuminate\Support\Facades\Artisan;

Artisan::command('about:portfolio', function () {
    $this->info('Kevin Portfolio Profile');
});
