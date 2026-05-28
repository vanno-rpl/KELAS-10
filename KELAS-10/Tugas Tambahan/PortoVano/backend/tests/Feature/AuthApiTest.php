<?php

namespace Tests\Feature;

use App\Models\User;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Illuminate\Support\Facades\Hash;
use Tests\TestCase;

class AuthApiTest extends TestCase
{
    use RefreshDatabase;

    public function test_admin_can_login_and_read_current_user(): void
    {
        User::create([
            'name' => 'Vano Admin',
            'email' => 'admin@vano.test',
            'password' => Hash::make('password'),
        ]);

        $login = $this->postJson('/api/login', [
            'email' => 'admin@vano.test',
            'password' => 'password',
        ]);

        $login->assertOk()
            ->assertJsonPath('user.email', 'admin@vano.test')
            ->assertJsonStructure(['token']);

        $this->withHeader('Authorization', 'Bearer '.$login->json('token'))
            ->getJson('/api/me')
            ->assertOk()
            ->assertJsonPath('email', 'admin@vano.test');
    }

    public function test_admin_login_rejects_invalid_credentials(): void
    {
        User::create([
            'name' => 'Vano Admin',
            'email' => 'admin@vano.test',
            'password' => Hash::make('password'),
        ]);

        $this->postJson('/api/login', [
            'email' => 'admin@vano.test',
            'password' => 'wrong-password',
        ])->assertStatus(422)
            ->assertJsonValidationErrors('email');
    }
}
