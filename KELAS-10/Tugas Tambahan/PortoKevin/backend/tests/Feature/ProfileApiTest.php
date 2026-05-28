<?php

namespace Tests\Feature;

use Tests\TestCase;

class ProfileApiTest extends TestCase
{
    public function test_profile_api_returns_portfolio_sections(): void
    {
        $this->getJson('/api/profile')
            ->assertOk()
            ->assertJsonPath('profile.name', 'Kevin')
            ->assertJsonCount(3, 'education')
            ->assertJsonCount(6, 'skills')
            ->assertJsonCount(3, 'hobbies');
    }
}
