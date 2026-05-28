<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_user_can_login_and_fetch_current_user(): void
    {
        User::create([
            'name' => 'Kevin',
            'email' => 'kevin@example.com',
            'password' => Hash::make('password'),
        ]);

        $this->postJson('/api/login', [
            'email' => 'kevin@example.com',
            'password' => 'password',
        ])->assertOk()
            ->assertJsonPath('user.email', 'kevin@example.com');

        $this->getJson('/api/user')
            ->assertOk()
            ->assertJsonPath('user.name', 'Kevin');
    }

    public function test_user_can_register(): void
    {
        $this->postJson('/api/register', [
            'name' => 'Kevin',
            'email' => 'kevin@example.com',
            'password' => 'password',
            'password_confirmation' => 'password',
        ])->assertCreated()
            ->assertJsonPath('user.email', 'kevin@example.com');
    }
}
